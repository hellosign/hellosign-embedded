#!/usr/bin/env node

const { context, getOctokit } = require('@actions/github');
const { setOutput } = require('@actions/core');

const semver = require('semver');
const process = require("process");

console.assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN not present");

const octokit = getOctokit(process.env.GITHUB_TOKEN);
const workspace = process.env.GITHUB_WORKSPACE;

const beta_version_limit = 10;

const {
    repo: { owner, repo },
    payload: { number },
} = context;
console.assert(number, "number not present");

const gh_api_header = { headers: { 'X-GitHub-Api-Version': '2022-11-28' } }

main();

async function validateReleaseVersion() {

    const { version } = require(`${workspace}/package.json`);

    const { data: latest } = await octokit.request(`GET /repos/${owner}/${repo}/releases/latest`, gh_api_header)

    // Version set in package.json must be greater than latest
    console.log("Package Version: ", version, "Latest Version: ", latest.name)
    if (! semver.gt(version, latest.name)) {
        console.log("version property in package.json must be greater than: ", latest.name)
        process.exit(1);
    }
    return version;
}

async function validateBetaVersion( version, beta_inc = 0 ) {

    if (beta_inc > beta_version_limit) {
        console.log("Too many beta versions! (arbitrary limitation) ", beta_inc)
        process.exit(1);
    }

    let beta_version = `${version}-beta.${beta_inc}`
    console.log("Beta Version: ", beta_version)

    let ref = `/refs/tags/${beta_version}`

    try {
        var tag = await octokit.rest.git.getRef({
            owner: owner,
            ref: ref,
            repo: repo,
        });
        console.log("Tag exists [rest]: ", tag)

        const { data: beta_tag } = await octokit.request(
            `GET /repos/${owner}/${repo}/refs/tags/${beta_version}`,
            gh_api_header
        )
        console.log("Tag exists [request]: ", beta_tag.name)
        return validateBetaVersion( version, beta_inc++ );
    } catch (error) {
        if (error.status === 404) {
            console.log(`Tag does not exist exist @ 'refs/tags/${beta_version}'`)
            console.log(error)
            return beta_version;
            process.exit(1);
        } else {
            console.log("Unknown oktokit error ", error.status)
            process.exit(1);
        }
    }

    return beta_version;
}

async function main() {
    const version = await validateReleaseVersion();
    if (process.argv[2] === '--beta') {
        const beta_version = await validateBetaVersion(version);
        setOutput("version", beta_version);
    } else {
        setOutput("version", version);
    }
}

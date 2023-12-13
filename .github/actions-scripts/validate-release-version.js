#!/usr/bin/env node

const { context, getOctokit } = require('@actions/github');
const { setOutput } = require('@actions/core');

const semver = require('semver');
const process = require("process");

console.assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN not present");

const octokit = getOctokit(process.env.GITHUB_TOKEN);
const workspace = process.env.GITHUB_WORKSPACE;

const {
    repo: { owner, repo },
    payload: { number },
} = context;
console.assert(number, "number not present");

const gh_api_header = { headers: { 'X-GitHub-Api-Version': '2022-11-28' } }

main();

async function validateReleaseVersion() {

    const { version } = require(`${workspace}/package.json`);
    console.log("Package Version: ", version)

    const { data: latest } = await octokit.request(`GET /repos/${owner}/${repo}/releases/latest`, gh_api_header)
    console.log("Latest Version: ", latest.name)

    // Version set in package.json must be greater than latest
    if (! semver.gt(version, latest.name)) {
        console.log("version property in package.json must be greater than: ", latest.name)
        process.exit(1);
    }
    return version;
}

async function validateBetaVersion( version, beta_inc = 0 ) {

    const beta_version = `${version}-beta.${beta_inc}`

    try {
        const { data: beta_tag } = await octokit.request(
            `GET /repos/${owner}/${repo}/releases/tag/${beta_version}`,
            gh_api_header
        )
        console.log("Tag already exists: ", beta_tag.name)
    } catch (error) {
        if (error.status === 404) {
            console.log("Tag does not exist exist.")
        } else {
            // handle all other errors
            throw error
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

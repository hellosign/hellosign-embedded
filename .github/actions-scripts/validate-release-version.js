#!/usr/bin/env node

const { context, getOctokit } = require('@actions/github');
const { setOutput } = require('@actions/core');

const semver = require('semver');
const process = require("process");

console.assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN not present");

const octokit = getOctokit(process.env.GITHUB_TOKEN);
const workspace = process.env.GITHUB_WORKSPACE;

main();

async function validateReleaseVersion() {
    const {
        repo: { owner, repo },
        payload: { number },
    } = context;
    console.assert(number, "number not present");

    const { version } = require(`${workspace}/package.json`);
    console.log("Submitted Version: ", version)

    const { data: latest } = await octokit.request(`GET /repos/${owner}/${repo}/releases/latest`, {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
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

    const { data: beta_tag } = await octokit.request(`GET /repos/${owner}/${repo}/releases/tag/${beta_version}`, {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    if (beta_tag.name)  {
        console.log("Tag already exists: ", beta_tag.name)
    } else {
        console.log("Tag does not exist exist.")
    }

    return beta_version;
}

async function main() {
    const version = await validateReleaseVersion();
    if (process.argv[2] === '--beta') {
        const beta_version = await validateBetaVersion();
        setOutput("version", beta_version);
    } else {
        setOutput("version", version);
    }
}

#!/usr/bin/env node

const { context, getOctokit } = require('@actions/github');
const { setOutput } = require('@actions/core');

const semver = require('semver');

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
    console.assert(semver.gte(version, latest.name));
    return version;
}

async function main() {
    const version = await validateReleaseVersion();
    setOutput("version", version);
}

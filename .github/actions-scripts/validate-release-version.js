#!/usr/bin/env node

const { context, getOctokit } = require('@actions/github');
const { setOutput } = require('@actions/core');

const { semver } = require('semver');

console.assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN not present");

const octokit = getOctokit(process.env.GITHUB_TOKEN);

main();

async function validateReleaseVersion() {
    // const {
    //     repo: { owner, repo },
    //     payload: { number },
    // } = context;
    // console.log("Context values: ", owner, repo)
    // console.assert(number, "number not present");

    const version = require(`${process.env.GITHUB_WORKSPACE}/package.json`).version;
    const { data: latest } = await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        owner: context.owner,
        repo: context.repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    // Version set in package.json must be greater than latest
    console.assert(semver.gt(version, latest));
    return version;
}

async function main() {
    const version = await validateReleaseVersion();
    setOutput("version", version);
}

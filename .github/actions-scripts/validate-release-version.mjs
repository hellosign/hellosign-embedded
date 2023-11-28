#!/usr/bin/env node

import { context, getOctokit } from "@actions/github";
import { setOutput } from "@actions/core";
import { semver } from "semver"

console.assert(process.env.GITHUB_TOKEN, "GITHUB_TOKEN not present");

const octokit = getOctokit(process.env.GITHUB_TOKEN);

main();

async function validateReleaseVersion() {
    const version = require("./package.json").version;
    const {
        repo: { owner, repo },
        payload: { number },
    } = context;
    console.assert(number, "number not present");
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

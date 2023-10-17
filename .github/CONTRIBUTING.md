# How to Contribute

Welcome! HelloSign Embedded is an open source project which allows HelloSign API customers the ability to embed signature requests and templates from within their external web applications. Bug reports and patches are essential to keeping our library free and up to date.

## Making Changes

* Make sure your commit messages adhere to the [Conventional Commits specification](https://conventionalcommits.org/).
* Make sure your code is written so that is satisfies our [JavaScript style guide](https://github.com/hellosign/javascript).
* Make sure you have added any necessary tests for your changes.
* Before submitting for a pull request, run all unit tests to ensure nothing else was accidentally broken.

## Pull Requests

1. Fork the HelloSign Embedded repository.
2. Create a new branch for your changes ~each feature, fix or improvement.~
3. Increment the version number in packages.json
4. Make your changes
5. Open a pull request, triggering a github action that does the following:
   1. verify the version
   2. build beta package
   3. test beta package
   4. generate a github tagged draft release
   5. publish beta package to npm & our s3 staging CDN
6. Once the pull request is merged to master, github actions:
   1. verifies the live version
   2. build package
   3. test package
   4. generate release with release notes
   5. generate github release tag
   6. publish to npm
   7. publish to our S3 CDN

## License

You must agree that your patch will be licensed under the [HelloSign Embedded License](../LICENSE.md), and if we change the license we will assume that you agreed with the change unless otherwise stated.

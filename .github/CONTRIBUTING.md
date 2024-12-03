# Contributing Guidelines

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Feature Requests

Feature requests stem from a business need. Also be sure to find out whether your idea fits with the scope and aims of the project of if this serves to address a personal/local scenario. It is up to you to make a strong case to convince the project's managers of the merits of this feature. Please provide as much detail and context as possible.

## Reporting Bugs

A bug is defined by: "A demonstrable problem that is caused by a file in the repository." Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. Use the search option under Boards > Work Items — check if the issue has already been reported
1. Check if the issue has been fixed — try to reproduce it using the latest master or development branch in the repository
1. Isolate the problem — ideally create a reduced test case and a live example

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

Poor bug reports will be reassigned back to the creator for revision prior to any additional investigation.

## Submitting pull requests

No one other than repository managers have direct access to the repository. For all pull requests you must first fork the project to your own Github account.

All new work that is to be considered for merging with the `MASTER` branch must start from a new feature branch of work. This feature branch should be in response to either a bug or a new business requirement.

### Feature branch naming

The name of the feature branch should be descriptive as to the nature of the work and please include any references to the story or bug work item ID.

### Conventional Commits

This project follows [Conventional Commits](https://www.conventionalcommits.org/) to auto-generate release versions based on [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

Commit messages follow the format:

```
<type>[optional scope]: <description>
```

All messages must include a type prefix for semver analysis. Below are types with their respective meanings.

#### MAJOR Release

To trigger a **MAJOR** version update, use the following structure:

- **Prefix with `perf:`**
- **Include `BREAKING CHANGE:` in the message body**.

Example:

```
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed.
The default graphite width of 10mm is always used for performance reasons.
```

#### MINOR Release

Example:

```
feat(pencil): add 'graphiteWidth' option
```

#### PATCH Release

Example:

```
fix(pencil): stop graphite breaking when too much pressure applied
```

### Commit Types Table

| Type             | Description                                                                                                   | Version Level |
|------------------|---------------------------------------------------------------------------------------------------------------|---------------|
| `perf`           | Code change that improves performance                                                                         | MAJOR          |
| **`BREAKING CHANGE`** | Non-backward compatible change (must be in the body, not in title)                                      | MAJOR         |
| `feat`           | Adds a new feature                                                                                            | MINOR         |
| `build`          | Changes affecting the build system or external dependencies (e.g., gulp, npm)                                 | PATCH          |
| `ci`             | Changes to CI files and scripts (e.g., Travis, CircleCI)                                                      | PATCH          |
| `docs`           | Documentation-only changes                                                                                    | PATCH          |
| `fix`            | Bug fixes                                                                                                     | PATCH         |
| `refactor`       | Code change that neither fixes a bug nor adds a feature                                                       | PATCH          |
| `style`          | Code changes that don't affect logic (whitespace, formatting, etc.)                                           | PATCH          |
| `test`           | Adds or corrects tests                                                                                        | PATCH          |


#### Git Commit Message Structure

Once you have completed your feature update, please commit all changes to the branch. All commit messages should use an imperative mood.

Imperative mood simply means “spoken or written as if giving a command or instruction”. A few examples are:

Clean your room
Close the door
Take out the trash
A properly formed Git commit subject line should always be able to complete the following sentence:

- If applied, this commit will `refactor component X for accessibility`
- If applied, this commit will `add feature Y to component X`

Example messages when using Conventional Commits:

```
$ build: update to Gulp 4.x

$ docs: address issue #14, typo in install instructions

$ perf: restructure API to comply with new feature spec

$ feat: add ability to consume large data as an array versus string

$ fix: address issue #57 in regards to color output
```

### Push branch and submit pull request

One you have committed new work to your feature branch, be sure to push your updates to the Github repository. Depending on your IDE or CLI configuration this may be a manual or automatic step.

To submit a new pull request, please go to [https://github.com/AlaskaAirlines](https://github.com/AlaskaAirlines) to find your project and submit the Pull Request.

On the pull request page, the new pull request should be `[your-new-branch] into [master]`

Please be sure to follow the **Pull Request template** that appears on the comment window.

You must select up to two reviews from your team to validate that the update is correct, solves the problem presented by the story and meets all the requirements for a new merge.

Finally, click the `Create` button.

## Accepting and merging a pull request

Once a pull request has been created, the assigned reviewers should have received notifications. Each reviewer is expected to view the pull request and review all the data per this request.

A reviewer has the option to leave comments, ask questions and reject the pull request.

Once two reviewers have approved the work, the pull request can then be completed.

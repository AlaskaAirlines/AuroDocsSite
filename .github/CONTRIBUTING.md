# Contributing to Auro
Auro team categorizes contributions into 3 categories with a few differences between how they are handled:
 * Bug: If you encounter a bug in an Auro component, please check if there is an existing issue in our [GitHub repositories](https://github.com/orgs/AlaskaAirlines/repositories) that describes it. If not, please create a new issue in the appropriate repository and follow the template for bug reports. If you are able and willing to fix the bug yourself, please assign yourself to the issue and proceed to Step 4. Otherwise, the Auro team will prioritize the issue and work on a fix.
 * Existing issue in GitHub: If you find an existing issue in an Auro [GitHub repo](https://github.com/orgs/AlaskaAirlines/repositories) that you want to work on, please read the details and comments on that issue and contact the Auro engineers to let them know. They will assign you to the issue and you can proceed to Step 4.
 * New Feature/functionality: If you are in need of a new feature, or new functionality for an Auro component, please follow all the steps below.
## Flow of Contribution
Below is what we consider our standard flow of contribution to Auro.  That is to say, the expected steps to successfully contribute code to Auro.  Skipping any of these steps may result in sending requests back to get the necessary approvals/check-offs from Product and design.  Our goal with this process is to accommodate large contributions in the form of new components, while also trying to be as light weight as possible for small changes and bug fixes.
### Step 1: Meet with Product
First step is to reach out to our Product Manager, Brandon Shields, via e-mail or Teams message.  The larger the change, the larger the lead time we will need to assess the impact of the change. Please provide as much detail as possible about your proposed contribution, such as:
 * What problem are you trying to solve?
 * What is the scope and impact of your contribution?
 * How does your contribution align with Auro’s vision and goals?
 * Do you have any mockups or prototypes of your contribution?
### Step 2: Meet with Design
Once you have met with our Product manager, you should reach out to our Product Designer, June Lee for final design approval via teams or e-mail.  The design approval process may vary depending on the size and complexity of your contribution.
### Step 3: Consult with Engineering
Step 3 is a check-in to engage with engineering to discuss any architectural or technical aspects of your contribution, as well as to get guidance and support. You should maintain regular communication with the Auro engineers throughout the development process. You can reach them via the [Auro Guild Teams Channel](https://teams.microsoft.com/l/channel/19%3a1d6708349b9f437d88a9e3bc48fa6b1f%40thread.tacv2/Auro%2520Users%2520and%2520Contributors?groupId=b28e0e4d-943b-472d-9c2c-0f15d562abc1&tenantId=0f44c5d4-42b0-45c2-bf55-d0fea8430d33) or via [office hours](http://auro.alaskaair.com/officehours) if you are external to Alaska Arilines
### Step 4: Create a Draft PR
Once you have had your initial meeting with Engineering and started coding, please create a draft PR so that the Auro team can monitor your progress and offer timely assistance as needed
### Step 5: Do coding to it!
This is the fun part. Be sure to keep in touch with the Auro engineers for any questions or issues you may encounter. Remember to update your draft PR frequently. Also, be sure to follow our coding standards below and follow our Auro Compliance guide
### Step 6: Submit for review
When you are done, notify the engineering team for a final review. If you are making any design changes or implementing a new component, please also include designers in the review. If everything looks good (all tagged reviewers approved with no changes requested), your PR will be merged into main and the issue will be closed in GitHub.


## Submitting pull requests

No one other than repository managers have direct access to the repository. For all pull requests you must first fork the project to your own Github account.

All new work that is to be considered for merging with the `MASTER` branch must start from a new feature branch of work. This feature branch should be in response to either a bug or a new business requirement.

### Feature branch naming

The name of the feature branch should be descriptive as to the nature of the work and please include any references to the story or bug work item ID.

### Conventional Commits

This project utilizes [Conventional Commits](https://www.conventionalcommits.org/) to auto-generate release verions, based on the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).


```
<type>[optional scope]: <description>
```

All commit messages must be prefixed with a specific type so that the semver release configuration can analyze the commit and apply the correct version release. Please see the following types with their respective meanings.

#### MAJOR

For a MAJOR release, you MUST follow this template. The use of `perf:` and `BREAKING CHANGE:` are needed in order to push a major release.

```
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed.
The default graphite width of 10mm is always used for performance reasons.
```

#### MINOR
```
feat(pencil): add 'graphiteWidth' option
```

#### PATCH
```
fix(pencil): stop graphite breaking when too much pressure applied
```

#### Other commit types

| type | description |
|---|---|
| build | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) |
| ci | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| docs | Documentation only changes |
| feat | A new feature (this correlates with `MINOR` in semantic versioning) |
| fix | A bug fix (this correlates with `PATCH` in semantic versioning) |
| perf | A code change that improves performance |
| BREAKING CHANGE | A code change that is not backwards compatible (correlating with `MAJOR` in semantic versioning) |
| refactor | A code change that neither fixes a bug nor adds a feature |
| style | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| test | Adding missing tests or correcting existing tests  |

#### Git commit messages

Once you have completed your feature update, please commit all changes to the branch. All commit messages should use an **imperative mood**.

Imperative mood simply means _“spoken or written as if giving a command or instruction”_. A few examples are:

* Clean your room
* Close the door
* Take out the trash

A properly formed Git commit subject line should always be able to complete the following sentence:

_"If applied, this commit will [your subject line here]."_

For example:

* If applied, this commit will `refactor component X for accessibility`
* If applied, this commit will `add feature Y to component X`

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

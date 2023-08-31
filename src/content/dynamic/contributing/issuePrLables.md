# Issues, pull requests, and labels

Working in a large project like Auro, clear communication and correct labeling of issues and pull requests help to keep everyone on the same page. Here are some helpful tips.

With both issues and pull requests, the use of labels serves multiple purposes. First, they provide a way to filter through the noise. Next, they communicate information like the type of work and status of work. This is important so that managers and other developers can quickly review the issues and PRs and have an understanding of the project status.

## Issues

The following is a list of issue templates and the default labels applied. When filling our the issue, please be sure to address all the fields of the template.

| Issue template | Default label | Process |
|---|---|---|
|General support|`Type: Question, Type: Feature, not-reviewed`|Remove `not-reviewed` and update types with appropriate `Type: *` post review|
|Feature request|`Type: Feature, not-reviewed`|Once issue has been refined and is ready for work, please remove the `not-reviewed` label and add the appropriate `Status: *` once the issue has moved forward with work|
|Bug|`Type: Bug, not-reviewed`|Add appropriate `Status: *` once the issue has moved forward with work and remove the `not-reviewed` label once the issue has been refined by the team.|

## Issues: work status label maintenance

As an issue progresses, it's important to maintain the status of that issue.

Once work has begun on an issue, two things are needed.

1. In the Github project board, please move the issue from **Backlog** to **Work In Progress**. This is essential to illustrate project status.
1. On the issue itself, adding the `Status: Work In Progress` to allow those who do not have access to the kanban board to know issue status.

Once a Pull Request is created, please address the following.

1. Reviews are generically assigned to the team, if there is a specific reviewer needed, please assign.
1. Please be sure to link the issue(s) to the pull request in it's description (it's in the template).
1. In the DEVELOPMENT section of the PR, please be sure to also link the issue to the PR.

Once the issue is in progress and associated with a pull request, there is no need to change any of the labels to show state. When the work is completed the issue will be automatically closed once the pull request is merged.

## Draft Pull Request

Every Auro repository has a standard pull request template. The templates offer a structure for the content of the message, but not the process. So when creating a pull request, we ask for the following.

1. When creating a new pull request, we suggest using the `Draft` option until the pull request is deemed ready by the author to be merged into the `main` branch.
1. Optionally add a `Type: *` label, this will be the same as the issue that described the work.
1. There is no need to add the `Status: Work In Progress` label as it is assumed with a `Draft` pull request that the work is in progress.

### Prepare for review

Once the work is complete, or the author is requesting a review, we ask for the following.

1. Please review and rework the PRs history if needed.
1. Please add `Status: Review Needed`.
1. If the pull request is deemed complete by the author, add `Status: Complete and Ready to Merge` and click the `Ready for Review` button if this is currently a `Draft` pull request.
1. To put a stamp on this, adding a comment alerting a reviewer in the comments will ensure a notification is sent to that reviewer.

In this scenario, there is no need to remove previous labels as new ones are added.

#### Reworking the PR's history

When preparing the PR for final review, please review and rework the PR's commit history as needed. Please review the following guidelines.

1. All commits that relate directly to a linked issue, your SHOULD add the issue's ID to the commit message. Remember there is a72 character limit to this, so be direct and to the point.
1. Please add all details to the commit description. There is no character limit and no need to be imperative.
1. If the commit contains a breaking change, you MUST put `BREAKING CHANGE:` in the description body of the commit message.
1. Listing out the files that were changed in the commit is always helpful.

For more information on maintaining a good Git history, please review [The Importance of Git History](https://silvenon.com/blog/better-git-history/introduction)

> Git is an indispensable tool for recording the history of our source code. This history increases in value the older that project gets; it is a unique archive of collaboration and hard work that describes how the project became what it is today.

## For non-team members

If you are not linked to the Auro team, updating the labels will not be an option. Here we ask that the authors specifically add a comment alerting a team reviewer of the work status. At this point, we will get a notification and assist the author through the rest of the process.

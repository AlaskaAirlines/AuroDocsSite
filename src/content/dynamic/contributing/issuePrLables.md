# Issues, pull requests and labels

Working in a large project like Auro, clear communication and correct labeling of issues and pull requests helps to keep everyone on the same page. Here are some helpful tips.

With both issues and pull requests, the use of labels serves multiple purposes. First they provide a way to filter through the noise. Next they communicate information like type of work and status of work. This is important so that managers and other developers and quickly review the [kanban board](https://github.com/orgs/AlaskaAirlines/projects/1) and have an understanding of project status.

## Issues

The following is a list of issue templates and the default labels applied.

| Issue template | Default label | Process |
|---|---|---|
|General support|`Status: Proposal`|Remove and replace with appropriate `Type: *` post review|
|Feature request|`Type: Feature`|Add appropriate `Status: *` once issue has moved forward with work|
|New development|`Status: Proposal`|Remove and replace with appropriate `Type: *` post review|
|Bug|`Type: Bug`|Add appropriate `Status: *` once issue has moved forward with work|

## Issues: work status label maintenance

As an issue progresses, it's important to maintain the status of that issue. The first status to be applied with the issue still in the backlog is that the project manager will add the `Status: Prioritized for work` label. This is to help filter approved issues away from ones that are still in review.

Once work has begun on an issue, two things are needed.

1. In the Github project board, please move the issue from **Backlog** to **Work In Progress**. This is essential to illustrate project status.
1. On the issue itself, add the `Status: Work In Progress`. This is essential as the project column placement is not listed in other views of the issues, e.g. repo issues.

Once a Pull Request is created, please address the following.

1. Label the pull request with the same `Type: *` as the corresponding issue.
1. Please be sure to list the issue(s) in the pull request description (it's in the template).

Once the issue is in progress and associated to a pull request, there is no need to change any of the labels to show state. When the work is completed the issue will be automatically closed once the pull request is merged.

## Pull Requests

Every Auro repository has a standard pull request template. The templates offer structure for the content of the message, but not the process. So when creating a pull request, we ask for the following.

1. When creating a new pull request, we suggest using the `Draft` option until the pull request is deemed ready by the author to be merged into the `main` branch.
1. Add the `Type: *` label, this will be the same as the issue that described the work.
1. There is no need to add the `Status: Work In Progress` label as it is assumed with a `Draft` pull request that the work is in progress.

### Prepare for review

Once the work is complete, or the author is requesting a review, we ask for the following.

1. Please add `Status: Review Needed`.
1. If the pull request is deemed complete by the author, add `Status: Complete and Ready to Merge` and click the `Ready for Review` button if this is currently a `Draft` pull request.
1. To really put a stamp on this, adding a comment alerting a reviewer in the comments will ensure an email sent to that reviewer.

In this scenario, there is no need to remove previous labels as new ones are added.

## For non-team members

If you are not linked to the Auro team, updating the labels will not be an option. Here we ask that the authors specifically add a comment alerting a team reviewer of the work status. At this point, we will get the email and assist the author through the rest of the process.

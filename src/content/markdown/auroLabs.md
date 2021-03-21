# AuroLabs: BETA

Building a design system is dependent on the contribution of others. From the very beginning Auro positioned itself to be open and welcome to contributions by making it open source.

But making a project open source isn't enough when it comes to growing a community based tool. Welcome to AuroLabs!

## Please don't mind the mess

We are rolling this out as a BETA to iron out the kinks. Your patience in this is welcome. As we go through this process we will add more definition to the process to ensure transparency versus creating a black box.

## Every player spends time on the farm team

When building a design system there are typically two avenues for adding new components. First, there is intentional planning. This is where the design system team advocates for a component to be created and works with dev and design teams proactively to produce the new component. This style of work is pre-planned and allows for a up-front process.

Next there is discovery. These are unplanned components that when discovered the opportunity to add the new component to the design system is clear, but the rules of engagement are completely different. Pre-planning is gone and the time for the intentional process doesn't exist. In fact, there is even less time as this opportunity is already tied to a previously agreed upon deliverable.

This is where AuroLabs comes in. It's the basic idea that developers will have an opportunity to create a new component that meets their specifications, works in their timeline and meets their goals, all the while being setup for success for inclusion into the Auro Design System.

## A straight forward process

When building a new component in AuroLabs it is highly recommended that a developer start with the [WC-Generator](https://auro.alaskaair.com/getting-started/developers/generator/install) as this generator comes packed with all of Auro's awesome that will make the final review process a breeze.

Once the generator is installed, be sure to use the `--npm` flag to set the npm namespace to `@aurolabs`.

```
$ wc-generate --npm @aurolabs --name myelement
```

### Getting started

1. Install the [WC-Generator](https://auro.alaskaair.com/getting-started/developers/generator/install), if not already installed
1. Create your new custom element repository locally
1. `$ cd` into the new directory and confirm that all dependencies have been installed
1. Run `$ npm run test` to see that tests are operational
1. Run `$ npm run server` to validate that the server is set up correctly for the demo
1. Once repo is validated, if you have access, create a new `internal` repository with [https://github.com/AlaskaAirlines](https://github.com/AlaskaAirlines).
1. Push your codes to the new repo

Tt is recommended that you create a new **private** repo in the [Alaska Airlines OSS org](https://github.com/AlaskaAirlines/). Please be sure to name the repo with **auro** to properly follow our open source repository guidelines. E.g. auro-\[your component name\].

**Randos will be deleted!**

### Getting to work

1. In your local repo, create a new working branch called `initial-build`, this will be the branch you will compare to `main` for the pull request later.
1. When you are ready to make your first commit, please see [Auro Design System Contributing Guidelines](https://auro.alaskaair.com/contributing) and specifically the section on **Conventional Commits**.
1. When committing code, you should see a series of pre-commit hooks confirming the stability of the code you are creating. If you do not see these hooks, then there is an issue with your install and you should consult with an Auro team member.


### Ongoing work

When in rapid development of a new element, most of the history really is of no consequence as everything is changing. It is recommended that you create your first commit something like the following:

```bash
$ git commit -m "feat: build new custom element"
```

Then every commit post that, you can easily amend that commit and force push your feature branch to Github.

```bash
$ git push origin initial-build --force
```

Regardless of history, the first release of this element that creates a npm package will be `v1.0.0`.


## Deploy your new custom element

Once the repository is setup and the work for the initial release of the new custom element is complete, all that is left is to contact an Auro admin to add the repo secrets. These are required for semantic-versioning and publishing to npm. Once published, your new element will be accessible from the `@aurolabs` namespace.

## Deploy a demo

Contained within the WC-Generator is a demo build process. Run `$ npm run demo:build` to crate a new static build directory that can be deployed to any static server like [surge.sh](https://surge.sh/).

## From the minors to the majors

Once a new component is released for use, this will trigger a review process with the Auro team. This process will happen as soon as possible, but please be patient.

The first step is to get the new component added to the [Auro Labs](https://auro.alaskaair.com/audit) priority board. This is the review process. Once all these steps are considered `ADS Compliant` then it is eligible for inclusion into the Auro Design System.

#### Artwork

The design for the new element. Does it meet all Auro specifications?

#### UI Kit

The approved artwork, has that been included into the Auro UI Kit for all designers?

#### Code

Does the code meet all of Auro's specifications and standards? Be sure to review the following:

* [CSS conventions](https://auro.alaskaair.com/webcorestylesheets/conventions)
* [CSS Lint rules](https://auro.alaskaair.com/webcorestylesheets/linter)
* [Contributing Guidelines](https://auro.alaskaair.com/contributing)
* [esLint](https://eslint.org/docs/2.0.0/rules/)

#### Docs

Has all related demos and documentation been prepared and are ready for inclusion into the Auro doc site?

## Welcome to the team!

Once the review process is complete, your new element will be moved from `@auroLabs` to the Auro Design System. Your new element will be added to the Auro doc site and we will release your repo to open source.

Outside contributions are not only wanted, but encouraged. If you have an idea, build it. We would love to see your work!

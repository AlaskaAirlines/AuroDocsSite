<style>
  .lightText {
    color: var(--auro-color-text-secondary-on-light);
    margin-bottom: 2rem;
  }

  .pre {
    color: var(--auro-color-brand-flamingo-500);
    font-size: 0.8rem;
    font-family: monaco;
    padding-top: .5rem;
    margin-bottom: 0;
  }

  .trigger {
    font-size: 1.2rem;
  }
</style>

# AuroLabs: BETA

Building a successful design system requires sustained community contribution. Since the very beginning we've been committed an open-source development model. We encourage your participation and input.

But making a project open-source isn't enough when it comes to growing a community-based tool. So welcome to AuroLabs!

## Please don't mind the mess

We are rolling this out as a BETA to iron out the kinks. Your patience in this is welcome. As we go through this process we will add more definition to the process to ensure transparency versus creating a black box.

## Every player spends time on the farm team

When building a design system there are typically two avenues for adding new components. First, there is intentional planning. This is where the design system team advocates for a component to be created and works with dev and design teams proactively to produce the new component. This style of work is pre-planned and allows for a up-front process.

Next there is discovery. These are unplanned components that when discovered the opportunity to add the new component to the design system is clear, but the rules of engagement are completely different. Pre-planning is gone and the time for the intentional process doesn't exist. In fact, there is even less time as this opportunity is already tied to a previously agreed upon deliverable.

This is where AuroLabs comes in. It's the basic idea that developers will have an opportunity to create a new component that meets their specifications, works in their timeline and meets their goals, all the while being setup for success for inclusion into the Auro Design System.

## A straightforward process

When building a new component in AuroLabs it is highly recommended that a developer start with the [WC-Generator](https://auro.alaskaair.com/getting-started/developers/generator/install) as this generator comes packed with all of Auro's awesome that will make the final review process a breeze.

Once the generator is installed, be sure to use the `--npm` flag to set the npm namespace to `@aurolabs`.

```
$ wc-generate --npm @aurolabs --name myelement
```

### Getting started

<auro-accordion-group>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">1. Install WC-Generator</span>
    <div class="lightText">
      <p>Install the <auro-hyperlink href="https://auro.alaskaair.com/getting-started/developers/generator/install">WC-Generator</auro-hyperlink>, if not already installed</p>
      <pre class="pre">  $ npm i @alaskaairux/wc-generator -g</pre>
    </div>
  </auro-accordion>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">2. Create your new custom element repository locally</span>
    <div class="lightText">
      <p>Once the generator is installed, run the generator command to create a new custom element repository.</p>
      <pre class="pre">  $ wc-generate --npm @aurolabs --name [element name]</pre>
    </div>
  </auro-accordion>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">3. Change into new directory</span>
    <div class="lightText">
      <p>You need to be inside the newly created directory in order to complete the following steps.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">4. Run tests</span>
    <div class="lightText">
      <p>Run the tests to ensure that all things are working as expected.</p>
      <pre class="pre">  $ npm run test</pre>
    </div>
  </auro-accordion>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">5. Start the server</span>
    <div class="lightText">
      <p>Start the server to make sure that all dependencies are set up correctly.</p>
      <pre class="pre">  $ npm run serve</pre>
    </div>
  </auro-accordion>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">6. Create an internal Github repo</span>
    <div class="lightText">
      <p>For Alaska employees only. Create a new <code>internal</code> repository with <auro-hyperlink target="_blank" href="https://github.com/AlaskaAirlines">github.com/AlaskaAirlines</auro-hyperlink>. Once completed, push your <code>main</code> branch to the remote repository.</p>
      <p>Please be sure to name the repo with <strong>auro</strong> to properly follow our open source repository guidelines. E.g. auro-[your component name].
      <p><strong>Randos will be deleted!</strong></p>
    </div>
  </auro-accordion>
</auro-accordion-group>

### Getting to work

<auro-accordion-group>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">1. Create your new feature branch</span>
    <div class="lightText">
      <p>In your local repo, create a new working branch called <code>initial-build</code>, this will be the branch you will compare to <code>main</code> for the pull request later.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">2. Conventional commits</span>
    <div class="lightText">
      <p>Prior to making your first commit, please review <auro-hyperlink relative href="/contributing">Auro Design System Contributing Guidelines</auro-hyperlink>, specifically the section on <strong>Conventional Commits</strong>.</p>
      <p>Conventional Commits play a critical role in determining the next version release. The following template will help you construct the proper commit message.</p>
      <pre class="pre">  [type]([optional scope]): [description]</pre>
      <p>For example, let's say that you are working on a new feature supporting accessibility. Commit messages could be like the following. It is important to note that the <code>fix</code> commit is the only commit that will trigger a PATCH version release. The <code>docs</code> and <code>test</code> commits will not.</p>
      <pre class="pre">
  fix(a11y): update acronym to read out full word, e.g. SEA reads Seattle
  docs(a11y): address API changes in readme and automated docs
  test(a11y): add new test for screenreader feature</pre>
    </div>
  </auro-accordion>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">3. Pre-commit hooks</span>
    <div class="lightText">
      <p>When committing code, you should see a series of pre-commit hooks confirming the stability of the code you are creating. If you do not see these hooks, then there is an issue with your install and you should consult with an Auro team member.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger" class="trigger">4. Amend commits to maintain a readable history</span>
    <div class="lightText">
      <p>While Git history is helpful, in the early stages of a project not all history is helpful. It is considered best practice to <code>amend</code> previous commits if the work is closely related. Especially if it is a refactor of the previous commit. The following will add the updates recently completed and amend them to the previous commit without asking for a change in the commit message. Lastly, this is a change in history, so a force push to the remote is required.</p>
      <pre class="pre">
  $ git add --all
  $ git commit --amend --no-edit
  $ git push origin [feature-branch-name] --force</pre>
    </div>
  </auro-accordion>
</auro-accordion-group>

## Getting started

There are a lot of nooks and crannies when working with Auro's web component generator, it is highly recommended that you review our [Getting Started](/getting-started/developers/generator/getting-started) guide.

## Deploy your new custom element

Once the repository is set up and the work for the initial release of the new custom element is complete, all that is left is to contact an Auro admin to add the repo secrets. These are required for semantic-versioning and publishing to npm. Once published, your new element will be accessible from the `@aurolabs` namespace.

## Deploy a demo

Contained within the WC-Generator is a demo build process. Run `$ npm run demo:build` to crate a new static build directory that can be deployed to any static server like [surge.sh](https://surge.sh/).

## From the minors to the majors

Once a new component is released for use, this will trigger a review process with the Auro team. This process will happen as soon as possible, but please be patient.

The first step is to get the new component added to the [Auro Labs](https://auro.alaskaair.com/audit) priority board. This is the review process. Once all these steps are considered `ADS Compliant` then it is eligible for inclusion into the Auro Design System.

#### Artwork / UI Kit

The design for the new element. Does it meet all Auro specifications? Has the new work been included into the Auro UI Kit for all designers?

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

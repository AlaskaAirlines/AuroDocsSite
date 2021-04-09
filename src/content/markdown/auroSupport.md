<style>
  .lightText {
    color: var(--auro-color-text-secondary-on-light);
    margin-bottom: 2rem;
  }
</style>

# Auro support

Looking for help with Auro? F.A.Q.s, how to contact, it's all here. Also be sure to check out our [office hours](/officehours) for how to best contact the Auro team.

## Frequently asked questions

<!-- >
  <auro-accordion id="">
    <span slot="trigger"></span>
  </auro-accordion>
-->

Please see the items below for commonly asked questions regarding development and instillation of the Auro Design System.

<auro-accordion-group>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: How do I get started?</span>
    <div class="lightText">
      <p>Getting started with Auro may seem daunting at first, but once basic foundations are in place, it's all plug-n-play after that. First off, please see the <auro-hyperlink href="/getting-started/developers/compliance" relative>Compliance</auro-hyperlink> section for an understanding on the levels of Auro compliance from CSS to web components.</p>
      <p>An important part and core element of everything from CSS to web components are <auro-hyperlink href="getting-started/developers/design-tokens" relative>design tokens</auro-hyperlink>. Design tokens are common variables for all of the core atomic UI properties. Fonts, colors, sizes, breakpoints, etc ... if it's a common value to the UI, it's a design token.</p>
      <p>Next it's suggested to get familiar with <auro-hyperlink href="/webcorestylesheets" relative>Web Core Style Sheets</auro-hyperlink>, or WCSS for short. WCSS is a foundational CSS library to assist in the quick and easy setup of Auro styles. Also, don't forget to review the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/" target="_blank">WCSS API</auro-hyperlink> for an inside look at this supporting library.</p>
      <p>No UI would be complete without the use of <auro-hyperlink href="/icons/overview" relative>icons</auro-hyperlink>. Auro has a vast array of predefined SVG icons to be used. Please see the documentation for all the ways you can make use of this library, or make use of Auro's easy to use  <auro-hyperlink href="/components/auro/icon" relative>icon custom element</auro-hyperlink>.</p>
      <p>Last, please see the list of available pre-developed <auro-hyperlink href="/component-status" relative>HTML native custom elements</auro-hyperlink>. These components can be used in virtually any development stack. Be sure you checkout the <auro-hyperlink href="/reactSetup" relative>React</auro-hyperlink>, <auro-hyperlink href="/svelteSetup" relative>Svelte</auro-hyperlink> and <auro-hyperlink href="/javascriptSetup" relative>standard JS</auro-hyperlink>example projects.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: How do I contact the Auro Team?</span>
    <div class="lightText">
      <p>There are a lot of ways to get questions and support issues to the team. If there is an issue you are seeing with any of the parts of the Auro ecosystem, we highly recommend that you send a support issue. Select any of the ISSUE buttons on our <auro-hyperlink relative href="/component-status">status</auro-hyperlink> page and submit an issue from the repository.</p>
      <p>When sending an issue is not enough, take a look at our <auro-hyperlink href="/officehours" relative>Office Hours</auro-hyperlink> for the best time to contact us.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="primary" chromeless noProfile>
    <span slot="trigger">Q: What is Auro's primary objective?</span>
    <div class="lightText">
      <p><strong>To enable work</strong></p>
      <p>Whether that enablement is provided in a form of a design or a custom element that a product team can take direct advantage of, the objective is the same. Consistent use. Iterative improvement. Quick to market. </p>
    </div>
  </auro-accordion>
  <auro-accordion id="ie11" chromeless noProfile>
    <span slot="trigger">Q: How does Auro support IE11?</span>
    <div class="lightText">
      <p>The core parts of Auro, design tokens, WCSS and Icons are all IE11 compatible. Also be sure to review Auro's official <auro-hyperlink href="/support/browsersSupport" relative>browser support policy</auro-hyperlink>.</p>
      <p>For design tokens, it is best to use either the Sass versions of the tokens or look to add <auro-hyperlink href="https://github.com/postcss/postcss-custom-properties" target="_blank">postCSS Custom Properties</auro-hyperlink>.</p>
      <p>In order for IE11 to support web components, we rely on the <auro-hyperlink href="/support/polyfills/webcomponentsjs" relative>Web Components Polyfills</auro-hyperlink>project. For specific framework examples, please be sure you checkout the <auro-hyperlink href="/reactSetup" relative>React</auro-hyperlink>, <auro-hyperlink href="/svelteSetup" relative>Svelte</auro-hyperlink> and <auro-hyperlink href="/javascriptSetup" relative>standard JS</auro-hyperlink>example projects.</p>
      <p>On August 17, 2020, Microsoft published a timeline indicating that Microsoft Teams will stop supporting Internet Explorer 11 on November 30, 2020, whereas Microsoft 365 products will end Internet Explorer 11 support on August 17, 2021. It is our position that Auro will no longer support IE11 as of Q3, 2021.</p>
      <p>Alternative bundled versions are available for most custom elements, please see <strong>Install bundled assets from CDN</strong> in each project's README for more information.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="css" chromeless noProfile>
    <span slot="trigger">Q: Does Auro have a standard for CSS?</span>
    <div class="lightText">
      <p>CSS in Auro is no different than in any other project. The better CSS is organized, the easier it is to follow and maintain. Regardless of scope.</p>
      <p><auro-hyperlink href="/webcorestylesheets/conventions" relative>Auro's opinions on CSS</auro-hyperlink> are simple and easy to follow. Single responsibility, tokens and utilities, it's all covered. In addition to these conventions, Auro has a full <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/" target="_blank">CSS library</auro-hyperlink>to help with daily development. You may also want to review <auro-hyperlink relative href="/webcorestylesheets/custom-element-css">CSS styles and custom elements</auro-hyperlink> for helpful information and background for writing CSS for custom elements.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="generator" chromeless noProfile>
    <span slot="trigger">Q: What is the WC-Generator?</span>
    <div class="lightText">
      <p>The <auro-hyperlink href="/getting-started/developers/generator/install" relative>Auro WC-Generator</auro-hyperlink> is an easy to use and easy to setup developer experience for starting new web component projects from scratch. When building HTML custom elements there is a lot of boiler-plate code and support needed for testing and demo setup. The Auro team works hard to keep this generator up to date to ensure quality of code and developer experience with each new project.</p>
      <p>For more information on how to start a project from scratch, be sure to take a look at <auro-hyperlink href="/getting-started/developers/generator/getting-started" relative>Getting Started</auro-hyperlink> guide for a step-by-step walk-through.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="generator" chromeless noProfile>
    <span slot="trigger">Q: What is AuroLabs?</span>
    <div class="lightText">
      <p><auro-hyperlink href="/aurolabs" relative>AuroLabs</auro-hyperlink> is a process to enable development of new ideas without all the pre-process that is typically required to add a new component to the design system. </p>
      <p>That being said, this does not ignore the process. It simply reverses priorities. AuroLabs allows engineers to build and deliver an idea allowing for a iterative refinement process post it's first release. </p>
      <p>Make sure to refer to the <auro-hyperlink href="/aurolabs" relative>AuroLabs</auro-hyperlink> page for all information regarding this process.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="release" chromeless noProfile>
    <span slot="trigger">Q: How many components have been released?</span>
    <div class="lightText">
      <p>Auro releases new components and updates all the time. Following what has been released and when is hard to do. Even harder, if there is a release should you update? And don't forget, what's coming up next?</p>
      <p>To better help address these questions the Auro team has a series of dashboards.</p>
      <ul>
        <li>
          <auro-hyperlink href="/component-status" relative>Released Components:</auro-hyperlink>Use this dashboard for a full list of released components and tools, including their version, release dates and brief descriptions.
        </li>
        <li>
          <auro-hyperlink href="/support/releases-by-sprint" relative>Release by Sprint:</auro-hyperlink> This dashboard lists all the releases with links to their file changes and individual commits.
        </li>
        <li>
          <auro-hyperlink href="/audit" relative>Project audit:</auro-hyperlink> The Auro team is always reviewing, always auditing the list of components and tools we have in the system. This dashboard reflects the work in progress and where the team is placing their priorities.
        </li>
      </ul>
    </div>
  </auro-accordion>
  <auro-accordion id="help" chromeless noProfile>
    <span slot="trigger">Q: How can I help?</span>
    <div class="lightText">
      <p>Are you interested in helping with Auro?. There are multiple ways anyone can contribute to Auro. If you are using any one of the many Auro tools and you find a bug or want to propose an enhancement, we recommend that you submit an issue with any of the <auro-hyperlink href="/component-status" relative>Auro individual repos.</auro-hyperlink></p>
      <p>If you are simply looking for something to do but don't know where to start? We have you covered there too. See our list of <auro-hyperlink href="/help-wanted" relative>help wanted</auro-hyperlink> issues.</p>
      <p>Submitting PRs is great, but we still recommend that you submit an issue to be reviewed before starting the work. While we try to work with everyone as much as possible, we can't guarantee that all PRs will be accepted and merged into the main branch. So to ensure that you are committing code that will be accepted, an issue first really helps.</p>
    </div>
  </auro-accordion>
</auro-accordion-group>

## Frequently asked process questions

<auro-accordion-group>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger">Q: How do teams bring work to Auro?</span>
    <div class="lightText">
      <p>New work comes from everywhere. Bringing new ideas to Auro is as simple as submitting a new issue or scheduling a meeting with the Auro team. Please see the <auro-hyperlink relative href="https://auro.alaskaair.com/aurolabs">AuroLabs</auro-hyperlink> page for more details about this specific process.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="sla" chromeless noProfile>
    <span slot="trigger">Q: What is Auro's SLA?</span>
    <div class="lightText">
      <auro-header level="3" display="500">Issues</auro-header>
      <p>When it comes to servicing our customers we hold ourselves to a high level of support. Once an issue is submitted, you have our promise that you will receive a response within 24 hours. </p>
      <p>That is not to say that we will address the issue within that time, but someone from our team will respond to your issue with the information we have and what our plan will be to prioritize the issue.</p>
      <p>Prioritization of work will take a few things into consideration, but the overall process will follow the MoSCoW approach. </p>
      <ul>
        <li><strong>Must</strong> -  The work is a MUST HAVE for the health and continued value of the Auro Design System. This criteria specifies that the work needs to happen in order to deliver on the goals of the Auro team and to ensure the success of any product team that is dependent on Auro's resources. </li>
        <li><strong>Should</strong> - The work is high-priority and should be included in the sprint plan if it is possible. This is often critical work but one which can be satisfied in other ways if absolutely necessary.</li>
        <li><strong>Could</strong> - Work that is considered desirable, but not necessary. This work can be included if time and resources permit in a sprint plan further down the road.</li>
        <li><strong>Won't</strong> - Represents work that the team has decided is not necessary for the success of the Auro Design System or has agreed that this is work to be done, but not considered the responsibility of the Auro Design System.</li>
      </ul>
      <p>Following these guidelines, every new request, and even bug reports, can be judged fairly and prioritized appropriately.</p>
      <auro-header level="3" display="500">Pull Requests</auro-header>
      <p>For pull requests, our SLA is the same. Please allow up to 24 hours for solicited code changes that are associated with an approved issue. If the pull request is unsolicited and not associated with an approved issue, please allow up to 72 hours for a response. To help expedite this process, please submit an issue for review prior to submitting a pull request. </p>
      <p>Please see our <auro-hyperlink href="/contributing" relative>Auro Design System Contributing Guidelines</auro-hyperlink> for more information.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="sla" chromeless noProfile>
    <span slot="trigger">Q: Issues, draft PRs and labels?</span>
    <div class="lightText">
      <p>Seeing the <auro-hyperlink href="https://github.com/orgs/AlaskaAirlines/projects/1" target="_blank">volume of work</auro-hyperlink>, it's easy to see how things can get lost and issues can fall through the cracks. Well, we have a plan for that. Labeling, comments, and draft PRs are all tools that we can use to signal the correct people as to the state of work.</p>
      <p>Please be sure to review the <auro-hyperlink relative href="/contributing/issues-prs-labels">Issues, pull requests and labels</auro-hyperlink> section if our site for a full descriptions of this process.</p>
    </div>
  </auro-accordion>
</auro-accordion-group>

## Frequently asked Tech support questions

<auro-accordion-group>
  <auro-accordion id="github" chromeless noProfile>
    <span slot="trigger">Q: I can't push to the repo?</span>
    <div class="lightText">
      <p>Not everyone will have push rights to the repo. All of Auro is in the open source space, so anyone has the ability to <auro-hyperlink href="https://docs.github.com/en/github/getting-started-with-github/fork-a-repo" target="_blank">fork</auro-hyperlink>, <auro-hyperlink href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository" target="_blank">clone</auro-hyperlink> and <auro-hyperlink href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request" target="_blank">submit</auro-hyperlink>.</p>
      <p>When contributing to Auro, be sure to read over the <auro-hyperlink href="/contributing" relative> contributing guidelines</auro-hyperlink> to ensure that your pull request will be compliant with the standard set forth.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="upstream" chromeless noProfile>
    <span slot="trigger">Q: How does my fork stay in sync?</span>
    <div class="lightText">
      <p>When forking a repository, you have created an alternate version of the repository. It is up to you to maintain synchronization with the upstream repository in order for you to commit a pull request. </p>
      <p>No worries, there is a very simple process for <auro-hyperlink href="/contributing/upstream" relative>maintaining your fork's upstream relationship.<auro-hyperlink></p>
    </div>
  </auro-accordion>
  <auro-accordion id="upstream" chromeless noProfile>
    <span slot="trigger">Q: My app does not have the feature(s) I see in the doc site?</span>
    <div class="lightText">
      <p>If you are trying to access an icon or try a feature with your installed version of a library or element from Auro and it's not working, be sure to look at the latest published version compared to your version.</p>
      <p>Every element or library has an <i>install</i> page. That page will list the published version. Or run <code>$ npm outdated</code> from the command line in your project's repo.</p>
    </div>
  </auro-accordion>
</auro-accordion-group>

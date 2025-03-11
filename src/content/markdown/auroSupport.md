<style>
  .lightText {
    color: var(--auro-color-text-secondary-on-light);
    margin-bottom: 2rem;
  }
</style>

# Auro support

<auro-banner billboard slim alignLeft>
  <picture slot="displayImage">
    <source srcset="https://picsum.photos/id/213/1124/500" media="(min-width: 1024px)"/>
    <source srcset="https://picsum.photos/id/213/1124/1000" media="(min-width: 768px)"/>
    <source srcset="https://picsum.photos/id/213/736/950" media="(min-width: 736px)"/>
    <source srcset="https://picsum.photos/id/213/736/1500" media="(min-width: 375px)"/>
    <source srcset="https://picsum.photos/id/213/320/1100" media="(min-width: 320px)"/>
    <img src="https://picsum.photos/id/213/225/550" alt="" />
  </picture>
  <span slot="title" style="color: white">Looking for support with Auro?</span>
  <p slot="description">
    <span style="max-width: 500px; display: block; color: white">Please open a ticket in our support system!</span>
  </p>
  <auro-hyperlink style="margin-right: 1rem; margin-bottom: 0.5rem" type="cta" secondary href="https://dev.azure.com/itsals/Auro%20Design%20System/_workitems/create/Bug?templateId=f6462190-5e90-490c-a4f5-ad260e34be07&ownerId=1801e6f8-424d-400c-b97f-1c80c4b5cc0f" slot="action" target="_blank">File a Bug</auro-hyperlink>
  <auro-hyperlink style="margin-right: 1rem; margin-bottom: 0.5rem" type="cta" secondary href="https://dev.azure.com/itsals/Auro%20Design%20System/_workitems/create/User%20Story?templateId=cf434bf6-4af0-4c9f-99bc-36df1339c146&ownerId=1801e6f8-424d-400c-b97f-1c80c4b5cc0f" slot="action" target="_blank">Request a Feature Change</auro-hyperlink>
  <auro-hyperlink type="cta" secondary href="https://dev.azure.com/itsals/Auro%20Design%20System/_workitems/create/User%20Story?templateId=11bde815-6364-46ff-b0eb-26b42c93799d&ownerId=1801e6f8-424d-400c-b97f-1c80c4b5cc0f" slot="action" target="_blank">Other Support Request(s)</auro-hyperlink>
</auro-banner><br><br>

<p>Alaska Airlines employees may also ask questions in our <auro-hyperlink href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3A850b95ad1ecf4c5db953e77774400a2a%40thread.skype%2FAuro%2520Support%2520Channel%3FgroupId%3Daa01c782-8f88-480d-85f1-0927b1757977&type=channel&deeplinkId=8777b121-2e88-49ae-b9cb-c3d776c93267&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" target="_blank">Microsoft Teams Support Channel</a>.</p>

## Frequently asked questions

Please see the items below for commonly asked questions regarding development and instillation of the Auro Design System.

<auro-accordion-group>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: How do I get started?</span>
    <div class="lightText">
      <p>Getting started with Auro may seem daunting at first, but once basic foundations are in place, it's all plug-n-play after that. First off, please see the <auro-hyperlink href="/getting-started/developers/compliance" relative>Compliance</auro-hyperlink> section for an understanding on the levels of Auro compliance from CSS to web components.</p>
      <p>An important part and core element of everything from CSS to web components are <auro-hyperlink href="getting-started/developers/design-tokens" relative>design tokens</auro-hyperlink>. Design tokens are common variables for all of the core atomic UI properties. Fonts, colors, sizes, breakpoints, etc ... if it's a common value to the UI, it's a design token.</p>
      <p>Next it's suggested to get familiar with <auro-hyperlink href="/webcorestylesheets" relative>Web Core Style Sheets</auro-hyperlink>, or WCSS for short. WCSS is a foundational CSS library to assist in the quick and easy setup of Auro styles. Also, don't forget to review the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/" target="_blank">WCSS API</auro-hyperlink> for an inside look at this supporting library.</p>
      <p>No UI would be complete without the use of <auro-hyperlink href="/icons" relative>icons</auro-hyperlink>. Auro has a vast array of predefined SVG icons to be used. Please see the documentation for all the ways you can make use of this library, or make use of Auro's easy to use  <auro-hyperlink href="/components/auro/icon" relative>icon custom element</auro-hyperlink>.</p>
      <p>Last, please see the list of available pre-developed <auro-hyperlink href="/component-status" relative>HTML native custom elements</auro-hyperlink>. These components can be used in virtually any development stack. Be sure you checkout the <auro-hyperlink href="/reactSetup" relative>React</auro-hyperlink>, <auro-hyperlink href="/svelteSetup" relative>Svelte</auro-hyperlink> and <auro-hyperlink href="/javascriptSetup" relative>standard JS</auro-hyperlink> example projects.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: Forking a repo?</span>
    <div class="lightText">
      <p>So you are interested in supporting Auro? That's great. There is one step you may or may not know when contributing to an open source repo. If you are not part of the trusted committers security group, this means that you need to fork the repo. It is in the fork that you have full access to make any updates you wish and then submit them back to us in a pull request to merge in your new ideas.</p>
      <p>Not sure how to fork, here is a great <auro-hyperlink href="https://docs.github.com/en/get-started/quickstart/fork-a-repo" target="_blank">how-to article</auro-hyperlink> from Github.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: How do I contact the Auro Team?</span>
    <div class="lightText">
      <p>There are a lot of ways to get questions and support issues to the team. If there is an issue you are seeing with any of the parts of the Auro ecosystem, we highly recommend that you send a support issue. Select any of the ISSUE buttons on our <auro-hyperlink relative href="/component-status">status</auro-hyperlink> page and submit an issue from the repository. Or click the Github Issue link that appears at the top of every Auro element page.</p>
      <p>When sending an issue is not enough, take a look at our <auro-hyperlink href="/officehours" relative>Office Hours</auro-hyperlink> for the best time to contact us.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: How do I submit an issue?</span>
    <div class="lightText">
      <p>Auro is not a single repository, but an ecosystem of tools and components. Support tickets may be opened using the following links:</p>
      <auro-hyperlink href="https://dev.azure.com/itsals/Auro%20Design%20System/_workitems/create/Bug?templateId=f6462190-5e90-490c-a4f5-ad260e34be07&ownerId=1801e6f8-424d-400c-b97f-1c80c4b5cc0f" target="_blank">File a Bug</auro-hyperlink><br />
      <auro-hyperlink href="https://dev.azure.com/itsals/Auro%20Design%20System/_workitems/create/User%20Story?templateId=cf434bf6-4af0-4c9f-99bc-36df1339c146&ownerId=1801e6f8-424d-400c-b97f-1c80c4b5cc0f" target="_blank">Request a Feature Change</auro-hyperlink><br />
      <auro-hyperlink href="https://dev.azure.com/itsals/Auro%20Design%20System/_workitems/create/User%20Story?templateId=11bde815-6364-46ff-b0eb-26b42c93799d&ownerId=1801e6f8-424d-400c-b97f-1c80c4b5cc0f" target="_blank">Other Support Request(s)</auro-hyperlink>
    </div>
  </auro-accordion>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: How do I submit a pull request?</span>
    <div class="lightText">
      <p>Submitting a pull request is the life blood of any open source project. But to ensure that you are submitting work that will be merged, we ask that you PLEASE first submit an issue with the work you have in mind. Allowing the Auro team to understand your potential contribution will assist in the submission and code review process.</p>
      <p>We ask that you allow up to 48 hours for the Auro team to respond to your submitted issue prior to doing any work. We have found at times that eager developers address issues that on the surface seem easy to address but are unaware of an ecosystem complexity. We would hate for you to lose time working on a submission that may not be accepted.</p>
      <p>Once an issue is submitted, someone from the Auro team will respond within 48 hours to provide any guidance and support needed prior to doing any work. Once that consultation has been addressed, we look forward to your contribution to the Auro design system.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: What tech does Auro use?</span>
    <div class="lightText">
      <p>LitElement is the base class that all Auro custom elements are built upon. The team is in the process of converting all current custom elements to the new <auro-hyperlink target="_blank" href="https://lit.dev/">Lit 3.0 spec</auro-hyperlink> by the end of 2023.</p>
      <p>LitElement is "Interoperable & future-ready". Meaning that while we use LitElement as our base technology, we are not constrained by it's use. For a full list of all the platforms LitElement supports, please see <auro-hyperlink target="_blank" href="https://custom-elements-everywhere.com/">Custom Elements Everywhere</auro-hyperlink>.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: Does Auro support React, Svelte, Vue, etc...?</span>
    <div class="lightText">
      <p>Auro web components are based on LitElement HTML custom elements. This gives us the greatest spread possible for working with <auro-hyperlink target="_blank" href="https://custom-elements-everywhere.com/">just about any front-end framework in use today</auro-hyperlink>. </p>
      <p>When it comes to React specifically, there are <auro-hyperlink target="_blank" href="https://custom-elements-everywhere.com/libraries/react/results/results.html">some kinks</auro-hyperlink> that need to be addressed, but progress is happening. See this <auro-hyperlink target="_blank" href="https://codesandbox.io/s/adoring-breeze-jrewu?file=/src/App.js:0-27">demo</auro-hyperlink> of another LitElement based component library used in a React setup using the new <auro-hyperlink target="_blank" href="https://github.com/facebook/react/issues/11347">React 18 rc</auro-hyperlink>.</p>
      <p>To ensure that we continue to support the widest possible range of development frameworks, the Auro team has come up with a series of <auro-hyperlink relative href="/best-practice">custom element best practices</auro-hyperlink> as well a <auro-hyperlink href="/generator/define-api" relative>guide to consistent API developent</auro-hyperlink>. Together these tools help guild new development for consistency, scaleability and reuse.</p>
      <p>For more inspiration with using Auro custom elements, see our <auro-hyperlink relative href="/reactSetup">React</auro-hyperlink> and <auro-hyperlink relative href="svelteSetup">Svelte</auro-hyperlink> demo projects.</p>
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
    <span slot="trigger">Q: Does Auro support IE11?</span>
    <div class="lightText">
      <p>The core parts of Auro, design tokens, WCSS and Icons are all IE11 compatible. Also be sure to review Auro's official <auro-hyperlink href="/support/browsersSupport" relative>browser support policy</auro-hyperlink>.</p>
      <p>On August 17, 2020, Microsoft published a timeline indicating that Microsoft Teams will stop supporting Internet Explorer 11 on November 30, 2020, whereas Microsoft 365 products will end Internet Explorer 11 support on August 17, 2021. It is our position that Auro will no longer support IE11 as of Q3, 2021.</p>
      <p>Alternative bundled versions may be available for custom elements, please see <strong>Install bundled assets from CDN</strong> in each project's README for more information.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="css" chromeless noProfile>
    <span slot="trigger">Q: Does Auro have a standard for CSS?</span>
    <div class="lightText">
      <p>CSS in Auro is no different than in any other project. The better CSS is organized, the easier it is to follow and maintain. Regardless of scope.</p>
      <p><auro-hyperlink href="/css/conventions" relative>Auro's opinions on CSS</auro-hyperlink> are simple and easy to follow. Single responsibility, tokens and utilities, it's all covered. In addition to these conventions, Auro has a full <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/" target="_blank">CSS library</auro-hyperlink>to help with daily development. You may also want to review <auro-hyperlink relative href="/css/custom-element-css">CSS styles and custom elements</auro-hyperlink> for helpful information and background for writing CSS for custom elements.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="generator" chromeless noProfile>
    <span slot="trigger">Q: What is the WC-Generator?</span>
    <div class="lightText">
      <p>The <auro-hyperlink href="/generator/install" relative>Auro WC-Generator</auro-hyperlink> is an easy to use and easy to setup developer experience for starting new web component projects based on the LitElement base class. When building HTML custom elements there is a lot of boiler-plate code and support needed for testing and demo setup. The Auro team works hard to keep this generator up to date to ensure quality of code and developer experience with each new project.</p>
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
      <p>Submitting PRs is great, but we still recommend that you submit an issue to be reviewed before starting the work. While we try to work with everyone as much as possible, we can't guarantee that all PRs will be accepted and merged into the main branch. So to ensure that you are committing code that will be accepted, an issue first really helps.</p>
    </div>
  </auro-accordion>
</auro-accordion-group>

## Frequently asked process questions

<auro-accordion-group>
  <auro-accordion id="newWork" chromeless noProfile>
    <span slot="trigger">Q: A new element variant is discovered?</span>
    <div class="lightText">
      <p>What is a new variant when it comes to Auro custom elements? It's basically the same as with any variant in a design, but in this context it requires new feature support.</p>
      <p>How a variant is discovered will vary. The discovery consists of reviewing an existing Auro custom element, presented in this doc site or the UI kit design documentation, and the new variant is the difference between what is presented and what is wanted.</p>
      <p>To request that this new feature be developed, the best way forward is to submit an issue to the Auro team via <auro-hyperlink href="https://auro.alaskaair.com/component-status" relative>the Auro status page.</auro-hyperlink> Click on the <b>ISSUES</b> button associated to the custom element you want to update, this will take you to the issues page of the repository. Click the <b>NEW ISSUE</b> and choose <b>Feature request</b>.</p>
      <p>In the feature request, please be sure to include all the information you have to describe the new feature. Attach a design proposal if that is helpful. Please indicate how you would like this feature to work. And include a description as to why this variant is needed. That is always helpful. </p>
      <p>Please, do not submit a pull request without first submitting an issue. Without submitting an issue first, we would hate for anyone on your team to lose time because the variant was decided not to be included into the custom element.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="sla" chromeless noProfile>
    <span slot="trigger">Q: What is Auro's SLA?</span>
    <div class="lightText">
      <auro-header level="3" display="500">Issues</auro-header>
      <p>We monitor the tickets and Internal Micosoft Teams <auro-hyperlink href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3A850b95ad1ecf4c5db953e77774400a2a%40thread.skype%2FAuro%2520Support%2520Channel%3FgroupId%3Daa01c782-8f88-480d-85f1-0927b1757977&type=channel&deeplinkId=8777b121-2e88-49ae-b9cb-c3d776c93267&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" target="_blank">Public Channel</auro-hyperlink> from 10-4 Pacific time Monday - Friday. During this time, all tickets and messages will be responded to within 1 hour.</p>
      <p>All bugs and general support requests will be investigated immediately upon receipt.</p>
      <p>All feature requests will be triaged during our next standup meeting (every Monday - Thursday morning). If your issue is urgent, send a message in our public channel.</p>
      <p>The Auro Team will determine the scope, effort and priority of all support requests and document these decisions within the ticket.</p>
      <auro-header level="3" display="500">Pull Requests</auro-header>
      <p>For pull requests, please allow up to 48 hours for solicited code changes that are associated with an approved issue. If the pull request is unsolicited and not associated with an approved issue, please allow up to 72 hours for a response. To help expedite this process, please submit an issue for review prior to submitting a pull request. </p>
      <p>Please see our <auro-hyperlink href="/contributing" relative>Auro Design System Contributing Guidelines</auro-hyperlink> for more information.</p>
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

# Auro Support

Looking for help with Auro? F.A.Q.s, how to contact, it's all here.

## 1:1 support with Auro

Do you have a question about Auro, a custom element, part of the support architecture or how to get support for your team? First we'd suggest reviewing the F.A.Q.s listed below for common questions.

If you have a question, an issue or are simply curious about a specific part of the Auro Design System, we suggest submitting a [Github support ticket](/component-status) with the specific repo your issues relates.

For internal Alaska users, there is a [Teams channel for Auro](https://teams.microsoft.com/l/channel/19%3a5df2ca021a6548c4af54256bbc737129%40thread.skype/Auro%2520(public)?groupId=3a6a4783-59c6-496a-a20c-ab306461a894&tenantId=0f44c5d4-42b0-45c2-bf55-d0fea8430d33), but it is recommended that this is for general support where other users may respond. The Teams channel is not recommended for larger architectural discussions or platform issues where the attention of an Auro team member is required.

For in-depth issues, platform discussions, things where there is a need for the dedicated attention from an Auro team member, we ask that you please [schedule](https://calendly.com/dalesande) a meeting so that we can give your discussion the attention it deserves.

Thanks!<br>
-- The Auro Team

## F.A.Q.

<!-- >
  <auro-accordion id="">
    <span slot="trigger"></span>
  </auro-accordion>
-->

Please see the items below for commonly asked questions regarding development and instillation of the Auro Design System.

<auro-accordion-group>
  <auro-accordion id="getStarted">
    <span slot="trigger">How do I get started?</span>
    <p>Getting started with Auro may seem daunting at first, but once basic foundations are in place, it's all plug-n-play after that. First off, please see the <auro-hyperlink href="/getting-started/developers/compliance" relative>Compliance</auro-hyperlink> section for an understanding on the levels of Auro compliance from CSS to web components.</p>
    <p>An important part and core element of everything from CSS to web components are <auro-hyperlink href="getting-started/developers/design-tokens" relative>design tokens</auro-hyperlink>. Design tokens are common variables for all of the core atomic UI properties. Fonts, colors, sizes, breakpoints, etc ... if it's a common value to the UI, it's a design token.</p>
    <p>Next it's suggested to get familiar with <auro-hyperlink href="/webcorestylesheets" relative>Web Core Style Sheets</auro-hyperlink>, or WCSS for short. WCSS is a foundational CSS library to assist in the quick and easy setup of Auro styles. Also, don't forget to review the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/" target="_blank">WCSS API</auro-hyperlink> for an inside look at this supporting library.</p>
    <p>No UI would be complete without the use of <auro-hyperlink href="/icons/overview" relative>icons</auro-hyperlink>. Auro has a vast array of predefined SVG icons to be used. Please see the documentation for all the ways you can make use of this library, or make use of Auro's easy to use  <auro-hyperlink href="/components/auro/icon" relative>icon web component</auro-hyperlink>.</p>
    <p>Last, please see the list of available pre-developed <auro-hyperlink href="/component-status" relative>HTML native web components</auro-hyperlink>. These components can be used in virtually any development stack. Be sure you checkout the <auro-hyperlink href="/reactSetup" relative>React</auro-hyperlink>, <auro-hyperlink href="/svelteSetup" relative>Svelte</auro-hyperlink> and <auro-hyperlink href="/javascriptSetup" relative>standard JS</auro-hyperlink>example projects.</p>
  </auro-accordion>
  <auro-accordion id="primary">
    <span slot="trigger">What is Auro's primary objective?</span>
    <p><strong>The primary objective of the Auro Design System team is to enable work</strong></p>
    <p>Whether that enablement is provided in a form of a design or a web component that a product team can take direct advantage of, or if that enablement is in the form of support for the product team to design and engineer the web component, the objective is the same.</p>
  </auro-accordion>
  <auro-accordion id="newWork">
    <span slot="trigger">How do teams bring work into Auro's backlog?</span>
    <p>In our Propose new work section we discuss the the overall <auro-hyperlink href="/getting-started/developers/governance">Auro Governance Working Agreement</auro-hyperlink>. This assumes that new work as been identified and explains the process we will go through to get your work completed. </p>
  </auro-accordion>
  <auro-accordion id="sla">
    <span slot="trigger">What is Auro's SLA?</span>
    <p>When it comes to servicing our customers we hold ourselves to a high level of support. Once a ticket is submitted for support, you have our promise that you will receive a response within 24hours. </p>
    <p>That is not to say that we will address the issue within that time, but someone from our team will respond to your issue with the information we have and what our plan will be to prioritize the issue.</p>
    <p>Prioritization of work will take a few things into consideration, but the overall process will follow the MoSCoW approach. </p>
    <ul>
      <li><strong>Must</strong> -  The work is a MUST HAVE for the health and continued value of the Auro Design System. This criteria specifies that the work needs to happen in order to deliver on the goals of the Auro team and to ensure the success of any product team that is dependent on Auro's resources. </li>
      <li><strong>Should</strong> - The work is high-priority and should be included in the sprint plan if it is possible. This is often critical work but one which can be satisfied in other ways if absolutely necessary.</li>
      <li><strong>Could</strong> - Work that is considered desirable, but not necessary. This work will be included if time and resources permit or up for consideration for a sprint plan further down the road.</li>
      <li><strong>Won't</strong> - Represents work that the team has decided is not necessary for the success of the Auro Design System or has agreed that this is work to be done, but not considered the responsibility of the Auro Design System.</li>
    </ul>
    <p>Following these guidelines, every new request, and even bug reports, can be judged fairly and prioritized appropriately.</p>
  </auro-accordion>
  <auro-accordion id="ie11">
    <span slot="trigger">How does Auro support IE11?</span>
    <p>Not going to lie, IE11 and Auro have a troubled relationship. The good news is that there is a strategy. The core parts of Auro, design tokens, WCSS and Icons are all IE11 compatible. Also be sure to review Auro's official <auro-hyperlink href="/support/browsersSupport" relative>browser support policy</auro-hyperlink>.</p>
    <p>For design tokens, it is best to use either the Sass versions of the tokens or look to add <auro-hyperlink href="https://github.com/postcss/postcss-custom-properties" target="_blank">postCSS Custom Properties</auro-hyperlink>.</p>
    <p>In order for IE11 to support web components, we rely on the <auro-hyperlink href="/support/polyfills/webcomponentsjs" relative>Web Components Polyfills</auro-hyperlink>project. For specific framework examples, please be sure you checkout the <auro-hyperlink href="/reactSetup" relative>React</auro-hyperlink>, <auro-hyperlink href="/svelteSetup" relative>Svelte</auro-hyperlink> and <auro-hyperlink href="/javascriptSetup" relative>standard JS</auro-hyperlink>example projects.</p>
  </auro-accordion>
  <auro-accordion id="css">
    <span slot="trigger">Does Auro have a standard for CSS?</span>
    <p>CSS in Auro is no different than in any other project. The better CSS is organized, the easier it is to follow and maintain. Regardless of scope.</p>
    <p><auro-hyperlink href="/support/css-conventions" relative>Auro's opinions on CSS</auro-hyperlink> are simple and easy to follow. Single responsibility, tokens and utilities, it's all covered. In addition to these conventions, Auro has a full <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/" target="_blank">CSS library</auro-hyperlink>to help with daily development.</p>
  </auro-accordion>
  <auro-accordion id="generator">
    <span slot="trigger">What is the Web Component Generator?</span>
    <p>The <auro-hyperlink href="/getting-started/developers/generator/install" relative>Auro Web Component Generator</auro-hyperlink> is an easy to use and easy to setup developer experience for starting new web component projects from scratch. When building web components there is a lot of boiler-plate code and support needed for testing and demo setup. The Auro team works hard to keep this generator up to date to ensure quality of code and developer experience with each new project.</p>
    <p>For more information on how to start a project from scratch, be sure to take a look at <auro-hyperlink href="/getting-started/developers/generator/getting-started" relative>Getting Started</auro-hyperlink> guide for a step-by-step walk-through.</p>
  </auro-accordion>
  <auro-accordion id="governance">
    <span slot="trigger">How does an idea become a component?</span>
    <p>This is a great question! The process for going from design to release consists of a few steps. The first step is our <auro-hyperlink href="/getting-started/developers/governance" relative>Governance Decision Tree.</auro-hyperlink>Using this as a guide designers, developers and product can make decisions as to who and when the work would dictate an addition to the Auro Design System.</p>
    <p>Once it has been decided that new work would be added to the Auro Design System, designers and developers across teams will address the following steps.</p>
    <ul>
      <li>Either a design will be ready for use or a new design will be addressed for the scope of the new component</li>
      <li>Senior designers will review the submitted design to ensure compatibility with the design system</li>
      <li>The approved design will be reviewed with an engineer in preparation for development</li>
      <li>The development cycle will include check-ins with senior engineers and designers throughout the process</li>
      <li>Once the development of the new work is approved by all stakeholders the new component will be documented and released along with the release of the new design pattern.</li>
    </ul>
    <p>Once a new component is released, the work has only begun. Each new addition to Auro is reviewed on a regular basis for any new opportunity to improve on the design and execution of the new component.</p>
  </auro-accordion>
  <auro-accordion id="release">
    <span slot="trigger">How many components have been released?</span>
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
  </auro-accordion>
  <auro-accordion id="wip">
    <span slot="trigger">What is the Auro team currently working on?</span>
    <p>Our <auro-hyperlink href="/wip" relative>project board</auro-hyperlink> is open to the public. As we plan future releases, there are identified issues in the <strong>Prioritized for work</strong> section that illustrates what is queued up for work. </p>
  </auro-accordion>
  <auro-accordion id="help">
    <span slot="trigger">How can I help?</span>
    <p>Are you interested in helping with Auro, we can help with that. There are multiple ways anyone can contribute to Auro. If you are using any one of the many Auro tools and you find a bug or want to propose an enhancement, we recommend that you submit an issue with any of the <auro-hyperlink href="/component-status" relative>Auro individual repos.</auro-hyperlink></p>
    <p>While you can go straight to PR, we still recommend that you submit an issue to be reviewed before starting the work. While we try to work with everyone as much as possible, we can't guarantee that all PRs will be accepted and merged into the main branch. So to ensure that you are committing code that will be accepted, an issue first really helps.</p>
    <p>If you are simply looking for something to do but don't know where to start? We have you covered there too. See our list of <auro-hyperlink href="/help-wanted" relative>help wanted</auro-hyperlink> issues.</p>
  </auro-accordion>
</auro-accordion-group>

## Schedule a time to talk

Sometimes documentation or setup instructions simply aren't enough. Please see the list of Auro team members with instructions as how to best schedule time with them.

| Name | Title | Contact preferences |
| --- | --- | --- |
| Dale Sande | Principal Engineer | Please [schedule](https://calendly.com/dalesande) |
| Gus Naughton | Software Engineer | Please [schedule](https://calendly.com/gusn) |

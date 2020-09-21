# Auro Support

Looking for help with Auro? F.A.Q.s, how to contact, it's all here.

## F.A.Q.

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
</auro-accordion-group>

## Schedule a time to talk

Sometimes documentation or setup instructions simply aren't enough. Please see the list of Auro team members with instructions as how to best schedule time with them.

| Name | Title | Contact preferences |
| --- | --- | --- |
| Dale Sande | Sr. Design Technologist | Please [schedule](https://calendly.com/dalesande) |
| James Jackson | Principal Software Engineer | Please [schedule](https://calendly.com/james-jackson2/auro)

# Say hello to Auro!

<div class="imageBox">
  <div class="quoteBox">
    <auro-header margin="bottom" size="none" display="700">Auro is enablement</auro-header>
    <p>Enabling design and enabling development to innovate on ideas and collaborate on the future.</p>
  </div>
  <img alt="homepage hero image" src="/images/content/home.jpg" />
</div><br>

<!-- <auro-alerts information noicon>
  NOTE: The following Custom Elements have been updated with a new bundled CDN build process:<br><br>
  <auro-hyperlink href="/components/auro/hyperlink/install" relative>auro-hyperlink v2.1</auro-hyperlink>,
  <auro-hyperlink href="/components/auro/alerts/install" relative>auro-alerts v1.3</auro-hyperlink>, and
  <auro-hyperlink href="/components/auro/radio/install" relative>auro-radio v1.3</auro-hyperlink>
  <br><br>If you are using this bundled version, make sure NOT to use <code>@latest</code> in your code.
  These versions no longer support the <code>polyfill.js</code>. Be sure to see the updated link code in the individual component install page.
</auro-alerts><br> -->


<!-- Auro provides components and tools to help product teams work more efficiently. Designed and developed to support all Alaska Airlines digital experiences. -->

<div class="auro_util_displayFlex columns">
  <div>
    <auro-header display="700">Philosophy</auro-header>
    <p>We promote ease and inspire engagement through focused and intentional design. Translating our friendly and optimistic brand, our digital experiences establish emotional connections — delivering care and value. Simple. Consistent. Relevant. Engaging.</p>
    <auro-hyperlink href="/philosophy" relative>Learn More About Our Philosophy</auro-hyperlink>
  </div>
  <div>
    <auro-header display="700">Resources</auro-header>
    <p>Designer or developer, we have resources for every audience.</p>
    <p>
      <auro-hyperlink href="/typography/overview" relative>Typography</auro-hyperlink> and <auro-hyperlink href="/color/overview" relative>Color</auro-hyperlink>,<br/>
      a vast array of <auro-hyperlink href="/getting-started/developers/design-tokens" relative>Design Tokens,</auro-hyperlink><br/>
      <auro-hyperlink href="/icons" relative>pixel-perfect Icons,</auro-hyperlink><br/>
      and the <auro-hyperlink href="/generator" relative>WC-Generator</auro-hyperlink> for a unique developer experience.<br/>
    </p>
  </div>
  <div>
    <auro-header display="700">Implementations</auro-header>
    <p>Using LitElement as a base, the Auro web components allows for highly flexible use in almost any development environment including <auro-hyperlink href="/reactSetup" relative>React</auro-hyperlink> and <auro-hyperlink href="/svelteSetup" relative>Svelte</auro-hyperlink>.</p>
    See our growing list of pre-built <auro-hyperlink href="/component-status" relative>web components.</auro-hyperlink>
  </div>
</div><br>

## Auro's top FAQs

<style>
  .lightText {
    color: var(--auro-color-text-secondary-on-light);
    margin-bottom: 2rem;
  }
</style>

<p>Here are Auro's top FAQs. For more, please see our <auro-hyperlink relative href="/auro-support">Auro Support</auro-hyperlink> section.<p>

<auro-accordion-group>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: How do I get started?</span>
    <div class="lightText">
      <p>Getting started with Auro may seem daunting at first, but once basic foundations are in place, it's all plug-n-play after that. First off, please see the <auro-hyperlink href="/getting-started/developers/compliance" relative>Compliance</auro-hyperlink> section for an understanding on the levels of Auro compliance from CSS to web components.</p>
      <p>An important part and core element of everything from CSS to web components are <auro-hyperlink href="getting-started/developers/design-tokens" relative>design tokens</auro-hyperlink>. Design tokens are common variables for all of the core atomic UI properties. Fonts, colors, sizes, breakpoints, etc ... if it's a common value to the UI, it's a design token.</p>
      <p>Next it's suggested to get familiar with <auro-hyperlink href="/webcorestylesheets" relative>Web Core Style Sheets</auro-hyperlink>, or WCSS for short. WCSS is a foundational CSS library to assist in the quick and easy setup of Auro styles. Also, don't forget to review the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/" target="_blank">WCSS API</auro-hyperlink> for an inside look at this supporting library.</p>
      <p>No UI would be complete without the use of <auro-hyperlink href="/icons/overview" relative>icons</auro-hyperlink>. Auro has a vast array of predefined SVG icons to be used. Please see the documentation for all the ways you can make use of this library, or make use of Auro's easy to use  <auro-hyperlink href="/components/auro/icon" relative>icon custom element</auro-hyperlink>.</p>
      <p>Last, please see the list of available pre-developed <auro-hyperlink href="/component-status" relative>HTML native custom elements</auro-hyperlink>. These components can be used in virtually any development stack. Be sure you checkout the <auro-hyperlink href="/reactSetup" relative>React</auro-hyperlink>, <auro-hyperlink href="/svelteSetup" relative>Svelte</auro-hyperlink> and <auro-hyperlink href="/javascriptSetup" relative>standard JS</auro-hyperlink> example projects.</p>
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
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: Does Auro use LitElement?</span>
    <div class="lightText">
      <p>Yes. LitElement is the base class that all Auro custom elements are built upon. Auro currently supports <auro-hyperlink target="_blank" href="https://www.npmjs.com/package/lit-element/v/2.5.1">Lit-element v2.5.1</auro-hyperlink>. There is a plan to convert all current custom elements to the new <auro-hyperlink target="_blank" href="https://lit.dev/">Lit 2.0 spec</auro-hyperlink> by the end of 2022.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: Does Auro support React, Svelte, Vue, etc...?</span>
    <div class="lightText">
      <p>Auro web components are based on LitElement HTML custom elements. This gives us the greatest spread possible for working with <auro-hyperlink target="_blank" href="https://custom-elements-everywhere.com/">just about any front-end framework in use today</auro-hyperlink>. </p>
      <p>When it comes to React specifically, there are <auro-hyperlink target="_blank" href="https://custom-elements-everywhere.com/libraries/react/results/results.html">some kinks</auro-hyperlink> that need to be addressed, but progress is happening. See this <auro-hyperlink target="_blank" href="https://codesandbox.io/s/adoring-breeze-jrewu?file=/src/App.js:0-27">demo</auro-hyperlink> of another LitElement based component library used in a React setup using the new <auro-hyperlink target="_blank" href="https://github.com/facebook/react/issues/11347">React 18 rc</auro-hyperlink>.</p>
      <p>To ensure that we continue to support the widest possible range of development frameworks, the Auro team has come up with a series of <auro-hyperlink relative href="/best-practice">custom element best practices</auro-hyperlink> as well a <auro-hyperlink href="/generator/define-api" relative>guide to consistent API developent</auro-hyperlink>. Together these tools help guild new development for consistency, scaleability and reuse.</p>
      <p>For more inspiration with using Auro custom elements, see our <auro-hyperlink relative target="_blank" href="/reactSetup">React</auro-hyperlink> and <auro-hyperlink relative target="_blank" href="svelteSetup">Svelte</auro-hyperlink> demo projects.</p>
    </div>
  </auro-accordion>
  <auro-accordion id="getStarted" chromeless noProfile>
    <span slot="trigger">Q: How do I contact the Auro Team?</span>
    <div class="lightText">
      <p>There are a lot of ways to get questions and support issues to the team. If there is an issue you are seeing with any of the parts of the Auro ecosystem, we highly recommend that you send a support issue. Select any of the ISSUE buttons on our <auro-hyperlink relative href="/component-status">status</auro-hyperlink> page and submit an issue from the repository.</p>
      <p>When sending an issue is not enough, take a look at our <auro-hyperlink href="/officehours" relative>Office Hours</auro-hyperlink> for the best time to contact us.</p>
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
  <auro-accordion id="generator" chromeless noProfile>
    <span slot="trigger">Q: What is auroLabs?</span>
    <div class="lightText">
      <p><auro-hyperlink href="/aurolabs" relative>auroLabs</auro-hyperlink> is a process to enable development of new ideas without all the pre-process that is typically required to add a new component to the design system. </p>
      <p>That being said, this does not ignore the process. It simply reverses priorities. auroLabs allows engineers to build and deliver an idea allowing for a iterative refinement process post it's first release. </p>
      <p>Make sure to refer to the <auro-hyperlink href="/aurolabs" relative>auroLabs</auro-hyperlink> page for all information regarding this process.</p>
    </div>
  </auro-accordion>
<auro-accordion-group>

## What people are saying about Auro

<div class="auro_util_displayFlex columns home--quotes">
  <div>
    <blockquote>Been working on some new tools for the team and decided to use the auro stuff to get rolling quickly and its so easy to use. Love the work you've been doing - keep it up!</blockquote>
    <p>-- Josh Benard, Sr Product Mgr</p>
  </div>
  <div>
    <blockquote>Needing to move away from a legacy lightbox dialog solution, I spent the better part of a day weeding out the old code, and only 10 minutes adding in auro-dialog and was up and running.</blockquote>
    <p>-- Caleb Wells, Software Engineer</p>
  </div>
  <div>
    <blockquote>One way to fix [accessibility] is to use an Auro component.</blockquote>
    <p>-- Forrest Taylor, Software Engineer</p>
  </div>
  <div>
    <blockquote>I must say, you do really good work.  I'm impressed!  Let me just say, I'm an Auro fan!</blockquote>
    <p>-- Scott Flesher, Principal Software Engineer</p>
  </div>
</div>

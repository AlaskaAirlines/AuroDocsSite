# Auro Support

Looking for help with Auro? F.A.Q.s, how to contact, it's all here.

## F.A.Q.

Please see the items below for commonly asked questions regarding development and instillation of the Auro Design System.

#### How do I get started?

Getting started with Auro may seem daunting at first, but once basic foundations are in place, it's all plug-n-play after that. First off, please see [Compliance](/getting-started/developers/compliance) for an understanding on the levels of Auro compliance from CSS to web components.

An important part and core element of everything from CSS to icons to web components are [design tokens](getting-started/developers/design-tokens). Design tokens are common variables for all of the core atomic UI properties. Fonts, colors, sizes, breakpoints, etc ... if it's a common value to the UI, it's a design token.

Next it's suggested to get familiar with [Web Core Style Sheets](/webcorestylesheets), or WCSS for short. WCSS is a foundational CSS library to assist in the quick and easy setup of Auro styles. Also, don't forget to review the [WCSS API](https://alaskaairlines.github.io/WebCoreStyleSheets/) for an inside look at this supporting library.

No UI would be complete without the use of [icons](/icons/overview). Auro has a vast array of predefined SVG icons to be used. Please see the documentation for all the ways you can make use of this library.

Last, please see the list of available pre-developed [HTML native web components](/component-status). These components can be used in virtually any development stack. Be sure you checkout the [React](/reactSetup), [Svelte](/svelteSetup) and [standard JS](/javascriptSetup) example projects.

#### How does Auro support IE11?

Not going to lie, IE11 and Auro have a troubled relationship. The good news is that there is a strategy. The core parts of Auro, design tokens, WCSS and Icons are all IE11 compatible. Also be sure to review Auro's official [browser support policy](/support/browsersSupport).

For design tokens, it is best to use either the Sass versions of the tokens or look to add [postCSS Custom Properties](https://github.com/postcss/postcss-custom-properties).

In order for IE11 to support web components, we rely on the [Web Components Polyfills](/support/polyfills/webcomponentsjs) project. For specific framework examples, please be sure you checkout the [React](/reactSetup), [Svelte](/svelteSetup) and [standard JS](/javascriptSetup) example projects.



## Schedule a time to talk

Sometimes documentation or setup instructions simply aren't enough. Please see the list of Auro team members with instructions as how to best schedule time with them.

| Name | Title | Contact preferences |
| --- | --- | --- |
| Dale Sande | Sr. Design Technologist | Please [schedule](https://calendly.com/dalesande) |

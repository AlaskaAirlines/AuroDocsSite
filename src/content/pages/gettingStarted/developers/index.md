<auro-header level="1">Getting started as a developer</auro-header>



<auro-header level="2">Helpful Concepts To Learn</auro-header>

<auro-header level="3">What are web components?</auro-header>

> Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

-- <auro-hyperlink href="https://www.webcomponents.org/introduction" target="_blank">What are web components?</auro-hyperlink> at webcomponents.org

<auro-header level="3">Building web components</auro-header>

> Components are the building blocks of modern web applications. What best practices should you follow when building your own components so they can stand the test of time?

-- <auro-hyperlink href="https://developers.google.com/web/fundamentals/web-components" target="_blank">Building web components</auro-hyperlink> at developers.google.com

<auro-header level="3">Custom Elements Everywhere</auro-header>

> Custom Elements are the lynchpin in the Web Components specifications. They give developers the ability to define their own HTML elements. When coupled with Shadow DOM, Custom Elements should be able to work in any application. But things don't always work seamlessly.

-- <auro-hyperlink href="https://custom-elements-everywhere.com/" target="_blank">Custom Elements Everywhere</auro-hyperlink>

<auro-header level="2">Auro Web Component Generator</auro-header>

The <auro-hyperlink href="/getting-started/developers/generator" relative>Design System Web Component Generator</auro-hyperlink> is a project tool intended to assist developers with an easy to configure and execute Web Component development environment for the purpose of building custom elements for the Design System.


<auro-header level="2">Making your project Auro Ready</auro-header>

When starting a new project and using Auro with web components, while there are many differences between the various frameworks, this setup is constant.

The following steps address the basic <auro-hyperlink href="/support/compliance" relative>compliance</auro-hyperlink> model.

<auro-header level="3">Design tokens</auro-header>

```
$ npm i @alaskaairux/orion-design-tokens
```

<auro-hyperlink href="/core/design-tokens" relative>Design tokens</auro-hyperlink> are a set of pre-defined variables used to manage the design of products. Installing and integrating the design tokens in to your front-end build will give you the ability to use the colors, spacing, sizing and other aspects of the design system.

The design tokens are the **absolute base of the system** and at bare minimum this package alone will get you started with being able to build design system compliant experiences.

For more information, be sure to see the full <auro-hyperlink href="/core/design-tokens/info" relative>design token API info</auro-hyperlink>

<auro-header level="3">Web Core Style Sheets</auro-header>

WC Style Sheets (WCSS) is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Auro Design Language.

See <auro-hyperlink href="/webcorestylesheets" relative>WC Style Sheets</auro-hyperlink> for all information related to use. Also see the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/" target="_blank">automated documentation site</auro-hyperlink> for all information related to the features and API of WC Style Sheets.

<auro-header level="3">Icon Library</auro-header>

The Icons package contains standard set of SVG icons that can be used with any web project.

```
$ npm i @alaskaairux/orion-icons -D
```

Further information can be found in the <auro-hyperlink href="/core/auro-icons/info" relative>icons</auro-hyperlink> section.

<auro-header level="3">Auro Components</auro-header>

Auro Components are pre-styled, fully functional html custom elements for common UI primitives, such as buttons, hyperlinks, and inputs. You can also browse the list of all released <auro-hyperlink href="/support/components" relative>components and related Design System resources</auro-hyperlink>.

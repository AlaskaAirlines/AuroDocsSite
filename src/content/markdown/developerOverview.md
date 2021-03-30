# Overview

### What are web components?

> Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

-- [What are web components?](https://www.webcomponents.org/introduction) at webcomponents.org

### Building web components

> Components are the building blocks of modern web applications. What best practices should you follow when building your own components so they can stand the test of time?

-- [Building web components](https://developers.google.com/web/fundamentals/web-components) at developers.google.com

### Custom elements everywhere

> Custom Elements are the lynchpin in the Web Components specifications. They give developers the ability to define their own HTML elements. When coupled with Shadow DOM, Custom Elements should be able to work in any application. But things don't always work seamlessly.

-- [Custom Elements Everywhere](https://custom-elements-everywhere.com/)

## Auro's WC-Generator

Auro's [WC-Generator](/getting-started/developers/generator) is a tool intended to assist developers with an easy-to-configure and -execute web component development environment for the purpose of building custom elements for the Auro design system.


## Making your project Auro-ready

When starting a new project and using Auro with web components, this setup is the same regardless of the differences among the various frameworks.

The following steps address the basic [compliance](/getting-started/developers/compliance) model.

### Design tokens

```
$ npm i @alaskaairux/orion-design-tokens
```

[Design tokens](/getting-started/developers/design-tokens) are a set of pre-defined variables used to manage the design of products. Installing and integrating the design tokens in to your front-end build will give you the ability to use the colors, spacing, sizing and other aspects of the design system.

The design tokens are the **absolute base of the system** and at bare minimum this package alone will get you started with being able to build design system compliant experiences.

For more information, be sure to see the full [design token API info](/getting-started/developers/design-tokens/install)

### Web core style sheets

WC style sheets (WCSS) are a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Auro design language.

See [WC style sheets](/webcorestylesheets) for all information related to use. Also see the [automated documentation site](https://alaskaairlines.github.io/WebCoreStyleSheets/) for all information related to the features and API of WC style sheets.

### Icon library

The [icons package](/icons/usage) contains standard set of SVG icons that can be used with any web project. For an even easier use of Auro icons, be sure to take a look at the [auro-icon](/components/auro/icon) web component.

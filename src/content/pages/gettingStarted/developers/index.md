# Getting started as a developer

## Helpful Concepts To Learn

* Web Components
    * [What are web components?](https://www.webcomponents.org/introduction)
    * [Building web components](https://developers.google.com/web/fundamentals/web-components)
    * [Web components and JS Frameworks](https://custom-elements-everywhere.com/)
* NPM (node package manager)
    * [What is npm?](https://docs.npmjs.com/about-npm/)
    * [Install and setup npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

> Much of the guides provided expect an understanding of Javascript, HTML, CSS, and front-end build systems such as (webpack, rollup, gulp, etc ...)

## Making your project Auro Ready

These steps assume you already have npm setup for your project.

### Design tokens

```
$ npm i @alaskaairux/orion-design-tokens
```

All components have a dependency on the [design tokens](/designTokens/tokens). Installing and integrate the design tokens in to your front-end build will give you the ability to use the colors, spacing, sizing and other aspects of the design system.

The design tokens are the **absolute base of the system** and at bare minimum this package alone will get you started with being able to build design system compliant experiences.

### Auro Icons

```
$ npm i @alaskaairux/icons
```

When adding icons to your UIs, Auro provides a full set of pre-designed and fully vetted [icons](/icons) for you to choose from.

### Auro Components

Auro Components are pre-styled, fully functional html custom elements for common UI primitives, such as buttons, hyperlinks, and inputs. You can also browse the list of all released [components and related Design System resources](/docs/components).

# Overview

### What are web components?

> Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

-- [What are web components?](https://www.webcomponents.org/introduction) at webcomponents.org

### Building web components

> Components are the building blocks of modern web applications. What best practices should you follow when building your own components so they can stand the test of time?

-- [Building web components](https://developers.google.com/web/fundamentals/web-components) at developers.google.com

### Custom Elements Everywhere

> Custom Elements are the lynchpin in the Web Components specifications. They give developers the ability to define their own HTML elements. When coupled with Shadow DOM, Custom Elements should be able to work in any application. But things don't always work seamlessly.

-- [Custom Elements Everywhere](https://custom-elements-everywhere.com/)

## What is a "what"?

In a design system there are many words that can be very confusing, such as _component_ and _element_. Here we will define come core phases that you will see throughout this project.

It needs to be pointed out that we are choosing NOT to use _element_ as this may be confused with [native HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) already supported by the browser. While HTML custom elelments are in essence elements and they are crated in HTML with tags, using _primitive_ and _component_ helps us to better communicate intent.

### Token

A Token is a common reference to a static value. A Token is not a variable, but the output of Tokens can be in the form of variables. A Token in this sense is a data key associated to it's value, for example:

```json
{
  "color": {
    "brand": {
      "midnight": {
        "100": {
          "value": "c1daf0",
```

Tokens can be exported as data or variables for various platforms including Sass, CSS, iOS and Android.

### Web Component

The term Web Components is a broad term that is used to speak to a specific type of technology used in web development, [HTML Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), or more commonly known as Web Components.

Web Components can be pre-styled, fully functional html custom elements for commonly used UIs. They can be very low level input types all the way up to complex interactions and content delivery. You can browse the list of all released [components and related Design System resources](/component-status).

Whereas with native HTML elements, a developer can use a `<p>` tag to create a paragraph. This element has no native style associated to it other than what a browser may have pre-configured.

With custom elements, a developer may create `<my-p>` that may contain styling and/or behavior. Custom elements are used the same way native elements are used, for example `<my-p>Hello World!</my-p>`

### Primitive Component

Primitives are the low-level web components used in a design system. Examples are buttons, inputs, and hyperlinks. A crucial property of a primitive component is that alone, it cannot complete an action. For example, a button by itself is unable to complete an action within an experience.

Primitives have a dependency on tokens.

### Component

Components, like primitives, are web components, but are more complex. Components can be made up of multiple primitives and at times other components. A crucial property of a component is when two or more primitives or other components  are working in concert to complete an interaction.

Components have a primary dependency primitives, but also may have a dependency on tokens or other components.

### Pattern

Patterns are not components, although very common patterns may be captured as a component.

Patterns are commonly used interfaces where the makeup is entirely of primitives and other components, but due to their complexity the pattern is 'suggested use' to allow the engineer to address their concerns directly versus having to work with an overly complex API.

A crucial property of a pattern is the existence of documentation only to support a common use UI pattern.



## Auro Web Component Generator

The [Design System Web Component Generator](/getting-started/developers/generator) is a project tool intended to assist developers with an easy to configure and execute Web Component development environment for the purpose of building custom elements for the Design System.


## Making your project Auro Ready

When starting a new project and using Auro with web components, while there are many differences between the various frameworks, this setup is constant.

The following steps address the basic [compliance](/getting-started/developers/compliance) model.

### Design tokens

```
$ npm i @alaskaairux/orion-design-tokens
```

[Design tokens](/getting-started/developers/design-tokens) are a set of pre-defined variables used to manage the design of products. Installing and integrating the design tokens in to your front-end build will give you the ability to use the colors, spacing, sizing and other aspects of the design system.

The design tokens are the **absolute base of the system** and at bare minimum this package alone will get you started with being able to build design system compliant experiences.

For more information, be sure to see the full [design token API info](/getting-started/developers/design-tokens/install)

### Web Core Style Sheets

WC Style Sheets (WCSS) is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Auro Design Language.

See [WC Style Sheets](/webcorestylesheets) for all information related to use. Also see the [automated documentation site](https://alaskaairlines.github.io/WebCoreStyleSheets/) for all information related to the features and API of WC Style Sheets.

### Icon Library

The Icons package contains standard set of SVG icons that can be used with any web project.

```
$ npm i @alaskaairux/orion-icons -D
```

Further information can be found in the [icons](/core/auro-icons/install) section.

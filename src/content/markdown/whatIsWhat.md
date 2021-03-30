# Common definitions

In a design system there are many words that can be very confusing, such as _component_ and _element_ as they have broad understanding. Here we will define a few core terms that you will see throughout this project.

It needs to be pointed out that we are choosing NOT to use the term _element_ alone as this may be confused with [native HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) already supported by the browser. While HTML custom elements are elements and they are used in HTML as tags, always referring to them as _custom elements_ helps us to better communicate the intent.

## Token

A _token_ is a common reference to a static value. A token is not a variable, but tokens can produce output in the form of variables. A token in this context is a data key associated with its value, for example:

```json
{
  "color": {
    "brand": {
      "midnight": {
        "100": {
          "value": "c1daf0",
```

Token output can be exported as data or variables for various platforms including Sass, CSS, iOS and Android.

## HTML custom element

The term _web component_ is a broad term referring to a type of technology used in web development. [HTML custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), commonly referred to as web components, is an HTML specification referring to the use of the shadow DOM, templates and slots.

Web components can be pre-styled, fully functional HTML custom elements for commonly-used UIs. They can be very low-level input types, all the way up to complex interactions and content delivery. You can browse the list of all released [components and related design system resources](/component-status).

As with native HTML elements, a developer can use a `<p>` tag to create a paragraph. This element has no native style associated with it other than what a browser may have pre-configured.

With custom elements, a developer may create `<my-p>` containing specific styling and/or behavior. Custom elements are used the same way native elements are used, for example `<my-p>Hello World!</my-p>`

## Primitive component

_Primitive components_ (or "primitives") are the low-level web components used in a design system. Examples include buttons, inputs, and hyperlinks. A crucial property of a primitive component is that it cannot complete an action alone. For example, a button by itself is unable to complete an action within an experience.

Primitives are dependant on tokens.

## Component

_Components_ (as used in this context), like primitives, are similar to web components, but they are more complex. Components can be made up of multiple primitives and (in some cases) other components. A crucial property of a component is when two or more primitives or other components  are working in concert to complete an interaction.

Components may have a dependency on primitives, but they may also have dependencies on tokens or other components as well.

## Pattern


Patterns are commonly-used interfaces where the makeup is entirely of primitives and other components, but due to their complexity the pattern is "suggested use" to allow the engineer to address individual use cases directly, versus having to work with an overly complex API.

A crucial property of a pattern is only the existence of design documentation to support a common use UI pattern.

## Auro experience

So what happens when a pattern is used to create a thing? With a combination of Auro tooling and custom code, a pattern is used to create an _experience_. These experiences are commonly distributed via the Alaska Component Hanger project.

An Auro experience can mean many different things and can be engineered in many different ways, e.g. web components, React or Svelte. What makes an experience specific to Auro is the use of the Auro Design System and its baseline tooling. Tokens, primitive components, components, web core styles, icons, and patterns are all integrated with the Alaska Airlines guest experience in mind.

## CMS module

_CMS modules_ are some of the few design/development patterns with very specific use cases and implementation models. Much like components, modules are a collection of data and design elements, but are coupled with the functionality specific to that of the CMS.

A module may be 100% specific to a content use case in the CMS, or it may be a wrapper for another Auro component or experience.

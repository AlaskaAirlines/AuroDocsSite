# What is a "what"?

In a design system there are many words that can be very confusing, such as _component_ and _element_ as they have broad understanding. Here we will define a few core phases that you will see throughout this project.

It needs to be pointed out that we are choosing NOT to use _element_ as this may be confused with [native HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) already supported by the browser. While HTML custom elelments are in essence elements and they are used in HTML as tags, using _primitive_ and _component_ helps us to better communicate the intent.

## Token

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

## Web Component

The term Web Components is a broad term that is used to speak to a specific type of technology used in web development, [HTML Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), or more commonly known as Web Components.

Web Components can be pre-styled, fully functional html custom elements for commonly used UIs. They can be very low level input types all the way up to complex interactions and content delivery. You can browse the list of all released [components and related Design System resources](/component-status).

Whereas with native HTML elements, a developer can use a `<p>` tag to create a paragraph. This element has no native style associated to it other than what a browser may have pre-configured.

With custom elements, a developer may create `<my-p>` that may contain styling and/or behavior. Custom elements are used the same way native elements are used, for example `<my-p>Hello World!</my-p>`

## Primitive Component

Primitives are the low-level web components used in a design system. Examples are buttons, inputs, and hyperlinks. A crucial property of a primitive component is that alone, it cannot complete an action. For example, a button by itself is unable to complete an action within an experience.

Primitives have a dependency on tokens.

## Component

Components, like primitives, are web components, but are more complex. Components can be made up of multiple primitives and at times other components. A crucial property of a component is when two or more primitives or other components  are working in concert to complete an interaction.

Components have a primary dependency on primitives, but may also have dependency on tokens or other components.

## Pattern

Patterns are not components, although very common patterns may be captured as a component.

Patterns are commonly used interfaces where the makeup is entirely of primitives and other components, but due to their complexity the pattern is 'suggested use' to allow the engineer to address their concerns directly versus having to work with an overly complex API.

A crucial property of a pattern is only the existence of design documentation to support a common use UI pattern.

# Using transparent colors

While there are many [color tokens](/colors) to be used, there are none that specifically address different levels of transparency. The solution that we best recommend is to use either Sass or CSS to generate the opacity levels you are looking for in the UIs you are creating.

This table below illustrates the different opacity types.

| Level | Applies
|---|---
| 0.1 | 10% opacity
| 0.2 | 20% opacity
| 0.3 | 30% opacity
| 0.4 | 40% opacity
| 0.5 | 50% opacity
| 0.6 | 60% opacity
| 0.7 | 70% opacity
| 0.8 | 80% opacity
| 0.9 | 90% opacity

## Using Sass

Using Sass to create different opacity levels:

1. Using the `rgba()` function
1. Using Sass Token variables

Using Sass to create opacity levels will output a final RGBA value that is compatible with all browsers. 

In this example use `$auro-color-brand-tropical-400` to create some opacity examples. Notice the use of a modifier in the [naming convention](http://localhost:3000/docs/cssConventions).

```sass
.auro-color-brand-tropical-400--20 {
  background-color: rgba($auro-color-brand-tropical-400, 0.2);
}
```

<div class="transparencyBlock auro-color-brand-tropical-400--20"> 20% transparency </div>

```sass
.auro-color-brand-tropical-400--50 {
  background-color: rgba($auro-color-brand-tropical-400, 0.5);
}
```

<div class="transparencyBlock auro-color-brand-tropical-400--50"> 50% transparency </div>

```sass
.auro-color-brand-tropical-400--80 {
  background-color: rgba($auro-color-brand-tropical-400, 0.8);
}
```

<div class="transparencyBlock auro-color-brand-tropical-400--80"> 80% transparency </div>

## Using CSS

Using CSS to create different opacity levels:

1. Using the CSS `rgba()` function
1. Using CSS custom properties

Using CSS to create opacity levels will not be compatible with browsers that do not [support custom properties](https://caniuse.com/#feat=css-variables). 

In this example use `var(--auro-rgb-color-brand-tropical-400)` to create some opacity examples. Notice the use of a modifier in the [naming convention](http://localhost:3000/docs/cssConventions).

Creating opacities from standard CSS is much like using Sass. There is a dependency on this CSS file from Design Tokens, `CSSCustomPropertiesColorRGB.css`. This file contains color token output with only the R,G,B values. E.g. `205, 230, 255`. Notice the custom prefix to the token name, `auro-rgb-...`

The examples below illustrate using these RGB tokens with the [RGBA CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#RGB_colors).

```css
.auro-rgb-color-brand-alpine-400--20 {
  background-color: rgba(var(--auro-rgb-color-brand-alpine-400), 0.2);
}
```

<div class="transparencyBlock auro-rgb-color-brand-alpine-400--20"> 20% transparency </div>

```css
.auro-rgb-color-brand-alpine-400--50 {
  background-color: rgba(var(--auro-rgb-color-brand-alpine-400), 0.5);
}
```

<div class="transparencyBlock auro-rgb-color-brand-alpine-400--50"> 50% transparency </div>

```css
.auro-rgb-color-brand-alpine-400--80 {
  background-color: rgba(var(--auro-rgb-color-brand-alpine-400), 0.8);
}
```

<div class="transparencyBlock auro-rgb-color-brand-alpine-400--80"> 80% transparency </div>

It can be noted, that this syntax will work inside a `.scss` file as well.

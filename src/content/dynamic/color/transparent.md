## Using transparent colors

While there are many color tokens available, there are none that specifically address levels of transparency. The best recommendation is to use either Sass or CSS to generate the opacity levels required in your UIs.

This table below illustrates the the use of `color-brand-alpine-400` and the different opacity types.

| Level | Applies | Output
|---|---|---
| 0.1 | 10% opacity | <div class="transparentSwatch auro-rgb-color-brand-alpine-400--10">  </div>
| 0.2 | 20% opacity | <div class="transparentSwatch auro-rgb-color-brand-alpine-400--20">  </div>
| 0.3 | 30% opacity | <div class="transparentSwatch auro-rgb-color-brand-alpine-400--30">  </div>
| 0.4 | 40% opacity | <div class="transparentSwatch auro-rgb-color-brand-alpine-400--40">  </div>
| 0.5 | 50% opacity | <div class="transparentSwatch auro-rgb-color-brand-alpine-400--50">  </div>
| 0.6 | 60% opacity | <div class="transparentSwatch auro-rgb-color-brand-alpine-400--60">  </div>
| 0.7 | 70% opacity | <div class="transparentSwatch auro-rgb-color-brand-alpine-400--70">  </div>
| 0.8 | 80% opacity | <div class="transparentSwatch auro-rgb-color-brand-alpine-400--80">  </div>
| 0.9 | 90% opacity | <div class="transparentSwatch auro-rgb-color-brand-alpine-400--90">  </div>

### Using Sass

Using Sass to create different opacity levels:

1. Using the `color-mix()` function
2. Using Sass Token variables

Using Sass `color-mix` to create opacity levels will output a final RGBA value. Support for `color-mix` can be seen in this [caniuse page](https://caniuse.com/mdn-css_types_color_color-mix).

In this example use `$ds-color-brand-alpine-400` to create some opacity examples. Notice the use of a modifier in the [naming convention](/css/conventions).

<div class="transparencyBlock auro-color-brand-alpine-400--50"> 50% transparency </div>

```sass
.auro-color-brand-tropical-400--50 {
  background-color: color-mix(in srgb, $ds-color-brand-alpine-400 90%, transparent);
}
```

### Using CSS

Using CSS to create different opacity levels:

1. Using the `color-mix()` function
2. Using CSS custom properties

Using CSS to create opacity levels will not be compatible with browsers that do not [support custom properties](https://caniuse.com/#feat=css-variables).

Also, support for `color-mix` can be seen in this [caniuse page](https://caniuse.com/mdn-css_types_color_color-mix).

In this example we use `var(--ds-color-brand-alpine-400)` to create some opacity examples. Notice the use of a modifier in the [naming convention](/css/conventions).

Creating opacities from standard CSS is much like using Sass. There is a dependency on this CSS file from design tokens, `CSSCustomPropertiesColorRGB.css`. This file contains color token output with only the R,G,B values. E.g. `205, 230, 255`. Notice the custom prefix to the token name, `auro-rgb-...`

The examples below illustrate using these RGB tokens with the [RGBA CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#RGB_colors).

Note, this syntax will work inside a `.scss` file.


<div class="transparencyBlock auro-rgb-color-brand-alpine-400--50"> 50% transparency </div>

```css
.auro-rgb-color-brand-alpine-400--50 {
  background-color: color-mix(in srgb, var(--ds-color-brand-alpine-400) 50%, transparent);
}
```

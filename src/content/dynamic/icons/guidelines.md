# Design guidelines

### Layout

Icons are created on a 20-pixel grid and exported on a 24-pixel artboard. An icon's content should be constrained to the “live area” of its grid. The outer padding is added to give sufficient display room.

![](/images/content/iconsDesign/icons_grid_new.png)

Icons are created on the grid using foundational shapes. Included in the grid template are a circle, square, and rectangle (both horizontal and vertical). Using these shapes as a guide allows icons of different proportions to have similar visual weights, and prevents individual icons from standing out too much or appearing too small next to the rest of the icon set.

![](/images/content/iconsDesign/icons_shapes.png)

### Size
Icons can be scaled to provide 3 sizes: small (16 pixels), medium (24 pixels), and large (32 pixels). The default size of an icon is medium (24 pixels), but designers are able to use small or large sizes if needed. Icons should not exceed the largest size available.  Follow the guidelines on the Illustrations page for larger sized imagery.

![](/images/content/iconsDesign/icons_sizes.png)

### Space

Clearance area around the icon is needed to allow for legibility and touch. When an actionable icon is used by itself, it should have a minimum touch target area of 40 pixels.

![](/images/content/iconsDesign/icons_clearance.png)

When mouse and keyboard are the primary input methods—or when icons are paired in-line with text—you can condense these measurements to accommodate denser layouts. Icon size should match the line height of the paired text element.

![](/images/content/iconsDesign/icons_pairing.png)

### Color

Icon colors change depending on their background, their importance on a page (e.g., primary, emphasis, accent, etc.) and the color theme being used. Refer to the [Color overview](/color/overview) for guidelines on color usage.

![](/images/content/iconsDesign/icons_color.png)


## Style

### Stroke

Our icons use a uniform stoke of 1.5 pixels for both interior and exterior lines.  Strokes have a 1.5-pixel rounded terminus or butt-cap.

![](/images/content/iconsDesign/Icons_Stroke.jpg)

## Radius

Our icons generally have a curved exterior characterized by a radius of 3 pixels. More detailed icons may call for a 2-pixel radius.

![](/images/content/iconsDesign/Icons_corners.jpg)

## Fill

Use filled icons in one of two cases.

* Use a filled icon with its outlined counterpart to represent active and inactive states.
* When used in isolation, filled icons can provide additional contrast against complex or noisy backgrounds. For example, a filled location pin on a map.

![](/images/content/iconsDesign/Icons_FilledUnfilled.jpg)

## Pixel offset
A 1.5-pixel stroke prevents snapping every anchor point to a pixel. Instead, our icons have edges and anchor points on a whole-pixel, half-pixel, or (in some cases) a quarter-pixel x, y coordinate.

![](/images/content/iconsDesign/icons_pixelalignment.png)

## Usage

Icons should be used with intent and purpose. In layouts, effective icon usage includes supporting copy, a link, or a navigation element. Only use the icons in the sizes and colors specified.

Avoid using icons solely as decorative elements. Do not scale an icon's size, adjust its stroke width or radius, or apply new colors and gradients. If you feel the icons aren't fulfilling a specific identified need, you can request a new or updated icon using the standard design system feedback channel.

The grid is a responsive, mobile first, fluid system that scales 12 columns across the viewport of a device.  The grid is based on a 16 pixel uniform spacing structure that's used to appropriately arrange content into aligned columns and rows.

## Anatomy

![](/images/content/grid/grid_breakpoint_anatomy.png)

## Breakpoints

See [breakpoint support in Web Core Style Sheets](https://alaskaairlines.github.io/WebCoreStyleSheets/#responsive)

Columns, gutters, and margins scale as the device and viewport increases or decreases.  Different breakpoints require either a fixed or fluid responsive grid.

* **Fluid grid:** A grid built using columns that are considered flexible.  When the screen size is changed, the widths of these columns will adjust proportionally.
* **Fixed grid:** A grid built with columns that have a defined width.  When the screen size is changed, the columns do not change their width.

![](/images/content/grid/grid_breakpoint_map.png)

|Breakpoint|Size|Device|Gutter|Spacing|TypeResponsive|
|---|---|---|---|---|---|
|XS (X-Small)|< 660px|Phone|16px|16px|Fluid|
|SM (Small)|≥ 660px|Tablet (portrait)|16px|16px|Fluid|
|MD (Medium)|≥ 1024px|Tablet (landscape)|32px|32px|Fluid|
|LG (Large)|≥ 1232px|Desktop|32px|32px|Fixed|

## Guidlines

Two grid sizes are available within the toolkit. Both grids are based on a 12 column structure, but have different gutter and margin sizes.

* For viewports larger than 1024 pixels, use the 32 pixel grid
* For viewports smaller than 1024 pixels, use the 16 pixel grid

![](/images/content/grid/Img_grid_sizes.png)

* When building a design to be accessed on multiple viewports, always start with a phone or XS grid size. This will help you establish content hierarchy, layout, and design feasibility that you can apply later to larger-sized viewports.
* Design within artboards that represent our target device sizes:

|Device|Device|Size|
|---|---|---|
|Phone|iPhone 11 Pro|375 x 812px|
|Tablet|11" iPad Pro (portrait)|834 x 1194px|
|Desktop||1440 x 900px|

### Behavior

* Avoid breaking alignment or slightly oversizing a container to add visual interest or emphasis
* Create relationships and hierarchy among content elements using the margins and gutters in the grid shared by the page layout

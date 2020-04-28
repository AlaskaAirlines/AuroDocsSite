# Design Guidlines

## Foundational

* Two grid sizes are available within the toolkit. Both grids are based on a 12 column structure, but have different gutter and margin sizes.
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

## Behavior

* Avoid breaking alignment or slightly oversizing a container to add visual interest or emphasis
* Create relationships and hierarchy among content elements using the margins and gutters in the grid shared by the page layout

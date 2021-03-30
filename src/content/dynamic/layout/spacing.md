Our spacing model is grounded in both math and visual psychology.  We achieve rhythm and hierarchy by grouping related elements, and building an appropriate distance between elements that are less closely related. Focus on optimizing screen real estate and prioritizing white space.

## Spacing concepts

### Box model

All HTML elements can be considered boxes. Based off of the HTML foundational box model.

![](/images/content/spacing/space_boxmodel.png)

## Margin

See [WC Style Sheets support](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-layout-mixin-auro_spacing)

Vertical - The vertical space between items

![](/images/content/spacing/space_horizontal.png)

Horizontal - The horizontal space between items

![](/images/content/spacing/space_vertical.png)

|Spacing|Size measurement|Token Variable|
|---|---|---|
|0|none|var(--auro-size-none)|
|2px|xxxs|var(--auro-size-xxxs)|
|4px|xxs|var(--auro-size-xxs)|
|8px|xs|var(--auro-size-xs)|
|12px|sm|var(--auro-size-sm)|
|16px|md|var(--auro-size-md)|
|24px|lg|var(--auro-size-lg)|
|32px|xl|var(--auro-size-xl)|
|48px|xxl|var(--auro-size-xxl)|
|64px|xxxl|var(--auro-size-xxxl)|

## Inset padding

See [WC Style Sheets support](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-layout-mixin-auro_inset)

Default – The padding around an element where all sides are equal

![](/images/content/spacing/space_inset_show.jpg)

|Spacing (t/b l/r)|Selector|
|---|---|
|2px / 2px|.util_insetXxxs|
|4px / 4px|.util_insetXxs|
|8px / 8px|.util_insetXs|
|12px / 12px|.util_insetSm|
|16px / 16px|.util_insetMd|
|24px / 24px|.util_insetLg|
|32px / 32px|.util_insetXl|
|48px / 48px|.util_insetXxl|
|64px / 64px|.util_insetXxxl|

Stretch – Increased padding above and below an element; the top and bottom are 50% more than the left and right sides

![](/images/content/spacing/space_insetstretch_show.jpg)

|Spacing (t/b l/r)|Selector|
|---|---|
|4px / 2px|.util_insetXxxs--stretch|
|6px / 4px|.util_insetXxs--stretch|
|12px / 8px|.util_insetXs--stretch|
|18px / 12px|.util_insetSm--stretch|
|24px / 16px|.util_insetMd--stretch|
|36px / 24px|.util_insetLg--stretch|
|48px / 32px|.util_insetXl--stretch|
|72px / 48px|.util_insetXxl--stretch|

Squish – Increased padding to left and right of an element; the left and right sides are 50% more than the top and bottom sides.

![](/images/content/spacing/space_insetsquish_show.jpg)

|Spacing (t/b l/r)|Selector|
|---|---|
|0px / 2px|.util_insetXxxs--squish|
|2px / 4px|.util_insetXxs--squish|
|4px / 8px|.util_insetXs--squish|
|6px / 12px|.util_insetSm--squish|
|8px / 16px|.util_insetMd--squish|
|12px / 24px|.util_insetLg--squish|
|16px / 32px|.util_insetXl--squish|
|24px / 48px|.util_insetXxl--squish|
|32px / 64px|.util_insetXxxl--squish|

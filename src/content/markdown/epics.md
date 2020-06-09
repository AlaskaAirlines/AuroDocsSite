# Epics

The following document contains information related to current Epics in play. 

## Project: Version Zero

[Github Issue](https://github.com/AlaskaAirlines/auro_docs/issues/98)

### Problem statement

For `X` number of primitives, components, and patterns, we have existing art/design. In some cases there are multiple versions that designers being manually shared – therefore, inconsistency is growing vs. what a design system is intended to do.

### Approach

For primitives, components, and patterns where there is existing art, the team must pick a version and create a development plan per said version. 

The team is responsible to articulate why the decision was made per this work item  (e.g., we value x over y so that ... )

- Documentation MVP is as follows
    - The design asset is to be added to the Auro Design System UI Kit as a symbol or template
    - The design asset is to be described using Auro specifications, e.g. design tokens
    - The coded asset is to be developed as a Web Component and is to meet all minimum standards as set forth by the Web Component generator template
    - The coded asset is to be added to the Doc Site where all relative information will be made available to both designers and developers
    - This is to include
        - Anatomy
        - Options/Variants/API
        - Behaviors
        - Usage guidelines / Dos and Don'ts

### Hypothesis 

"A single something out there is better than nothing or multiple."

Leveraging existing UI designs and patterns, the team can choose and release a version that is coded so that teams can implement it, with the intent that as the component is iterated upon, it is no burden to the developers to upgrade but to simply update.


### Issues related to Epic

| Issue | Exit Criteria | Status | 
|---|---|---
| [Basic data table (intro version) #18](https://github.com/AlaskaAirlines/auro_docs/issues/18) | This work is to be considered complete once the developed web component has been meet all standards set forth by the web component generator and has meet all design criteria | closed|
| [UI Kit Audit #86](https://github.com/AlaskaAirlines/auro_docs/issues/86) | This story will be considered complete once the UI Kit has been reviewed and there is a clear understanding of what is in there that has a dev component and what requires a dev plan.<br><br>Once that itemized list is complete, the final deliverable of this story is to discuss new dev plans for the identified components with the PDM. | wip |
|[Create standard table Sketch symbol #4](https://github.com/AlaskaAirlines/auro-table/issues/4)|This story will be considered complete once the developed asset has been properly documented as a design asset and communicated out to the team.|backlog
| [Dev: alerts #87](https://github.com/AlaskaAirlines/auro_docs/issues/87) | This work is to be considered complete once the developed web component has been meet all standards set forth by the web component generator and has meet all design criteria | backlog|
| [Breakup up IU KIt monolith 1/2 #92](https://github.com/AlaskaAirlines/auro_docs/issues/92) | This story will be considered complete once the UI KIt has an agreed-upon strategy for breaking up the larger single resource into smaller independent resources.<br><br>The scope of this story is NOT to break all the things up at once. The deliverable here is to identify a strategy moving forward and create the first individual library.<br><br>All the work related to this story will be addressed in a new branch until ready for release.| backlog |
| [UI Kit, breaking apart the monolith 2/2 #93](https://github.com/AlaskaAirlines/auro_docs/issues/93) | This story will be considered complete once the prerequisite of #92 is addressed, the next component and library was addressed and a plan to complete the work has been discussed and documented.|backlog |

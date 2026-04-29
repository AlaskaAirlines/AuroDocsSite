<auro-header level="1">Build a counter</auro-header>

For this project the goal is to make a counter web component using the <auro-hyperlink href="/getting-started/developers/generator/install" relative>Auro WC-Generator</auro-hyperlink> with <auro-hyperlink href="https://lit-element.polymer-project.org/" target="_blank">litElement</auro-hyperlink> and the Auro Design System. We understand that you may have little or no experience with using litElement, so it is our intention to make this as easy as possible.

The Auro WC-Generator is a ready-to-build development environment where all the dependencies are installed and a skeleton component has been created. There is nothing asked in this exercise that is not readily available.

<auro-header level="3">The feature spec</auro-header>

1. Counter starts at `0`
1. In the element there should be two button actions, \[ `+` \] and \[ `-` \], clicking the action should increase/decrease the value of the counter
1. The element should also be fully useable via keyboard actions

<auro-header level="3">Example</auro-header>

<auro-accordion noProfile lowProfile justifyLeft>
<span slot="trigger">See the video clip as an example</span>
<iframe
  width="560"
  height="315"
  src="https://coryrylan.com/assets/video/posts/2018-08-28-introduction-to-web-components/example-web-component.mp4"
  frameborder="0"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
  allowfullscreen>
</iframe>
</auro-accordion>

<auro-header level="2">Using the Auro WC-Generator</auro-header>

To use the generator, please read through the <auro-hyperlink href="/generator/install" relative>installer guide</auro-hyperlink> as well as our <auro-hyperlink href="/generator/api" relative>API documentation</auro-hyperlink>.

It will be informative to read through the <auro-hyperlink href="/generator/best-practice" relative>generator's best practices</auro-hyperlink> and <auro-hyperlink href="/generator/define-api" relative>API development</auro-hyperlink> documentation. As well as our <auro-hyperlink href="/css/conventions" relative>CSS guidelines</auro-hyperlink>, specifically the section on <auro-hyperlink href="/css/idiomatic-css" relative>idiomatic CSS</auro-hyperlink>. Lastly, please review our contributing guidelines documentation on <auro-hyperlink href="/contributing#:~:text=the%20outlined%20steps.-,Conventional%20Commits,-This%20project%20utilizes" relative>Conventional Commits</auro-hyperlink>.

<auro-header level="2">Expectations</auro-header>

The expectations for this project are the following:

1. Use the Generator to build out the specified web component
1. Use tooling from the Auro Design System to build out the UI of the web component<br>
  \- The UI in the video is NOT an expectation, only the functionality<br>
1. Meet the minimum test threshold when running `npm test`
1. Meet the JavaScript quality threshold when running `npm run linters`
1. Testing in IE is NOT required
1. Complete the `./demo/demo.md` document to visually review the web component
1. Update the `./README.md` document to reflect the new web component
1. Push completed project to GitHub for review

<auro-header level="2">Support</auro-header>

If you are in need of examples, please do not hesitate to review all the existing <auro-hyperlink href="/component-status" relative>Auro Web Components</auro-hyperlink>.

If you find yourself completely stuck, please do not hesitate to reach out to either Dale Sande or Geoff Rich. Your success in completing this exercise is our primary goal.

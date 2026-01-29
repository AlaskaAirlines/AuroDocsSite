import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-drawer/readme.md';

class AuroContent extends AuroComponentContent {

  // TODO: Remove once logic is updated in all components to handle JS examples on Install page
  initExamples() {
    const buttons = [
      document.querySelector("#openCustom"),
      document.querySelector("#closeCustom"),
    ];

    const drawer = document.querySelector("#customDrawer");

    if (buttons.every(button => button) && drawer) {
      drawer.triggerElement = buttons[0];

      buttons[1].addEventListener("click", () => {
      drawer.removeAttribute("open");
      });
    }
  }

  constructor(props) {
    super(props);

    this.markdownContent = content;

    setTimeout(() => {
      this.initExamples();
    }, 100);
  }
}

export default AuroContent;

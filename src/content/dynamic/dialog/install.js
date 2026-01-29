import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-dialog/readme.md';

class AuroContent extends AuroComponentContent {

  // TODO: Remove once logic is updated in all components to handle JS examples on Install page
  initExamples() {
    const buttons = [
      document.querySelector("#openCustom"),
      document.querySelector("#closeCustom"),
    ];

    const dialog = document.querySelector("#customDialog");

    if (buttons.every(button => button) && dialog) {
      buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (dialog.hasAttribute("open")) {
        dialog.removeAttribute("open");
        } else {
        dialog.setAttribute("open", true);
        }
      });
      });
    }
  }

  constructor(props) {
    super(props);

    this.markdownContent = content; 

    setTimeout(() => {
      this.initExamples();
    }, 100);
  };
}

export default AuroContent;

import AuroComponentContent from "~/functions/renderComponentPage";
import content from '@aurodesignsystem/auro-toast/readme.md';

class AuroContent extends AuroComponentContent {

  // TODO: Remove once logic is updated in all components to handle JS examples on Install page
  initExamples() {
    const btn = document.querySelector("#customToastBtn");
    const toast = document.querySelector("#customToast");

    btn.addEventListener("click", () => {
      if (!toast.hasAttribute("visible")) {
        toast.setAttribute("visible", true);
      }
    });
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

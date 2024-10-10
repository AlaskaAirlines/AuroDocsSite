import AuroComponentContent from "~/functions/renderComponentPage";

class AuroContent extends AuroComponentContent {
  constructor(props) {
    super(props);

    this.hasDOT = true;
    this.hasCustomElementRegistration = false;
  };
}

export default AuroContent;

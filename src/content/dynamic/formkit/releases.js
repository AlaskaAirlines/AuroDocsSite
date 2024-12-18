import AuroComponentContent from "~/functions/renderComponentPage";

class AuroContent extends AuroComponentContent {
  constructor(props) {
    super(props);

    this.hasApi = false;
    this.hasInstall = false;
  };
}

export default AuroContent;

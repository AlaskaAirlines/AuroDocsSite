import AuroComponentContent from "~/functions/renderDeveloperSetupPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/docs/devSetupLinux.md';
  };
}

export default AuroContent;

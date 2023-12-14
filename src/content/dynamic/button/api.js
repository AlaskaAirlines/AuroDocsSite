import AuroComponentContent from "functions/renderContentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.nameSpace = 'aurodesignsystem';
    this.componentName = 'button';
    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-button/master/demo/api.md';
  };
}

export default AuroContent;

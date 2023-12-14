import AuroComponentContent from "functions/renderContentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.nameSpace = 'aurodesignsystem';
    this.componentName = 'alert';
    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-alerts/master/docs/api.md';
  };
}

export default AuroContent;

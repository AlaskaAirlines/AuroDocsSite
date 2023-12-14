import AuroComponentContent from "functions/renderContentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-accordion/main/demo/api.md';
  };
}

export default AuroContent;

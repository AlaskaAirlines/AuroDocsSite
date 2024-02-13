import AuroComponentContent from "functions/renderCssGuidesPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/docs/customElementCss.md';
  };
}

export default AuroContent;

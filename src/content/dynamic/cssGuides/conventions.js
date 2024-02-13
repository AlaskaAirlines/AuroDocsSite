import AuroComponentContent from "functions/renderCssGuidesPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WebCoreStyleSheets/master/CONVENTIONS.md';
  };
}

export default AuroContent;

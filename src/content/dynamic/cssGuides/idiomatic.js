import AuroComponentContent from "~/functions/renderCssGuidesPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WebCoreStyleSheets/master/IDIOMATICCSS.md';
  };
}

export default AuroContent;

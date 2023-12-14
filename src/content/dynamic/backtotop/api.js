import AuroComponentContent from "functions/renderContentPage";

class AuroBacktotopApi extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.nameSpace = 'aurodesignsystem';
    this.componentName = 'backtotop';
    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-backtotop/main/demo/apiExamples.md';
  };
}

export default AuroBacktotopApi;

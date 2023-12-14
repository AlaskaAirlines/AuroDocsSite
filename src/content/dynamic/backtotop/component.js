import AuroComponentContent from "functions/renderContentPage";

class AuroBacktotop extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.nameSpace = 'aurodesignsystem';
    // this.name = 'backtotop';
    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-backtotop/master/demo/index.md';
  };

  // componentDidMount() {
    // registerCustomComponent('custom-backtotop', 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-backtotop@latest/dist/auro-accordion__bundled.js');
  // }
}

export default AuroBacktotop;

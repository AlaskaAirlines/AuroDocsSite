import AuroComponentContent from "functions/renderContentPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.nameSpace = 'aurodesignsystem';
    this.componentName = 'avatar';
    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-avatar/main/demo/demo.md';
  };

  componentDidMount() {
    // registerCustomComponent('custom-avatar', 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-avatar@latest/dist/auro-accordion__bundled.js');
  }
}

export default AuroContent;

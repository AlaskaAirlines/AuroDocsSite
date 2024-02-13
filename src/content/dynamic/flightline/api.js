import AuroComponentContent from "functions/renderComponentPage";
import { Nav } from './nav';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.nameSpace = 'alaskaairux';
    this.markdownContentPath = 'docs/api.md';
  };

  renderNav() {
    return (
      <Nav />
    );
  }
}

export default AuroContent;

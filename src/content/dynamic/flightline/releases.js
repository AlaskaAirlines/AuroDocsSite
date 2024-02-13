import AuroComponentContent from "functions/renderComponentPage";
import { Nav } from './nav';

class AuroContent extends AuroComponentContent {
  constructor(props) {
    super(props);

    this.nameSpace = 'alaskaairux';
  };

  renderNav() {
    return (
      <Nav />
    );
  }
}

export default AuroContent;

import AuroComponentContent from "functions/renderComponentPage";
import { Nav } from './nav';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContentPath = 'demo/demo.md';
  };

  renderNav() {
    return (
      <Nav />
    );
  }
}

export default AuroContent;

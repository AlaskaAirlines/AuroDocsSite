import AuroComponentContent from "~/functions/renderComponentPage";
import { Nav } from './nav';

class AuroContent extends AuroComponentContent {
  renderNav() {
    return (
      <Nav />
    );
  }
}

export default AuroContent;

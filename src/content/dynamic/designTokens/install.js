import AuroComponentContent from "functions/renderComponentPage";
import { Nav } from './nav';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/AuroDesignTokens/v4.3.1/README.md';
    this.packageName = '@aurodesignsystem/design-tokens';
    this.hasCustomElementRegistration = false;
  };

  renderNav() {
    return (
      <Nav />
    )
  }
}

export default AuroContent;

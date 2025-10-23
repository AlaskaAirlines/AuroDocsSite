import AuroComponentContent from "~/functions/renderComponentPage";
import ThemePage from './components/ThemePage';

class AuroContent extends AuroComponentContent {
  constructor(props) {
    super(props);
    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/AuroDesignTokens/master/readme.md';
    this.packageName = '@aurodesignsystem/design-tokens';
    this.hasCustomElementRegistration = false;
  };
  
  renderNav() {
    return (
      <ThemePage showFooter={false} renderSectionEl={false} />
    )
  }
}

export default AuroContent;
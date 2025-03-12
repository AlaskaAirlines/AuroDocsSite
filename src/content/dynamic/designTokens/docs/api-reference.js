import AuroComponentContent from "~/functions/renderComponentPage";
import ThemePage from '../components/ThemePage';

class DesignTokensDocsApiReference extends AuroComponentContent {
  constructor(props) {
    super(props);
    this.markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/AuroDesignTokens/master/docs/api-reference.md';
    this.packageName = '@aurodesignsystem/design-tokens';
    this.hasCustomElementRegistration = false;
  };
  
  renderNav() {
    return (
      <ThemePage showFooter={false} renderSectionEl={false} />
    )
  }
}

export default DesignTokensDocsApiReference;
import AuroComponentContent from "~/functions/renderIconsPage";
import content from '@alaskaairux/icons/docs/ways-to-use.md';

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = content;
  };
}

export default AuroContent;


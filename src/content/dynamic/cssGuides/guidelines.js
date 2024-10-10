import AuroComponentContent from "~/functions/renderCssGuidesPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = 'https://raw.githubusercontent.com/KittyGiraudel/sass-guidelines/main/pages/en/_tldr.md';
  };
}

export default AuroContent;

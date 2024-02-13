import AuroComponentContent from "functions/renderCssGuidesPage";

class AuroContent extends AuroComponentContent {

  constructor(props) {
    super(props);

    this.markdownContent = 'https://raw.githubusercontent.com/stylelint/stylelint/master/docs/user-guide/rules/list.md';
  };
}

export default AuroContent;

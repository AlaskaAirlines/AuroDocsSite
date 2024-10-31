import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';
import RenderRemoteMarkdown from '~/functions/RenderRemoteMarkdown';

class RenderMarkdownPage extends MarkdownPageWrapper {

  constructor(props) {
    super(props);

    this.markdownContentPath = undefined;
  };

  static get properties() {
    return {
      name: {
        type: String
      }
    };
  }

  convertToUpperCase(str) {
    if(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  }

  render() {
    return (
      <section className="auro_baseType">
        <section className="auro-markdown">
            <RenderRemoteMarkdown markdownUrl={this.markdownContent} />
        </section>
      </section>
    );
  }
}

export default RenderMarkdownPage;

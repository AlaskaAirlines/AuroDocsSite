import generator from './digital-personality.md'

export default class DigitalPersonality extends PagesWrapper {
  constructor(props) {
    super(props);
    this.state = {
      docsGenerator: null
    }
  };

  componentWillMount() {
    fetch(generator).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    })
  }

  render() {
    return (
      <section id="generator">
        <section className="ods-markdown">
          <ReactMarkdown source={this.state.docsGenerator} escapeHtml={false}/>
        </section>
      </section>
    );
  }
}

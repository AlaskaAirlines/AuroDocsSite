import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

const days = [...Array(14).keys()];

class AuroCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 3
    };
  }

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-carousel'];

    return `@alaskaairux/auro-carousel: ${dependencies}`;
  };

  render() {
    return (
      <section id="carousel">

        <Nav />

        <auro-header level="2" display="display">Carousel</auro-header>

        <p>Use auro-carousel to display a group of elements in a scrollable container. </p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>The <code>auro-carousel</code> element could be used in situations where users may:</p>
        <ul>
          <li>Scroll through multiple flight date options or "shoulder dates"</li>
          <li>Scroll through multiple images</li>
        </ul>

        <auro-header level="2" display="700">Carousel of flight options</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-carousel label="Flight options">
            {days.map((day, idx) => (
              <auro-pane 
                date={`2020-10-${(day + 1).toString().padStart(2, 0)}`}
                selected={this.state.selectedDay === idx ? true : undefined}
                onClick={() => {this.setState({selectedDay: idx})}}>
              </auro-pane>
            ))}
          </auro-carousel>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-carousel label="Flight options">
  <auro-pane date="2020-10-01"></auro-pane>
  <auro-pane date="2020-10-02"></auro-pane>
  <auro-pane date="2020-10-03"></auro-pane>
  <auro-pane date="2020-10-04" selected></auro-pane>
  <auro-pane date="2020-10-05"></auro-pane>
  <auro-pane date="2020-10-06"></auro-pane>
  <auro-pane date="2020-10-07"></auro-pane>
  <auro-pane date="2020-10-08"></auro-pane>
  <auro-pane date="2020-10-09"></auro-pane>
  <auro-pane date="2020-10-10"></auro-pane>
  <auro-pane date="2020-10-11"></auro-pane>
  <auro-pane date="2020-10-12"></auro-pane>
  <auro-pane date="2020-10-13"></auro-pane>
  <auro-pane date="2020-10-14"></auro-pane>
</auro-carousel>

<script>
  const panes = document.querySelectorAll('auro-pane');
  let selectedPane = document.querySelector('auro-pane[selected]');
  panes.forEach(pane => pane.addEventListener('click', () => {
    selectedPane.selected = false;
    pane.selected = true;
    selectedPane = pane;
  }));
</script>`}
        </Highlight>

        <auro-header level="2" display="700">Carousel of images</auro-header>
        <div className="demo--inline exampleWrapper">
        <auro-carousel label="Images">
          <img src="https://picsum.photos/200?random=1" alt="Random 1" />
          <img src="https://picsum.photos/200?random=2" alt="Random 2" />
          <img src="https://picsum.photos/200?random=3" alt="Random 3" />
          <img src="https://picsum.photos/200?random=4" alt="Random 4" />
          <img src="https://picsum.photos/200?random=5" alt="Random 5" />
          <img src="https://picsum.photos/200?random=6" alt="Random 6" />
          <img src="https://picsum.photos/200?random=7" alt="Random 7" />
          <img src="https://picsum.photos/200?random=8" alt="Random 8" />
          <img src="https://picsum.photos/200?random=9" alt="Random 9" />
          <img src="https://picsum.photos/200?random=10" alt="Random 10" />
          <img src="https://picsum.photos/200?random=11" alt="Random 11" />
          <img src="https://picsum.photos/200?random=12" alt="Random 12" />
          <img src="https://picsum.photos/200?random=13" alt="Random 13" />
        </auro-carousel>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-carousel label="Images">
  <img src="https://picsum.photos/200?random=1" alt="Random 1" />
  <img src="https://picsum.photos/200?random=2" alt="Random 2" />
  <img src="https://picsum.photos/200?random=3" alt="Random 3" />
  <img src="https://picsum.photos/200?random=4" alt="Random 4" />
  <img src="https://picsum.photos/200?random=5" alt="Random 5" />
  <img src="https://picsum.photos/200?random=6" alt="Random 6" />
  <img src="https://picsum.photos/200?random=7" alt="Random 7" />
  <img src="https://picsum.photos/200?random=8" alt="Random 8" />
  <img src="https://picsum.photos/200?random=9" alt="Random 9" />
  <img src="https://picsum.photos/200?random=10" alt="Random 10" />
  <img src="https://picsum.photos/200?random=11" alt="Random 11" />
  <img src="https://picsum.photos/200?random=12" alt="Random 12" />
  <img src="https://picsum.photos/200?random=13" alt="Random 13" />
</auro-carousel>`}
        </Highlight>


        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-carousel"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-carousel"
          code="https://github.com/AlaskaAirlines/auro-carousel/blob/master/src/auro-carousel.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroCarousel;

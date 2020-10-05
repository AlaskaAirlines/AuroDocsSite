import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

const days = [...Array(28).keys()];
const images = [...Array(100).keys()];

class AuroCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 3,
      anotherSelectedDay: 4
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

        <auro-header level="2" display="700">The setup</auro-header>
        <p>The following is an example script to scroll through the Carousel</p>

        <Highlight className='javascript afterCode'>
          {`
  const panes = document.querySelectorAll('auro-pane');
  let selectedPane = document.querySelector('auro-pane[selected]');

  panes.forEach(pane => pane.addEventListener('click', () => {
    selectedPane.selected = false;
    pane.selected = true;
    selectedPane = pane;
  }));

  `}
        </Highlight>

        <auro-header level="2" display="700">Default carousel with auro-pane element</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-carousel label="Flight options">
            {days.map((day, idx) => (
              <auro-pane
                key={day}
                date={`2020-01-${(day + 1).toString().padStart(2, 0)}`}
                selected={this.state.selectedDay === idx ? true : undefined}
                onClick={() => {this.setState({selectedDay: idx})}}>
              </auro-pane>
            ))}
          </auro-carousel>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-carousel label="Flight options">
  <auro-pane date="2020-01-01"></auro-pane>
  <auro-pane date="2020-01-02"></auro-pane>
  <auro-pane date="2020-01-03"></auro-pane>
  <auro-pane date="2020-01-04" selected></auro-pane>
  <auro-pane date="2020-01-05"></auro-pane>
  <auro-pane date="2020-01-06"></auro-pane>

  ...

</auro-carousel>`}
        </Highlight>

        <auro-header level="2" display="700">Carousel with static toggles</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-carousel label="Flight options" displayArrows>
            {days.map((day, idx) => (
              <auro-pane
                key={day}
                date={`2021-10-${(day + 1).toString().padStart(2, 0)}`}
                selected={this.state.anotherSelectedDay === idx ? true : undefined}
                onClick={() => {this.setState({anotherSelectedDay: idx})}}>
              </auro-pane>
            ))}
          </auro-carousel>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-carousel label="Flight options" displayArrows>
  <auro-pane date="2020-01-01"></auro-pane>
  <auro-pane date="2020-01-02"></auro-pane>
  <auro-pane date="2020-01-03"></auro-pane>
  <auro-pane date="2020-01-04" selected></auro-pane>
  <auro-pane date="2020-01-05"></auro-pane>
  <auro-pane date="2020-01-06"></auro-pane>

  ...

</auro-carousel>`}
        </Highlight>

        <auro-header level="2" display="700">Carousel of images w/custom scroll distance</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-carousel label="Images" scrollDistance="600">
            {images.map((image) => (
              <img src={`https://picsum.photos/200?random=${image}`} alt={`Random insert ${image}`} />
            ))}
          </auro-carousel>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-carousel label="Images" scrollDistance="600">
  <img src="https://picsum.photos/200?random=0" alt="Random insert 0" />
  <img src="https://picsum.photos/200?random=1" alt="Random insert 1" />
  <img src="https://picsum.photos/200?random=2" alt="Random insert 2" />
  <img src="https://picsum.photos/200?random=3" alt="Random insert 3" />
  <img src="https://picsum.photos/200?random=4" alt="Random insert 4" />
  <img src="https://picsum.photos/200?random=5" alt="Random insert 5" />
  <img src="https://picsum.photos/200?random=6" alt="Random insert 6" />
  <img src="https://picsum.photos/200?random=7" alt="Random insert 7" />
  <img src="https://picsum.photos/200?random=8" alt="Random insert 8" />
  <img src="https://picsum.photos/200?random=9" alt="Random insert 9" />
  <img src="https://picsum.photos/200?random=10" alt="Random insert 10" />

  ...

  <img src="https://picsum.photos/200?random=99" alt="Random insert 99" />
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

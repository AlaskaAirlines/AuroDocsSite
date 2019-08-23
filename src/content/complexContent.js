import React from 'react';
// import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
import "@alaskaairux/ods-button/dist/ods-button";
import "@alaskaairux/ods-inputoptions/dist/ods-inputoptions";
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';
import '../sass/App.scss';

function ComplexContent() {
  return (
    <section id="content">
      <h1 className="heading heading--max">Complex Content</h1>
      <div className="indention util_fontWeightLight util_type--secondary">
        <p>The following example will illustrate use-case scenarios involving multiple examples of the individual code above.</p>
      </div>

      <section className="exampleWrapper">
        <h1 className="heading heading--max">Milwaukee</h1>
        <p>Milwaukee's rich and diverse history begins with its original Algonquian and Siouan native tribes. French missionaries and fur traders first traveled through the area in the 17th and 18th centuries. American settlers and recent European immigrants quickly followed suit. In 1846, three smaller towns merged into one, creating Milwaukee. Since then, Milwaukee has become home to a variety of cultures and ethnicities, making it a truly unique American city. Immerse yourself in three different climates with a trip to the <ods-hyperlink inline href="/" target="_blank">Mitchell Park Horticultural Conservatory</ods-hyperlink>, affectionately called "The Domes." Take in both the art and architecture of the Milwaukee Art Museum. After admiring the museum's exhibits, visit the postmodern Quadracci Pavilion and wander through geometric Cudahy Gardens. Browse the hefty collection of all things Wisconsin at Boswell Book Company, and tour the Pabst Mansion and see how the beer baron and his family lived.</p>

        <ods-inputoptions id="rdo" horizontal type="radio" name="radios" label="Ever been to Milwaukee?" for="radio1" componentData='[
            { "id": "radio1", "value": "yes", "label": "Yes" },
            { "id": "radio2", "value": "no", "label": "No" }
          ]'></ods-inputoptions>

          <ods-inputoptions id="cbx" type="checkbox" name="radios" label="When I travel, I like to ..." for="cbx1" error="Oops, forgot to select a preference." componentData='[
            { "id": "cbx1", "value": "biking", "label": "Go biking" },
            { "id": "cbx2", "value": "hiking", "label": "Go hikng" },
            { "id": "cbx3", "value": "theater", "label": "See a show" }
          ]'></ods-inputoptions>

        <div className="ods-containedButtons">
          <ods-hyperlink role="button">cancel</ods-hyperlink>
          <ods-button outercontext>save</ods-button>
        </div>
      </section>







      <Highlight className='html afterCode'>
        {`
<section>
  <h1 className="heading heading--max">Milwaukee</h1>
  <p>Milwaukee's rich and diverse history begins with its original Algonquian and Siouan native tribes. French missionaries and fur traders first traveled through the area in the 17th and 18th centuries. American settlers and recent European immigrants quickly followed suit. In 1846, three smaller towns merged into one, creating Milwaukee. Since then, Milwaukee has become home to a variety of cultures and ethnicities, making it a truly unique American city. Immerse yourself in three different climates with a trip to the <ods-hyperlink inline href="/" target="_blank">Mitchell Park Horticultural Conservatory</ods-hyperlink>, affectionately called "The Domes." Take in both the art and architecture of the Milwaukee Art Museum. After admiring the museum's exhibits, visit the postmodern Quadracci Pavilion and wander through geometric Cudahy Gardens. Browse the hefty collection of all things Wisconsin at Boswell Book Company, and tour the Pabst Mansion and see how the beer baron and his family lived.</p>
  <ods-inputoptions id="rdo" horizontal type="radio" name="radios" label="Ever been to Milwaukee?" for="radio1" componentData='[
    { "id": "radio1", "value": "yes", "label": "Yes" },
    { "id": "radio2", "value": "no", "label": "No" }
  ]'></ods-inputoptions>
  <ods-inputoptions id="cbx" type="checkbox" name="radios" label="When I travel, I like to ..." for="cbx1" componentData='[
    { "id": "cbx1", "value": "biking", "label": "Go biking" },
    { "id": "cbx2", "value": "hiking", "label": "Go hikng" },
    { "id": "cbx3", "value": "theater", "label": "See a show" }
  ]'></ods-inputoptions>
  <div className="ods-containedButtons">
    <ods-hyperlink role="button">cancel</ods-hyperlink>
    <ods-button outercontext>save</ods-button>
  </div>
</section>
`}
      </Highlight>


    </section>
  );
}

export default ComplexContent;

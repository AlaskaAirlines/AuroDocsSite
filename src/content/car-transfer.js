import React from 'react';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import '../sass/App.scss';

function CarTransfer() {
  return (
    <section>
      <h1 className="heading heading--max">Car Transfer</h1>
      <div className="indention util_fontWeightLight util_type--secondary">
        <p>This is a basic representation of the elements illustrated in the Car Tranfer design comp.</p>
      </div>
      <hr/>

      <div className="">
        <h1 className="heading heading--lg heading--flushLeft">Car Rental</h1>
        <p>Book now for a great deal from the widest selection of car rental providers.</p>
        <ods-hyperlink href="/">Edit Search</ods-hyperlink>
        <ods-hyperlink href="/">View all cars</ods-hyperlink>
        <p>Newark International Airport New Jersy (EWR)</p>
        <p className="util_fontWeightLight util_type--secondary">Nov. 27, 2018, 11:45 am</p>
        <p>Kia Sorento</p>
        <p className="util_fontWeightLight util_type--secondary">or similar</p>
      </div>

      <Highlight className='html'>
        {
`<h1 className="heading heading--lg heading--flushLeft">Car Rental</h1>
<p>Book now for a great deal from the widest selection of car rental providers.</p>
<ods-hyperlink href="/">Edit Search</ods-hyperlink>
<ods-hyperlink href="/">View all cars</ods-hyperlink>
<p>Newark International Airport New Jersy (EWR)</p>
<p className="util_fontWeightLight util_type--secondary">Nov. 27, 2018, 11:45 am</p>
<p>Kia Sorento</p>
<p className="util_fontWeightLight util_type--secondary">or similar</p>`
        }
      </Highlight>
    </section>
  );
}

export default CarTransfer;

import React from 'react';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import Typography from './content/typography';
import Hyperlink from './content/hyperlink';
import Options from './content/options';
import Swatch from './content/swatch';
import ComplexContent from './content/complexContent';
import Button from './content/button';
import Footer from './components/footer';
import './sass/App.scss';
import './scripts/orion';

function App() {
  return (
    <main className="main-wrapper">

      <Swatch />

      <Typography />

      <Hyperlink />

      <Button />

      <Options />

      <ComplexContent />

      <Footer />
    </main>
  )
}

export default App;

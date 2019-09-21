import React from 'react';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import Typography from './content/typography';
import Hyperlink from './content/hyperlink';
import Options from './content/options';
import Swatch from './content/swatch';
import Icons from './content/icons';
import ComplexContent from './content/complexContent';
import Button from './content/button';
import Toast from './content/toast';
import Generator from './content/generator';
import Nav from './components/nav';
import Footer from './components/footer';

import './sass/App.scss';
import './scripts/orion';

function App() {
  return (
    <main className="main-wrapper">

      <Nav />

      <Swatch />

      <Typography />

      <Icons />

      <Hyperlink />

      <Button />

      <Options />

      <Toast />

      <ComplexContent />

      <Generator />

      <Footer />
    </main>
  )
}

export default App;

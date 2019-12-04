import React from 'react';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css';
import Typography from './content/typography';
import Hyperlink from './content/hyperlink';
import Options from './content/options';
import Swatch from './content/swatch';
import Icons from './content/icons';
import ComplexContent from './content/complexContent';
import Button from './content/button';
import Toast from './content/toast';
import Generator from './content/generator';
import Footer from './components/footer';
import WebCoreStyleSheets from './content/webcorestylesheets';
import SideNav from './components/side-nav';
import {
  A11yDocs,
  AltBuildDocs,
  BabelSupportDocs,
  BrowsersSupportDocs,
  CallbackDocs,
  ContributingDocs,
  CustomPropertiesDocs,
  FocusVisibleDocs,
  IsTouchingDocs,
  PollyfillDocs,
  TechDetailsDocs,
  TestsDocs,
  ReactDemoDocs,
  AngularDemoDocs,
  JavascriptDemoDocs
} from './content/docs';
import './style.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './sass/App.scss';
import './scripts/orion';

function App() {
  return (
    <main className="main-wrapper">
      <div className="wrapper">
        <Router>
          <SideNav />
          <Switch>
            <Route path="/swatch"><Swatch /></Route>
            <Route path="/typography"><Typography /></Route>
            <Route path="/icons"><Icons /></Route>
            <Route path="/hyperlink"><Hyperlink /></Route>
            <Route path="/button"><Button /></Route>
            <Route path="/options"><Options /></Route>
            <Route path="/toast"><Toast /></Route>
            <Route path="/complexcontent"><ComplexContent /></Route>
            <Route path="/generator"><Generator /></Route>
            <Route path="/webcorestylesheets"><WebCoreStyleSheets /></Route>
            <Route path="/A11yDocs"><A11yDocs /></Route>
            <Route path="/AltBuildDocs"><AltBuildDocs /></Route>
            <Route path="/BabelSupportDocs"><BabelSupportDocs /></Route>
            <Route path="/BrowsersSupportDocs"><BrowsersSupportDocs /></Route>
            <Route path="/CallbackDocs">	<CallbackDocs /></Route>
            <Route path="/ContributingDocs">	<ContributingDocs /></Route>
            <Route path="/CustomPropertiesDocs">	<CustomPropertiesDocs /></Route>
            <Route path="/FocusVisibleDocs">	<FocusVisibleDocs /></Route>
            <Route path="/IsTouchingDocs">	<IsTouchingDocs /></Route>
            <Route path="/PollyfillDocs">	<PollyfillDocs /></Route>
            <Route path="/TechDetailsDocs">	<TechDetailsDocs /></Route>
            <Route path="/TestsDocs">	<TestsDocs /></Route>
            <Route path="/ReactSetup">	<ReactDemoDocs /></Route>
            <Route path="/AngularSetup">	<AngularDemoDocs /></Route>
            <Route path="/JavascriptSetup">	<JavascriptDemoDocs /></Route>
            <Route path="/" ><Typography /></Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;

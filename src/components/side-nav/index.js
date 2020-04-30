import React, { useState, Fragment } from 'react';
import {
  Link
} from "react-router-dom";

export default function SideNav(props) {

  const [options, setOptions] = useState([
    {
      title: "Welcome to Auro",
      items: [
        { title: "Philosophy", route: "/philosophy" },
        { title: "Developers", route: "/gettingStarted/devs" }
      ]
    },
    {
      title: "Auro Core",
      items: [
        { title: "Colors", route: "/colors" },
        { title: "└ Design Guidlines", route: "/color/designGuidlines" },
        { title: "└ Digital Personality", route: "/color/digitalPersonality" },
        { title: "Design tokens", route: "/designTokens/tokens" },
        { title: "└ Deprecated", route: "/deprecated/tokens" },
        { title: "Typography", route: "/typography" },
        { title: "└ Design Guidlines", route: "/type/designGuidlines" },
        { title: "Icons", route: "/icons" },
        { title: "└ Design Guidlines", route: "/icon/designGuidlines" },
        { title: "Layout", route: "/layout" },
        { title: "Grid", route: "/grid" },
        { title: "└ Design Guidlines", route: "/gridDesignGuidlines" },
        { title: "└ Spacing", route: "/spacing" },
        { title: "Voice and Tone", route: "/voiceandtone" },
        { title: "WCSS", route: "/webcorestylesheets" }
      ]
    },
    {
      title: "Auro Components",
      items: [
        { title: "Button", route: '/auro-button' },
        { title: "└ docs", route: '/auroButtonDocs' },
        { title: "Hyperlink", route: '/auro-hyperlink' },
        { title: "└ docs", route: '/auroHyperlinkDocs' }
      ]
    },
    {
      title: "Orion Components",
      items: [
        { title: "Button", route: '/ods-button' },
        { title: "Hyperlink", route: '/ods-hyperlink' },
        { title: "Input Options", route: "/ods-options" },
        { title: "Toast", route: "/ods-toast" },
        { title: "InputText", route: "/ods-inputtext" }
      ]
    },
    {
      title: "Development Support",
      items: [
        { title: "React Setup", route: "/reactSetup" },
        { title: "Angular Setup", route: "/angularSetup" },
        { title: "Javascript Setup", route: "/javascriptSetup" },
        { title: "WC Generator", route: "/generator" }
      ]
    },
    {
      title: "All the docs",
      items: [
        { title: "A11y", route: "/docs/a11y" },
        { title: "Babel Support", route: "/docs/babelSupport" },
        { title: "Browsers Support", route: "/docs/browsersSupport" },
        { title: "Components", route: "/docs/components" },
        { title: "Contributing", route: "/docs/contributing" },
        { title: "Custom Properties", route: "/docs/customProperties" },
        { title: "Focus Visible", route: "/docs/focusVisible" },
        { title: "Is Touching", route: "/docs/isTouching" },
        { title: "Polyfill", route: "/docs/polyfill" },
        { title: "Tech Details", route: "/docs/techDetails" },
        { title: "Tests", route: "/docs/tests" },
      ]
    }
  ]);

  return (
    <nav className="sidenav">
      {options.map(s => (
        <Fragment key={Math.random()}>
          <p className="auro_heading auro_heading--400" key={s.title}>{s.title}</p>
            {s.items.map(o => (
              <Link key={o.route} to={o.route}
                className={o.active ? 'auro_hyperlink auro_hyperlink--active auro_hyperlink--nav' : 'auro_hyperlink auro_hyperlink--nav'}
                >
                <span
                  onClick={() => {
                    options.forEach(s => s.items.forEach(o => o.active = false));
                    o.active = true;
                    setOptions([...options]);
                  }}>

                  {o.title}
                </span>
              </Link>
            ))}
        </Fragment>
      ))}
    </nav>
  )
}

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
      ]
    },
    {
      title: "Getting Started",
      items: [
        { title: "Developers", route: "/gettingStarted/devs" },
        { title: "└ Generator", route: "/generator" }
      ]
    },
    {
      title: "Auro Core",
      items: [
        { title: "Design tokens", route: "/designTokens/tokens" },
        { title: "└ Docs", route: "/tokens/docs" },
        { title: "└ Deprecated", route: "/deprecated/tokens" },

        { title: "Color", route: "/colors" },
        // { title: "└ Design Guidlines", route: "/color/designGuidlines" },
        { title: "└ Digital Personality", route: "/color/digitalPersonality" },
        { title: "└ Transparancy", route: "/color/trasnparancy" },


        { title: "Typography", route: "/typography" },
        { title: "└ Design Guidlines", route: "/type/designGuidlines" },

        { title: "Icons", route: "/icons" },
        { title: "└ Design Guidlines", route: "/icon/designGuidlines" },

        // { title: "Layout", route: "/layout" },

        { title: "Grid", route: "/grid" },
        { title: "└ Design Guidlines", route: "/gridDesignGuidlines" },

        { title: "Spacing", route: "/spacing" },

        { title: "Voice and Tone", route: "/voiceandtone" }
      ]
    },
    {
      title: "Auro Components",
      items: [
        { title: "Button", route: '/auro-button' },
        { title: "└ Docs", route: '/auroButtonDocs' },
        { title: "Hyperlink", route: '/auro-hyperlink' },
        { title: "└ Docs", route: '/auroHyperlinkDocs' }
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
      title: "Dev resources",
      items: [
        // { title: "A11y", route: "/docs/a11y" },
        // { title: "Babel Support", route: "/docs/babelSupport" },
        { title: "Browsers Support", route: "/docs/browsersSupport" },
        { title: "Components", route: "/docs/components" },
        // { title: "Hover", route: "/docs/isTouching" },
        { title: "<slot> element", route: "/docs/slots" },
        // { title: "Tech overview", route: "/docs/techDetails" },
        { title: "Automated testing", route: "/docs/tests" },
        // { title: "why?", route: "/docs/why" }
      ]
    },
    {
      title: "Pollyfills",
      items: [
        { title: "Focus Visible", route: "/docs/focusVisible" },
        { title: "Webcomponentsjs", route: "/docs/polyfill" }
      ]
    },
    {
      title: "CSS resources",
      items: [
        { title: "CSS Conventions", route: "/docs/cssConventions"},
        { title: "CSS Custom Properties", route: "/docs/customProperties" },
        { title: "Touch support", route: "/docs/isTouching" },
        { title: "WC Style Sheets", route: "/webcorestylesheets" }
      ]
    },
    {
      title: "Process",
      items: [
        { title: "Compliance", route: "/docs/compliance" },
        { title: "Contributing", route: "/docs/contributing" },
        { title: "Governance", route: "/docs/governance" },
      ]
    },
    // {
    //   title: "Example projects",
    //   items: [
    //     { title: "React Setup", route: "/reactSetup" },
    //     { title: "Angular Setup", route: "/angularSetup" },
    //     { title: "Javascript Setup", route: "/javascriptSetup" }

    //   ]
    // }
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

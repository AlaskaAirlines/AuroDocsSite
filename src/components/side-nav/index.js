import React, { useState, Fragment } from 'react';
import {
  Link
} from "react-router-dom";

export default function SideNav(props) {

  const [options, setOptions] = useState([
    {
      title: "Welcome to Auro",
      items: [
        { title: "Philosophy", route: "/philosophy" }
      ]
    },
    {
      title: "Auro Core elements",
      items: [
        {
          title: "Colors and tokens",
          route: "/colors"
        },
        {
          title: "└ Digital Personality", route: "/digitalPersonality"
        },{
          title: "Typography",
          route: "/typography"
        },{
          title: "Icons",
          route: "/icons"
        },{
          title: "WCSS",
          route: "/webcorestylesheets"
        },{
          title: "Auro design tokens",
          route: "/designTokens/tokens"
        },{
          title: "Deprecated tokens",
          route: "/deprecated/tokens"
        }
      ]
    },
    {
      title: "Auro Components",
      items: [
        {
          title: "Hyperlink",
          route: '/auro-hyperlink'
        },
        {
          title: "└ docs",
          route: '/auroHyperlinkDocs'
        },
        {
          title: "Button",
          route: '/auro-button'
        },
        {
          title: "└ docs",
          route: '/auroButtonDocs'
        }
      ]
    },
    {
      title: "Orion Components",
      items: [
        {
          title: "Button",
          route: '/ods-button'
        },{
          title: "Hyperlink",
          route: '/ods-hyperlink'
        },{
          title: "Input Options",
          route: "/ods-options"
        },{
          title: "Toast",
          route: "/ods-toast"
        },{
          title: "InputText",
          route: "/ods-inputtext"
        }
      ]
    },
    {
      title: "Development Support",
      items: [
        {
          title: "React Setup",
          route: "/reactSetup"
        },{
          title: "Angular Setup",
          route: "/angularSetup"
        },{
          title: "Javascript Setup",
          route: "/javascriptSetup"
        },{
          title: "WC Generator",
          route: "/generator"
        }
      ]
    },
    {
      title: "All the docs",
      items: [
        { title: "A11y", route: "/a11yDocs" },
        { title: "Alt Build", route: "/altBuildDocs" },
        { title: "Babel Support", route: "/babelSupportDocs" },
        { title: "Browsers Support", route: "/browsersSupportDocs" },
        { title: "Contributing", route: "/contributingDocs" },
        { title: "Custom Properties", route: "/customPropertiesDocs" },
        { title: "Focus Visible", route: "/focusVisibleDocs" },
        { title: "Is Touching", route: "/isTouchingDocs" },
        { title: "Polyfill", route: "/polyfillDocs" },
        { title: "Tech Details", route: "/techDetailsDocs" },
        { title: "Tests", route: "/testsDocs" },
      ]
    }
  ]);

  return (
    <nav className="sidenav">
      {options.map(s => (
        <Fragment key={s.title}>
          <p className="heading heading--lg" key={s.title}>{s.title}</p>
            {s.items.map(o => (
              <Link key={o.title} to={o.route}
                className={o.active ? 'auro_hyperlink auro_hyperlink--active auro_hyperlink--nav util_displayBlock' : 'auro_hyperlink auro_hyperlink--nav util_displayBlock'}
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

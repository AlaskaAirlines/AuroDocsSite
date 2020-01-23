import React, { useState, Fragment } from 'react';
import './style.scss';
import {
  Link
} from "react-router-dom";

export default function SideNav(props) {

  const [options, setOptions] = useState([
    {
      title: "Auro Core elements",
      items: [
        {
          title: "Colors and tokens",
          route: "/colors"
        },{
          title: "Typography",
          route: "/Typography"
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
        }
      ]
    },
    {
      title: "Orion Components",
      items: [
        {
          title: "Button",
          route: '/button'
        },{
          title: "Hyperlink",
          route: '/hyperlink'
        },{
          title: "Input Options",
          route: "/options"
        },{
          title: "Toast",
          route: "/toast"
        }
      ]
    },
    {
      title: "Development Support",
      items: [
        {
          title: "React Setup",
          route: "/ReactSetup"
        },{
          title: "Angular Setup",
          route: "/AngularSetup"
        },{
          title: "Javascript Setup",
          route: "/JavascriptSetup"
        },{
          title: "WC Generator",
          route: "/generator"
        }
      ]
    },
    {
      title: "All the docs",
      items: [
        { title: "Digital Personality", route: "/DigitalPersonality" },
        { title: "A11y", route: "/A11yDocs" },
        { title: "Alt Build", route: "/AltBuildDocs" },
        { title: "Babel Support", route: "/BabelSupportDocs" },
        { title: "Browsers Support", route: "/BrowsersSupportDocs" },
        { title: "Callback", route: "/callbackdocs" },
        { title: "Contributing", route: "/ContributingDocs" },
        { title: "Custom Properties", route: "/CustomPropertiesDocs" },
        { title: "Focus Visible", route: "/FocusVisibleDocs" },
        { title: "Is Touching", route: "/IsTouchingDocs" },
        { title: "Pollyfill", route: "/PollyfillDocs" },
        { title: "Tech Details", route: "/TechDetailsDocs" },
        { title: "Tests", route: "/TestsDocs" },
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

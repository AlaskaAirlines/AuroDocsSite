import React, { useState, Fragment } from 'react';
import './style.scss';
import {
  Link
} from "react-router-dom";

export default function SideNav(props) {

  const [options, setOptions] = useState([
    {
      title: "Documentation",
      items: [
        {
          title: "Home",
          route: ""
        },
        { title: "A11y", route: "A11yDocs" },
        { title: "Alt Build", route: "AltBuildDocs" },
        { title: "Babel Support", route: "BabelSupportDocs" },
        { title: "Browsers Support", route: "BrowsersSupportDocs" },
        { title: "Callback", route: "callbackdocs" },
        { title: "Contributing", route: "ContributingDocs" },
        { title: "Custom Properties", route: "CustomPropertiesDocs" },
        { title: "Focus Visible", route: "FocusVisibleDocs" },
        { title: "Is Touching", route: "IsTouchingDocs" },
        { title: "New React Project Setup", route: "NewReactProjectSetupDocs" },
        { title: "Pollyfill", route: "PollyfillDocs" },
        { title: "Tech Details", route: "TechDetailsDocs" },
        { title: "Tests", route: "TestsDocs" },
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          route: 'button'
        },
        {
          title: "Hyperlink",
          route: 'hyperlink'
        },
        {
          title: "Toast",
          route: "toast"
        },
        {
          title: "Input Options",
          route: "options"
        },
        {
          title: "Swatch",
          route: "swatch"
        }
      ]
    },
    {
      title: "Other",
      items: [
        {
          title: "Typography",
          route: "typography"
        },
        {
          title: "Icons",
          route: "icons"
        },
        {
          title: "Generator",
          route: "generator"
        },
        {
          title: "Web Core Stylesheets",
          route: "webcorestylesheets"
        }
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
                className={o.active ? 'hyperlink hyperlink--active util_displayBlock' : 'hyperlink util_displayBlock'}
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

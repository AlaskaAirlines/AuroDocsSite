import React, { useState, Fragment } from 'react';
import { NavLink } from "react-router-dom";

export default function SideNav(props) {

  const [siteNav, setNav] = useState([
    {
      header: "Welcome to Auro",
      items: [
        { linkTitle: "Philosophy", route: "/philosophy", parent: true },
        { linkTitle: "Component status", route: "/component-status", parent: true },
        { linkTitle: "Planned Work", route: "/planned-work", parent: true },
      ]
    },
    {
      header: 'Getting Started',
      title: "General",
      items: [
        { linkTitle: "Overview", route: "/getting-started/developers/overview", parent: true },
        { linkTitle: "What is what?", route: "/getting-started/developers/what-is-what", parent: true },
        { linkTitle: "Design tokens", route: "/getting-started/developers/design-tokens", parent: true },
        { linkTitle: "Compliance", route: "/getting-started/developers/compliance", parent: true },
        { linkTitle: "Governance", route: "/getting-started/developers/governance", parent: true },
      ]
    },
    {
      title: "Developers",
      items: [
        { linkTitle: "Generator", route: "/getting-started/developers/generator", parent: true  },
        { linkTitle: "Contributing", route: "/getting-started/developers/contributing", parent: true },
      ]
    },
    {
      header: 'Guide',
      items: [
        { linkTitle: "Color", route: "/color/overview", parent: true },
        { linkTitle: "Typography", route: "/typography/overview", parent: true },
        { linkTitle: "Icons", route: "/icons/overview", parent: true },
        { linkTitle: "Layout", route: "/layout/grid", parent: true },
        { linkTitle: "Voice and Tone", route: "/core/voice-and-tone", parent: true }
      ]
    },
    {
      header: "Components",
      items: [
        { linkTitle: "Button", route: '/components/auro/button', parent: true },
        { linkTitle: "Hyperlink", route: '/components/auro/hyperlink', parent: true },
        { linkTitle: "Input Options", route: "/components/orion/inputOptions/", parent: true },
        { linkTitle: "InputText", route: "/components/orion/inputtext/", parent: true },
        { linkTitle: "Table", route: '/components/auro/table', parent: true },
      ]
    },
    {
      header: "Dev resources",
      items: [
        { linkTitle: "Release Dashboard", route: "/support/releases-by-sprint", parent: true },
        { linkTitle: "Automated testing", route: "/support/tests", parent: true },
        { linkTitle: "Browser Support", route: "/support/browsersSupport", parent: true },
        { linkTitle: "Polyfills", route: "/support/polyfills/focusvisible", parent: true},
        { linkTitle: "The <slot> element", route: "/support/slots", parent: true },
        // { linkTitle: "A11y", route: "/support/a11y" },
        // { linkTitle: "Babel Support", route: "/support/babelSupport" },
        // { linkTitle: "Tech overview", route: "/support/techDetails" },
        // { linkTitle: "why?", route: "/support/why" }
      ]
    },
    {
      title: "CSS",
      items: [
        { linkTitle: "CSS Conventions", route: "/support/css-conventions", parent: true},
        { linkTitle: "CSS Custom Properties", route: "/support/custom-properties", parent: true },
        { linkTitle: "WC Style Sheets", route: "/webcorestylesheets", parent: true },
        // { linkTitle: "Touch support", route: "/support/isTouching", parent: true },
      ]
    },
    {
      title: "Example projects",
      items: [
        { linkTitle: "React Setup", route: "/reactSetup" },
        // { linkTitle: "Angular Setup", route: "/angularSetup" },
        // { linkTitle: "Javascript Setup", route: "/javascriptSetup" }

      ]
    }
  ]);

  return (
    <nav className="sidenav">
      {siteNav.map(navBlock => (
        <Fragment key={Math.random()}>

          <section>
            {/* heading for nav block, uses first title in the object */}
            <p className="isHeading auro_heading auro_heading--500" key={navBlock.header}>{navBlock.header}</p>

            <p className="auro_heading auro_heading--300" key={navBlock.title}>{navBlock.title}</p>


              {/* TODO: Toggle HIDDEN attr on click to hide/show nav items within a block */}
              <div className="navBlock">
                {navBlock.items.map(link => (
                  <NavLink exact key={link.route} to={link.route} activeClassName="is-active"

                    className={`auro_hyperlink auro_hyperlink--nav ${link.active ? 'auro_hyperlink--active': ''} ${link.subNav ? 'auro_hyperlink--subNav': ''} ${link.parent ? 'auro_hyperlink--parent': ''}`}>

                    {/* onClick event that sets nav item state to isActive */}
                    <span
                      onClick={() => {
                        siteNav.forEach(navBlock => navBlock.items.forEach(link => link.active = false));
                        link.active = true;
                        setNav([...siteNav]);
                      }}>

                      {link.linkTitle}
                    </span>
                  </NavLink>
                ))}
              </div>
            </section>
        </Fragment>
      ))}
    </nav>
  )
}
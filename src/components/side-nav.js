import React, { useState, Fragment } from 'react';
import { NavLink } from "react-router-dom";

export default function SideNav(props) {

  const [siteNav, setNav] = useState([
    {
      header: "Welcome to Auro",
      items: [
        { linkTitle: "Philosophy", route: "/philosophy", parent: true },
        { linkTitle: "Status", route: "/component-status", parent: true },
        { linkTitle: "Releases", route: "/support/releases-summary", parent: true },
        { linkTitle: "Support", route: "/auro-support", parent: true },
      ]
    },
    {
      header: 'Guide',
      items: [
        { linkTitle: "Color", route: "/color/overview", parent: true },
        { linkTitle: "Typography", route: "/typography/overview", parent: true },
        { linkTitle: "Icons", route: "/icons", parent: true },
        { linkTitle: "Layout", route: "/layout/grid", parent: true },
        { linkTitle: "Voice and Tone", route: "/core/voice-and-tone", parent: true }
      ]
    },
    {
      header: 'Getting Started',
      title: "- General",
      items: [
        { linkTitle: "Overview", route: "/getting-started/developers/overview", parent: true },
        { linkTitle: "Common defs", route: "/getting-started/developers/common-definitions", parent: true },
        { linkTitle: "Design tokens", route: "/getting-started/developers/design-tokens", parent: true },
        { linkTitle: "Compliance", route: "/getting-started/developers/compliance", parent: true },

        // revise document to speak to AuroLabs
        { linkTitle: "Governance", route: "/getting-started/developers/governance", parent: true },

        // { linkTitle: "Design Handoff", route: "/getting-started/handoff", parent: true }, -- REMOVE files from repo
      ]
    },
    {
      title: "- Developers",
      items: [
        { linkTitle: "WC Generator", route: "/getting-started/developers/generator/install", parent: true  },
        { linkTitle: "Contributing", route: "/contributing", parent: true },

        // current document lives in Auro repo
        // Revise content; "component element variant/modifier"
        { linkTitle: "CSS Conventions", route: "/support/css-conventions", parent: true},

        { linkTitle: "WC Style Sheets", route: "/webcorestylesheets", parent: true },
      ]
    },
    {
      header: "Components",
      items: [
        { linkTitle: "Accordion", route: '/components/auro/accordion', parent: true },
        { linkTitle: "Alerts", route: '/components/auro/alerts', parent: true },
        { linkTitle: "Avatar", route: '/components/auro/avatar', parent: true },
        { linkTitle: "Badge", route: '/components/auro/badge', parent: true },
        { linkTitle: "Button", route: '/components/auro/button', parent: true },
        { linkTitle: "Card", route: '/components/auro/card', parent: true },
        { linkTitle: "Carousel", route: '/components/auro/carousel', parent: true },
        { linkTitle: "Checkbox", route: '/components/auro/checkbox', parent: true },
        { linkTitle: "Date/Time", route: '/components/auro/datetime', parent: true },
        { linkTitle: "Flight", route: '/components/auro/flight', parent: true },
        { linkTitle: "Flightline", route: '/components/auro/flightline', parent: true },
        { linkTitle: "Header", route: '/components/auro/header', parent: true },
        { linkTitle: "Hyperlink", route: '/components/auro/hyperlink', parent: true },
        { linkTitle: "Icon", route: '/components/auro/icon', parent: true },
        { linkTitle: "Input", route: '/components/auro/input', parent: true },
        { linkTitle: "Interruption", route: '/components/auro/interruption', parent: true },
        { linkTitle: "Loader", route: '/components/auro/loader', parent: true },
        { linkTitle: "Lockup", route: '/components/auro/lockup', parent: true },
        { linkTitle: "Pane", route: "/components/auro/pane/", parent: true },
        { linkTitle: "Popover", route: '/components/auro/popover', parent: true },
        { linkTitle: "Radio Button", route: '/components/auro/radio', parent: true },
        { linkTitle: "Table", route: '/components/auro/table', parent: true },
        // { linkTitle: "Toast", route: '/components/orion/toast', parent: true } -- REMOVE files from repo
      ]
    },
    {
      header: "Dev resources",
      items: [
        { linkTitle: "Automated testing", route: "/support/tests", parent: true },
        { linkTitle: "Browser Support", route: "/support/browsersSupport", parent: true },
        { linkTitle: "CSS Custom Properties", route: "/support/custom-properties", parent: true },
        { linkTitle: "ShadyCSS", route: "/support/shadycss", parent: true },
        { linkTitle: "Polyfills", route: "/support/polyfills/focusvisible", parent: true},
        { linkTitle: "The <slot> element", route: "/support/slots", parent: true },
        { linkTitle: "a11y Statement", route: "/a11y-statement", parent: true },
        // { linkTitle: "Babel Support", route: "/support/babelSupport" }, -- REMOVE files from repo
        // { linkTitle: "Tech overview", route: "/support/techDetails" }, -- REMOVE files from repo
        // { linkTitle: "why?", route: "/support/why" } -- REMOVE files from repo
      ]
    },
    {
      title: "- Example projects",
      items: [
        { linkTitle: "React Setup", route: "/reactSetup", parent: true},
        // { linkTitle: "Angular Setup", route: "/angularSetup" }, -- REVISE demo
        { linkTitle: "Javascript Setup", route: "/javascriptSetup", parent: true},
        { linkTitle: "Svelte Setup", route: "/svelteSetup", parent: true}

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
                  <NavLink key={link.route} to={link.route} activeClassName="is-active"

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

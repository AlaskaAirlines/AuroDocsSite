import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

export default function SideNav(props) {

  const [siteNav, setNav] = useState([
    {
      header: "Welcome to Auro",
      items: [
        { linkTitle: "Philosophy", route: "/philosophy" },
      ]
    },
    {
      header: 'Getting Started',
      title: "Developers",
      items: [
        { linkTitle: "Overview", route: "/getting-started/developers/overview", parent: true },
        { linkTitle: "Generator", route: "/getting-started/developers/generator", parent: true  },
        { linkTitle: "Design tokens", route: "/getting-started/developers/design-tokens", parent: true },
        { linkTitle: "- install", route: "/getting-started/developers/design-tokens/install", subNav: true },
        { linkTitle: "- deprecated", route: "/getting-started/developers/design-tokens/deprecated", subNav: true },
        { linkTitle: "Compliance", route: "/getting-started/developers/compliance", parent: true },
        { linkTitle: "Contributing", route: "/getting-started/developers/contributing", parent: true },
        { linkTitle: "Governance", route: "/getting-started/governance", parent: true },
      ]
    },
    {
      header: 'Guide',
      title: "Color",
      items: [
        { linkTitle: "Overview", route: "/core/color/digital-personality", parent: true },
        { linkTitle: "Usage", route: "/core/color", parent: true },
      ]
    },
    {
      title: 'Typography',
      items: [
        { linkTitle: "Overview", route: "/core/typography/guidlines", parent: true },
        { linkTitle: "Usage", route: "/core/typography", parent: true },
        { linkTitle: "Deprecated", route: "/core/typography/deprecated", parent: true }
      ]
    },
    {
      title: 'Icons',
      items: [
        { linkTitle: "Overview", route: "/core/auro-icons/guidlines", parent: true },
        { linkTitle: "Usage", route: "/core/auro-icons", parent: true },
        { linkTitle: "Library", route: "/core/auro-icons/info", parent: true },

      ]
    },
    {
      title: 'Layout',
      items: [
        { linkTitle: "Grid", route: "/core/grid", parent: true },
        { linkTitle: "Spacing", route: "/core/spacing", parent: true },
        // { linkTitle: "Layout", route: "/core/layout" },
      ]
    },
    {
      items: [
        { linkTitle: "Voice and Tone", route: "/core/voice-and-tone", parent: true }
      ]
    },
    {
      title: "Components",
      items: [
        { linkTitle: "Button", route: '/components/auro/button', parent: true },
        { linkTitle: "- info", route: '/components/auro/button/info', subNav: true },
        { linkTitle: "- api", route: '/components/auro/button/api', subNav: true },
        { linkTitle: "Hyperlink", route: '/components/auro/hyperlink', parent: true },
        { linkTitle: "- info", route: '/components/auro/hyperlink/info', subNav: true }
      ]
    },
    {
      title: "Legacy Components",
      items: [
        { linkTitle: "Button", route: '/components/orion/button', parent: true },
        { linkTitle: "- info", route: '/components/orion/button/info', subNav: true },
        { linkTitle: "- api", route: '/components/orion/button/api', subNav: true },
        { linkTitle: "Hyperlink", route: '/components/orion/hyperlink', parent: true },
        { linkTitle: "Input Options", route: "/components/orion/options", parent: true },
        // { linkTitle: "Toast", route: "/components/orion/toast" },
        { linkTitle: "InputText", route: "/components/orion/inputtext", parent: true }
      ]
    },
    {
      title: "Dev resources",
      items: [
        // { linkTitle: "A11y", route: "/support/a11y" },
        // { linkTitle: "Babel Support", route: "/support/babelSupport" },
        { linkTitle: "Component status", route: "/support/components", parent: true },
        { linkTitle: "The <slot> element", route: "/support/slots", parent: true },
        { linkTitle: "Automated testing", route: "/support/tests", parent: true },
        { linkTitle: "Browser Support", route: "/support/browsersSupport", parent: true },
        // { linkTitle: "Tech overview", route: "/support/techDetails" },
        // { linkTitle: "why?", route: "/support/why" }
      ]
    },
    {
      title: "Example projects",
      items: [
        { linkTitle: "React Setup", route: "/reactSetup" },
        // { linkTitle: "Angular Setup", route: "/angularSetup" },
        // { linkTitle: "Javascript Setup", route: "/javascriptSetup" }

      ]
    },
    {
      title: "Pollyfills",
      items: [
        { linkTitle: "Focus Visible", route: "/support/focusVisible", parent: true},
        { linkTitle: "Webcomponentsjs", route: "/support/polyfill", parent: true }
      ]
    },
    {
      title: "CSS",
      items: [
        { linkTitle: "CSS Conventions", route: "/support/css-conventions", parent: true},
        { linkTitle: "CSS Custom Properties", route: "/support/custom-properties", parent: true },
        // { linkTitle: "Touch support", route: "/support/isTouching", parent: true },
        { linkTitle: "WC Style Sheets", route: "/webcorestylesheets", parent: true }
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
                  <Link key={link.route} to={link.route}

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
                  </Link>
                ))}
              </div>
            </section>
        </Fragment>
      ))}
    </nav>
  )
}

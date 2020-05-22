import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

export default function SideNav(props) {

  const [siteNav, setNav] = useState([
    {
      title: "Welcome to Auro",
      items: [
        { linkTitle: "Philosophy", route: "/philosophy" },
      ]
    },
    {
      title: "Getting Started",
      items: [
        { linkTitle: "Developers", route: "/gettingStarted/devs" },
        { linkTitle: "└ Generator", route: "/generator" }
      ]
    },
    {
      title: "Auro Core",
      items: [
        { linkTitle: "Design tokens", route: "/designTokens/tokens" },
        { linkTitle: "└ Docs", route: "/tokens/docs" },
        { linkTitle: "└ Deprecated", route: "/deprecated/tokens" },

        { linkTitle: "Color", route: "/colors" },
        // { linkTitle: "└ Design Guidlines", route: "/color/designGuidlines" },
        { linkTitle: "└ Digital Personality", route: "/color/digitalPersonality" },
        { linkTitle: "└ Transparancy", route: "/color/trasnparancy" },


        { linkTitle: "Typography", route: "/typography" },
        { linkTitle: "└ Design Guidlines", route: "/type/designGuidlines" },

        { linkTitle: "Icons", route: "/auroIcons" },
        { linkTitle: "└ Design Guidlines", route: "/icon/designGuidlines" },

        // { linkTitle: "Layout", route: "/layout" },

        { linkTitle: "Grid", route: "/grid" },
        { linkTitle: "└ Design Guidlines", route: "/gridDesignGuidlines" },

        { linkTitle: "Spacing", route: "/spacing" },

        { linkTitle: "Voice and Tone", route: "/voiceandtone" }
      ]
    },
    {
      title: "Auro Components",
      items: [
        { linkTitle: "Button", route: '/auro-button' },
        { linkTitle: "└ Docs", route: '/auroButtonDocs' },
        { linkTitle: "Hyperlink", route: '/auro-hyperlink' },
        { linkTitle: "└ Docs", route: '/auroHyperlinkDocs' }
      ]
    },
    {
      title: "Orion Components",
      items: [
        { linkTitle: "Button", route: '/ods-button' },
        { linkTitle: "Hyperlink", route: '/ods-hyperlink' },
        { linkTitle: "Input Options", route: "/ods-options" },
        // { linkTitle: "Toast", route: "/ods-toast" },
        { linkTitle: "InputText", route: "/ods-inputtext" }
      ]
    },
    {
      title: "Dev resources",
      items: [
        // { linkTitle: "A11y", route: "/docs/a11y" },
        // { linkTitle: "Babel Support", route: "/docs/babelSupport" },
        { linkTitle: "Browsers Support", route: "/docs/browsersSupport" },
        { linkTitle: "Components", route: "/docs/components" },
        { linkTitle: "<slot> element", route: "/docs/slots" },
        // { linkTitle: "Tech overview", route: "/docs/techDetails" },
        { linkTitle: "Automated testing", route: "/docs/tests" },
        // { linkTitle: "why?", route: "/docs/why" }
      ]
    },
    {
      title: "Pollyfills",
      items: [
        { linkTitle: "Focus Visible", route: "/docs/focusVisible" },
        { linkTitle: "Webcomponentsjs", route: "/docs/polyfill" }
      ]
    },
    {
      title: "CSS resources",
      items: [
        { linkTitle: "CSS Conventions", route: "/docs/cssConventions"},
        { linkTitle: "CSS Custom Properties", route: "/docs/customProperties" },
        { linkTitle: "Touch support", route: "/docs/isTouching" },
        { linkTitle: "WC Style Sheets", route: "/webcorestylesheets" }
      ]
    },
    {
      title: "Process",
      items: [
        { linkTitle: "Compliance", route: "/docs/compliance" },
        { linkTitle: "Contributing", route: "/docs/contributing" },
        { linkTitle: "Governance", route: "/docs/governance" },
      ]
    },
    // {
    //   title: "Example projects",
    //   items: [
    //     { linkTitle: "React Setup", route: "/reactSetup" },
    //     { linkTitle: "Angular Setup", route: "/angularSetup" },
    //     { linkTitle: "Javascript Setup", route: "/javascriptSetup" }

    //   ]
    // }
  ]);

  return (
    <nav className="sidenav">
      {siteNav.map(navBlock => (
        <Fragment key={Math.random()}>

          <section>
            {/* heading for nav block, uses first title in the object */}
            <p className="auro_heading auro_heading--400 isHeading" key={navBlock.title}>{navBlock.title}</p>


              {/* TODO: Toggle HIDDEN attr on click to hide/show nav items within a block */}
              <div className="nav">
                {navBlock.items.map(link => (
                  <Link key={link.route} to={link.route}
                    className={link.active ? 'auro_hyperlink auro_hyperlink--active auro_hyperlink--nav isActive' : 'auro_hyperlink auro_hyperlink--nav isLink'}>

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

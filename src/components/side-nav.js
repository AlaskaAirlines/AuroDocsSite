import React, { useState, Fragment } from 'react';
import { NavLink } from "react-router-dom";

export default function SideNav(props) {

  const [siteNav, setNav] = useState([
    {
      header: "Welcome to Auro",
      items: [
        { linkTitle: "Design philosophy", route: "/design-philosophy", parent: true },
        { linkTitle: "Status", route: "/component-status", parent: true },
        { linkTitle: "Releases", route: "/support/releases-by-sprint", parent: true },
        { linkTitle: "Support", route: "/auro-support", parent: true },
        // { linkTitle: "auroLabs", route: "/aurolabs", parent: true },
      ]
    },
    {
      header: 'Getting started',
      items: [
        { linkTitle: "Engineering Start Guide", route: "/getting-started/developers", parent: true  },
        { linkTitle: "Developer support", route: "/developer-setup/npm", parent: true  },
        { linkTitle: "Design tokens", route: "/getting-started/developers/design-tokens", parent: true },
        { linkTitle: "WCSS", route: "/webcorestylesheets/features", parent: true },
        { linkTitle: "Contributing", route: "/contributing", parent: true },
        { linkTitle: "WC-Generator", route: "/generator", parent: true  },
        { linkTitle: "CSS guidelines", route: "/css/conventions", parent: true },
        { linkTitle: "Common defs", route: "/common-defs", parent: true },
        { linkTitle: "Auro compliance", route: "/getting-started/developers/compliance", parent: true },
        { linkTitle: "Formkit", route: "/components/auro/formkit", parent: true },
      ]
    },
    {
      header: 'Guide',
      items: [
        { linkTitle: "Color", route: "/color/overview", parent: true },
        { linkTitle: "Typography", route: "/typography/overview", parent: true },
        { linkTitle: "Icons", route: "/icons", parent: true },
        // { linkTitle: "Layout", route: "/layout/grid", parent: true },
        { linkTitle: "Voice and tone", route: "/core/voice-and-tone", parent: true }
      ]
    },
    {
      header: "Components",
      items: [
        { linkTitle: "Accordion", route: '/components/auro/accordion', parent: true },
        { linkTitle: "Alert", route: '/components/auro/alert', parent: true },
        { linkTitle: "Avatar", route: '/components/auro/avatar', parent: true },
        { linkTitle: "Background", route: '/components/auro/background', parent: true },
        { linkTitle: "Back to Top", route: '/components/auro/backtotop', parent: true },
        { linkTitle: "Badge", route: '/components/auro/badge', parent: true },
        { linkTitle: "Banner", route: '/components/auro/banner', parent: true },
        { linkTitle: "Button", route: '/components/auro/button', parent: true },
        { linkTitle: "Card", route: '/components/auro/card', parent: true },
        { linkTitle: "Carousel", route: '/components/auro/carousel', parent: true },
        { linkTitle: "Checkbox", route: '/components/auro/checkbox', parent: true },
        { linkTitle: "Combobox", route: '/components/auro/combobox', parent: true },
        { linkTitle: "Counter", route: '/components/auro/counter', parent: true },
        { linkTitle: "Datepicker", route: '/components/auro/datepicker', parent: true },
        { linkTitle: "Datetime", route: '/components/auro/datetime', parent: true },
        { linkTitle: "Dialog", route: '/components/auro/dialog', parent: true },
        { linkTitle: "Drawer", route: '/components/auro/drawer', parent: true },
        { linkTitle: "Dropdown", route: '/components/auro/dropdown', parent: true },
        { linkTitle: "Flight", route: '/components/auro/flight', parent: true },
        { linkTitle: "Flightline", route: '/components/auro/flightline', parent: true },
        { linkTitle: "Form", route: '/components/auro/form', parent: true },
        { linkTitle: "Header", route: '/components/auro/header', parent: true },
        { linkTitle: "Hyperlink", route: '/components/auro/hyperlink', parent: true },
        { linkTitle: "Icon", route: '/components/auro/icon', parent: true },
        { linkTitle: "Input", route: '/components/auro/input', parent: true },
        { linkTitle: "Loader", route: '/components/auro/loader', parent: true },
        { linkTitle: "Lockup", route: '/components/auro/lockup', parent: true },
        { linkTitle: "Menu", route: '/components/auro/menu', parent: true },
        { linkTitle: "Nav", route: '/components/auro/nav', parent: true },
        { linkTitle: "Pane", route: "/components/auro/pane/", parent: true },
        { linkTitle: "Popover", route: '/components/auro/popover', parent: true },
        { linkTitle: "Radio", route: '/components/auro/radio', parent: true },
        { linkTitle: "Select", route: '/components/auro/select', parent: true },
        { linkTitle: "Sidenav", route: '/components/auro/sidenav', parent: true },
        { linkTitle: "Skeleton", route: '/components/auro/skeleton', parent: true },
        { linkTitle: "Slideshow", route: '/components/auro/slideshow', parent: true },
        { linkTitle: "Table", route: '/components/auro/table', parent: true },
        { linkTitle: "Toast", route: '/components/auro/toast', parent: true },
      ]
    },
    {
      header: "CSS",
      items: [
        { linkTitle: "ShadyCSS", route: "/support/shadycss", parent: true },
        { linkTitle: "CSS custom properties", route: "/support/custom-properties", parent: true },
      ]
    },
    {
      header: "Dev resources",
      items: [
        { linkTitle: "Automated testing", route: "/support/tests", parent: true },
        { linkTitle: "Browser support", route: "/support/browsersSupport", parent: true },
        { linkTitle: "Node support", route: "/node-support", parent: true },
        { linkTitle: "Polyfills", route: "/support/polyfills/focusvisible", parent: true},
        { linkTitle: "The <slot> element", route: "/support/slots", parent: true },
        { linkTitle: "Accessibility statement", route: "/a11y-statement", parent: true },
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
                  <NavLink key={link.route} to={link.route} 

                    className={`hyperlink hyperlink--nav ${link.active ? 'hyperlink--active': ''} ${link.subNav ? 'hyperlink--subNav': ''} ${link.parent ? 'hyperlink--parent': ''}`}>

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

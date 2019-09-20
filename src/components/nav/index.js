import React from 'react';
import { Link } from "react-scroll";
import './style.scss';

function Header() {
  return (
    <nav className="mainSiteNav" id="mainNav">
      <Link className="hyperlink" activeClass="active" to="typography" spy={true} smooth={true} offset={-50} duration={2000}>
        Typography
      </Link>

      <Link className="hyperlink" activeClass="active" to="buttons" spy={true} smooth={true} offset={-50} duration={2000}>
        Buttons
      </Link>

      <Link className="hyperlink" activeClass="active" to="icons" spy={true} smooth={true} offset={-50} duration={2000}>
        Icons
      </Link>

      <Link className="hyperlink" activeClass="active" to="hyperlinks" spy={true} smooth={true} offset={-50} duration={2000}>
        Hyperlinks
      </Link>

      <Link className="hyperlink" activeClass="active" to="inputOptions" spy={true} smooth={true} offset={-50} duration={2000}>
        Input Options
      </Link>

      <Link className="hyperlink" activeClass="active" to="generator" spy={true} smooth={true} offset={-50} duration={2000}>
        WC Generator
      </Link>

      <Link className="floatingTopLink" activeClass="active" to="mainNav" spy={true} smooth={true} offset={-50} duration={2000}>
        Back To Top
      </Link>
    </nav>
  );
}

export default Header;

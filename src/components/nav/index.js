import React, { Component } from "react";
import { Link } from "react-scroll";
import './style.scss';

let lastScrollY = 0;
let ticking = false;

class Nav extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  option = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        console.log(lastScrollY);

        if (lastScrollY < 500) {
          this.option.current.style.display = `none`;
        } else if (lastScrollY > 500){
          this.option.current.style.display = `block`;
        }
        ticking = false;
      });

      ticking = true;
    }
  };

  render() {
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

        <Link activeClass="active" to="mainNav" spy={true} smooth={true} offset={-50} duration={2000}>
          <span className="floatingTopLink util_displayHidden" ref={this.option}>Back To Top</span>
        </Link>
      </nav>
    );
  };
}

export default Nav;

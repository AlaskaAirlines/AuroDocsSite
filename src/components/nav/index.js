import React, { Component } from "react";
//import { Link } from "react-scroll";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
        <Link className="hyperlink" to="typography">
          Typography
        </Link>

        <Link className="hyperlink" to="button">
          Buttons
        </Link>

        <Link className="hyperlink" to="icons">
          Icons
        </Link>

        <Link className="hyperlink" to="hyperlink">
          Hyperlinks
        </Link>

        <Link className="hyperlink" to="options">
          Input Options
        </Link>

        <Link className="hyperlink" to="toast">
          Toast
        </Link>

        <Link className="hyperlink" to="generator">
          WC Generator
        </Link>
        <Link className="hyperlink" to="webcorestylesheets">
          Web Core Stylesheets
        </Link>

        <div className="hyperlink" onClick={() => window.scrollTo(0, 0)}>
          <span className="floatingTopLink util_displayHidden" ref={this.option}>Back To Top</span>
        </div>
      </nav>
    );
  };
}

export default Nav;

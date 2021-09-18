/* eslint-disable jsx-a11y/anchor-has-content */
import '../styles/Footer.css';
import React, {Component} from "react";

class Footer extends Component {

  render() {
    return (
      <footer>
        made by chrisnotthere
        <a href="https://github.com/chrisnotthere/cv-project"><i className="fa fa-github fa-2x fa-spin" aria-hidden="true"></i></a>
      </footer>
    )
  }
}

export default Footer;


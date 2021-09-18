import '../styles/Header.css';
import React, {Component} from "react";

class Header extends Component {

  render() {
    return (
      <header>
        CV Generator&emsp;
        <i className="fa fa-file-o" aria-hidden="true"></i>
      </header>
    )
  }
}

export default Header;

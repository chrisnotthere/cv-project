import React, {Component} from "react";

class Header extends Component {

  render() {
    return (
      <>
        <div className="cvheader">
          <div>
            <p className="name">{this.props.name}</p>
            <p className="title">{this.props.title}</p>
          </div>
          <div className="personal-info">
            <p>{this.props.phone}</p>
            <p>{this.props.email}</p>
            <p>{this.props.location}</p>
          </div>
        </div>
        <p>{this.props.description}</p>
        <hr/>
      </>
    )
  }
}

export default Header;
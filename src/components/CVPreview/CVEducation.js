import React, {Component} from "react";

class CVEducation extends Component {

  render() {
    return (
      <div className='edu-item'>
        <div>{this.props.course}</div>
        <div>{`${this.props.institution} | ${this.props.educationStart} - ${this.props.educationEnd}`}</div>
      </div>
    )
  }
}

export default CVEducation;

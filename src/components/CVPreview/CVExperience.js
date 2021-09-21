import React, {Component} from "react";

class CVExperience extends Component {

  render() {
    return (
      <>
        <div >
          <p className="workExp">Work Experience</p>
          <div className="cv-experience">
            <div className="cv-experience-header">
              <div>
                <p>{this.props.company}</p>
              </div>
              <div className="cv-experience-company">
                <p>{this.props.position}</p>
                <p>{`${this.props.workStart} - ${this.props.workEnd}`}</p>
              </div>
            </div>
            <div className="cv-experience-description">
              <p>{this.props.workDescription}</p>
            </div>
          </div>
        </div>
        <hr/>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default CVExperience;
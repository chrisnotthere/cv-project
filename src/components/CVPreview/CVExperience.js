import React, {Component} from "react";

class CVExperience extends Component {

  render() {
    return (
      <>
        <div >
          <div className="cv-experience">
            <div className="cv-experience-header">
              <div className="cv-experience-company">
                <p>{this.props.company}</p>
              </div>
              <div className="cv-experience-info">
                <p className='cv-experience-position'>{this.props.position}</p>
                <p style={{ 'font-weight': 'bold' }}>{`${this.props.workStart} - ${this.props.workEnd}`}</p>
              </div>
            </div>
            <div className="cv-experience-description">
              <p>{this.props.workDescription}</p>
            </div>
          </div>
        </div>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default CVExperience;

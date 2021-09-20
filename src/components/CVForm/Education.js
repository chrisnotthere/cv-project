import React, {Component} from "react";

class Education extends Component {

  render() {
    return (
      <div className='education'>
          <p>Education</p>
          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="institution">
              Institution
            </label>
            <input 
              value={this.props.institution} 
              onChange={this.props.handleInstitutionChange}
              placeholder="Institution" 
              type="text" 
              className="form-control" 
              id="institution" 
              name="institution" 
              required
            />
          </div>
          <br/><br/>
          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="course">
              Course / Program
            </label>
            <input 
              value={this.props.course} 
              onChange={this.props.handleCourseChange}
              placeholder="Course / Program" 
              type="text" 
              className="form-control" 
              id="course" 
              name="course" 
              required
            />
          </div>
      </div>
    )
  }
}

export default Education;

import React, {Component} from "react";

class Education extends Component {

  render() {
    return (
      <div className='education'>
          <p>Education</p>

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

          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="start">
              Start Date
            </label>
            <input 
              value={this.props.educationStart} 
              onChange={this.props.handleEducationStartChange}
              placeholder="Start Date" 
              type="text" 
              className="form-control" 
              id="start" 
              name="start" 
              required
            />
          </div>

          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="end">
              End Date
            </label>
            <input 
              value={this.props.educationEnd} 
              onChange={this.props.handleEducationEndChange}
              placeholder="End Date" 
              type="text" 
              className="form-control" 
              id="end" 
              name="end" 
              required
            />
          </div>

          <div className="form-group-bottom">
            <label 
              className="form-control-label" 
              htmlFor="description">
              Description
            </label>
            <input 
              value={this.props.educationDescription}
              onChange={this.props.educationDescriptionChange}
              placeholder="Description" 
              type="text" 
              className="form-control" 
              id="description" 
              name="description" 
              required
            />
          </div>
          {/* <hr/> */}
      </div>
    )
  }
}

export default Education;

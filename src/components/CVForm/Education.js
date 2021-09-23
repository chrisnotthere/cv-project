import React, {Component} from "react";

class Education extends Component {

  render() {
    return (
      <div className='education'>
          {/* <p>Education</p> */}

          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="course">
              Course / Program
            </label>
            <input 
              value={this.props.course} 
              onChange={(e) => this.props.handleEducationChange(e, 'course', this.props.id)}
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
              onChange={(e) => this.props.handleEducationChange(e, 'institution', this.props.id)}
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
              onChange={(e) => this.props.handleEducationChange(e, 'educationStart', this.props.id)}
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
              onChange={(e) => this.props.handleEducationChange(e, 'educationEnd', this.props.id)}
              placeholder="End Date" 
              type="text" 
              className="form-control" 
              id="end" 
              name="end" 
              required
            />
          </div>

          <br/>
          <div className='buttons'>
            <button onClick={(e) => this.props.removeEducation(e, this.props.id)}>Delete</button>
          </div>
          <br/>

          {/* <hr/> */}
      </div>
    )
  }
}

export default Education;

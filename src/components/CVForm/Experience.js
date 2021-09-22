import React, {Component} from "react";

class Experience extends Component {

  render() {
    return (
      <div className='experience'>
          
          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="company">
              Company
            </label>
            <input 
              value={this.props.company} 
              onChange={(e) => this.props.handleExperienceChange(e, 'company')}
              placeholder="Company" 
              type="text" 
              className="form-control" 
              id="company" 
              name="company" 
              required
            />
          </div>

          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="position">
              Position
            </label>
            <input 
              value={this.props.position} 
              onChange={(e) => this.props.handleExperienceChange(e, 'position')}              placeholder="Position" 
              type="text" 
              className="form-control" 
              id="position" 
              name="position" 
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
              value={this.props.workStart} 
              onChange={(e) => this.props.handleExperienceChange(e, 'workStart')}              placeholder="Start Date" 
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
              value={this.props.workEnd} 
              onChange={(e) => this.props.handleExperienceChange(e, 'workEnd')}              placeholder="End Date" 
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
              value={this.props.workDescription}
              onChange={(e) => this.props.handleExperienceChange(e, 'workDescription')}              placeholder="Description" 
              type="text" 
              className="form-control" 
              id="description" 
              name="description" 
              required
            />
          </div>

          <div className='buttons'>
            <button >Delete</button>
          </div>
      </div>
    )
  }
}

export default Experience;

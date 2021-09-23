import React, {Component} from "react";

class Experience extends Component {

  render() {
    return (
      <div className='experience'>
          
          <div className="form-group">
            <label className="form-control-label" >
              Company
            </label>
            <input 
              value={this.props.company} 
              onChange={(e) => this.props.handleExperienceChange(e, 'company', this.props.id)}
              placeholder="Company" 
              type="text" 
              className="form-control" 
              required
            />
          </div>

          <div className="form-group">
            <label className="form-control-label">
              Position
            </label>
            <input 
              value={this.props.position} 
              onChange={(e) => this.props.handleExperienceChange(e, 'position', this.props.id)}              
              placeholder="Position" 
              type="text" 
              className="form-control" 
              required
            />
          </div>

          <div className="form-group">
            <label className="form-control-label">
              Start Date
            </label>
            <input 
              value={this.props.workStart} 
              onChange={(e) => this.props.handleExperienceChange(e, 'workStart', this.props.id)}              
              placeholder="Start Date" 
              type="text" 
              className="form-control" 
              required
            />
          </div>

          <div className="form-group">
            <label className="form-control-label">
              End Date
            </label>
            <input 
              value={this.props.workEnd} 
              onChange={(e) => this.props.handleExperienceChange(e, 'workEnd', this.props.id)}              
              placeholder="End Date" 
              type="text" 
              className="form-control" 
              required
            />
          </div>

          <div className="form-group-bottom">
            <label className="form-control-label">
              Description
            </label>
            <input 
              value={this.props.workDescription}
              onChange={(e) => this.props.handleExperienceChange(e, 'workDescription', this.props.id)}              
              placeholder="Description" 
              type="text" 
              className="form-control" 
              required
            />
          </div>

          <div className='buttons'>
            <button onClick={(e) => this.props.removeWorkExp(e, this.props.id)}>Delete</button>
          </div>
      </div>
    )
  }
}

export default Experience;

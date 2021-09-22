import React, {Component} from "react";

class Experience extends Component {

  render() {
    return (
      <div className='experience'>
          {/* <p>Work Experience <button>Add</button></p> */}
          
          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="company">
              Company
            </label>
            <input 
              value={this.props.company} 
              onChange={(e) => this.props.handleCompanyChange(e, 0)}
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
              onChange={this.props.handlePositionChange}
              placeholder="Position" 
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
              onChange={this.props.handleWorkStartChange}
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
              value={this.props.workEnd} 
              onChange={this.props.handleWorkEndChange}
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
              value={this.props.workDescription}
              onChange={this.props.handleWorkDescriptionChange}
              placeholder="Description" 
              type="text" 
              className="form-control" 
              id="description" 
              name="description" 
              required
            />
          </div>
          {/* <hr/> */}
          <div className='buttons'>
            <button >Delete</button>
          </div>
      </div>
    )
  }
}

export default Experience;

import React, {Component} from "react";

class Experience extends Component {

  render() {
    return (
      <div className='experience'>
          <p>Work Experience</p>
          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="company">
              Company
            </label>
            <input 
              value={this.props.company} 
              onChange={this.props.handleCompanyChange}
              placeholder="Company" 
              type="text" 
              className="form-control" 
              id="company" 
              name="company" 
              required
            />
          </div>
          <br/><br/>
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
      </div>
    )
  }
}

export default Experience;

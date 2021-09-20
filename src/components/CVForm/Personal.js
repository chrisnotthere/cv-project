import React, {Component} from "react";

class Personal extends Component {

  render() {
    return (
      <div className='personal'>
          <p>Personal Details</p>
          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="name">
              Name
            </label>
            <input 
              value={this.props.name} 
              onChange={this.props.handleNameChange}
              placeholder="Name" 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              required
            />
          </div>
          <br/><br/>
          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="description">
              Description
            </label>
            <input 
              value={this.props.description} 
              onChange={this.props.handleDescriptionChange}
              placeholder="Description" 
              type="textarea" 
              className="form-control" 
              id="description" 
              name="description" 
              required
            />
          </div>
      </div>
    )
  }
}

export default Personal;

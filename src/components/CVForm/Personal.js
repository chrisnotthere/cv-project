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

          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="title">
              Title
            </label>
            <input 
              value={this.props.title} 
              onChange={this.props.handleTitleChange}
              placeholder="Title" 
              type="text" 
              className="form-control" 
              id="title" 
              name="title" 
              required
            />
          </div>

          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="phone">
              Phone
            </label>
            <input 
              value={this.props.phone} 
              onChange={this.props.handlePhoneChange}
              placeholder="Phone" 
              type="text" 
              className="form-control" 
              id="phone" 
              name="phone" 
              required
            />
          </div>

          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="email">
              Email
            </label>
            <input 
              value={this.props.email} 
              onChange={this.props.handleEmailChange}
              placeholder="Email" 
              type="text" 
              className="form-control" 
              id="email" 
              name="email" 
              required
            />
          </div>

          <div className="form-group">
            <label 
              className="form-control-label" 
              htmlFor="location">
              Location
            </label>
            <input 
              value={this.props.location} 
              onChange={this.props.handleLocationChange}
              placeholder="Location" 
              type="text" 
              className="form-control" 
              id="location" 
              name="location" 
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
              value={this.props.description} 
              onChange={this.props.handleDescriptionChange}
              placeholder="Description..." 
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

export default Personal;

import '../../styles/CVForm.css';
import React, {Component} from "react";


class CVForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.props.name} ${this.props.description}`)
  }

  render() {
    return (
      <div className='CVForm'>
        <p>Personal Details</p>
        <form onSubmit={this.handleSubmit}>
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
          <br/><br/><br/><br/>
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

export default CVForm;

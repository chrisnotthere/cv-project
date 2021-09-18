import '../../styles/CVForm.css';
import React, {Component} from "react";


class CVForm extends Component {


  render() {
    return (
      <div className='CVForm'>
        <form>
          <div>
            <label>Name</label>
            <input 
              type="text" 
              value={this.props.name} 
              onChange={this.props.handleNameChange}
            />
          </div>
          <br/><br/>
          <div>
            <label>Description</label>
            <textarea 
              value={this.props.description} 
              onChange={this.props.handleDescriptionChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default CVForm;

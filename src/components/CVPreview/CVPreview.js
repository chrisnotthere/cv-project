import '../../styles/CVPreview.css';
import React, {Component} from "react";

class CVPreview extends Component {

  render() {
    return (
      <div className='CVPreview'>
        <h2>CVPreview</h2>
        <br/>
        <div>
          <br/><br/>
          Name: {this.props.name}
          <br/><br/>
          description: {this.props.description}
        </div>
      </div>
    )
  }
}

export default CVPreview;

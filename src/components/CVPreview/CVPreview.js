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
          <br/><br/>
          Company: {this.props.company}
          <br/><br/>
          Position: {this.props.position}
          <br/><br/>
          Institution: {this.props.institution}
          <br/><br/>
          Course / Program: {this.props.course}
        </div>
      </div>
    )
  }
}

export default CVPreview;

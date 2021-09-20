import '../../styles/CVPreview.css';
import React, {Component} from "react";

class CVPreview extends Component {

  render() {
    return (
      <div className='cv-preview'>
        <h2>CVPreview</h2>
        <div>

          {this.props.name}
          <br/>
          {this.props.title}
          <br/>
          {this.props.phone}
          <br/>
          {this.props.email}
          <br/>
          {this.props.location}
          <br/>
          {this.props.description}
          <br/>
          {this.props.company}
          <br/>
          {this.props.position}
          <br/>
          {this.props.workStart}
          <br/>
          {this.props.workEnd}
          <br/>
          {this.props.workDescription}
          <br/>
          {this.props.course}
          <br/>
          {this.props.institution}
          <br/>
          {this.props.educationStart}
          <br/>
          {this.props.educationEnd}
          <br/>
          {this.props.educationDescription}
          <br/>


        </div>
      </div>
    )
  }
}

export default CVPreview;

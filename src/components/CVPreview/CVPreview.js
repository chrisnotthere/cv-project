import '../../styles/CVPreview.css';
import React, {Component} from "react";
import Header from './Header';
import CVExperience from './CVExperience'

class CVPreview extends Component {

  render() {
    return (
      <div className='cv-preview'>
        <Header 
          name={this.props.name}
          title={this.props.title}
          phone={this.props.phone}
          email={this.props.email}
          location={this.props.location}
          description={this.props.description}
        />
        <CVExperience
          company={this.props.company}
          position={this.props.position}
          workStart={this.props.workStart}
          workEnd={this.props.workEnd}
          workDescription={this.props.workDescription}
        />

      </div>
    )
  }
}

export default CVPreview;

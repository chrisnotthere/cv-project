import '../../styles/CVPreview.css';
import React, {Component} from "react";
import Header from './Header';
import CVExperience from './CVExperience';
import CVEducation from './CVEducation';

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
        <p className="section-header">Work Experience</p>

        {this.props.workExp.map(workExp => (
          <CVExperience
            key={workExp.id}
            id={workExp.id}
            company={workExp.company}
            position={workExp.position}
            workStart={workExp.workStart}
            workEnd={workExp.workEnd}
            workDescription={workExp.workDescription}
          />
        ))}

        <p className="section-header">Education</p>

        {this.props.education.map(education => (
          <CVEducation
            key={education.id}
            id={education.id}
            course={education.course}
            institution={education.institution}
            educationStart={education.educationStart}
            educationEnd={education.educationEnd}
         />
        ))}

      </div>
    )
  }
}

export default CVPreview;

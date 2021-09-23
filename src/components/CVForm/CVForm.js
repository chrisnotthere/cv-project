import '../../styles/CVForm.css';
import React, {Component} from "react";
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

class CVForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className='CVForm'>
        <form onSubmit={this.handleSubmit}>
          <p>Personal Details</p>
          <Personal 
            name={this.props.name}
            title={this.props.title}
            phone={this.props.phone}
            email={this.props.email}
            location={this.props.location}
            description={this.props.description}

            handlePersonalChange={this.props.handlePersonalChange}
          />

          <p>Work Experience <button onClick={this.props.addWorkExp}>Add</button></p>
          {/* <p>Work Experience <button onClick={this.addExpSection}>Add</button></p> */}

          {this.props.workExp.map(workExp => (
            <Experience 
              key={workExp.id}
              id={workExp.id}
              company={workExp.company}
              position={workExp.position}
              workStart={workExp.workStart}
              workEnd={workExp.workEnd}
              workDescription={workExp.workDescription}
              course={workExp.course}
              institution={workExp.institution}
              handleExperienceChange={this.props.handleExperienceChange}
              removeWorkExp={this.props.removeWorkExp}
          />
          ))}
          
          <p>Education <button onClick={this.props.addEducation}>Add</button></p>

          {this.props.education.map(education => (
            <Education 
              key={education.id}
              id={education.id}
              institution={education.institution}
              course={education.course}
              educationStart={education.educationStart}
              educationEnd={education.educationEnd}
              educationDescription={education.educationDescription}

              // handleInstitutionChange={education.handleInstitutionChange}
              // handleCourseChange={education.handleCourseChange}
              // handleEducationStartChange={education.handleEducationStartChange}
              // handleEducationEndChange={education.handleEducationEndChange}
              handleEducationChange={this.props.handleEducationChange}
              removeEducation={this.props.removeEducation}
              addEducation={this.props.addEducation}
            />
          ))}

          <div className='buttons'>
            <button type="submit" >Submit</button>
            <button className='pdf' onClick={this.props.handleGeneratePDF} >Generate PDF</button>
            <button className='reset' onClick={this.props.handleReset} >Reset</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CVForm;

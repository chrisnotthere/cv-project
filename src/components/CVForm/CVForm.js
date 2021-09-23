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


          <div id='addExpDiv'></div>
          
          <p>Education <button>Add</button></p>
          <Education 
            institution={this.props.institution}
            course={this.props.course}
            educationStart={this.props.educationStart}
            educationEnd={this.props.educationEnd}
            educationDescription={this.props.educationDescription}

            handleInstitutionChange={this.props.handleInstitutionChange}
            handleCourseChange={this.props.handleCourseChange}
            handleEducationStartChange={this.props.handleEducationStartChange}
            handleEducationEndChange={this.props.handleEducationEndChange}

          />
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

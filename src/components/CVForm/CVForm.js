import '../../styles/CVForm.css';
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

class CVForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }

  addExpSection = () => {
    const section = document.querySelector('#addExpDiv');

    const expSection = (
      <Experience 
        company=''
        position=''
        workStart=''
        workEnd=''
        workDescription=''
        course=''
        institution=''

        handleCompanyChange={this.props.handleCompanyChange}
        handlePositionChange={this.props.handlePositionChange}
        handleWorkStartChange={this.props.handleWorkStartChange}
        handleWorkEndChange={this.props.handleWorkEndChange}
        handleWorkDescriptionChange={this.props.handleWorkDescriptionChange}
      />
    );

    ReactDOM.render(expSection, section);
    this.props.addWorkExp();

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

            handleNameChange={this.props.handleNameChange}
            handleTitleChange={this.props.handleTitleChange}
            handlePhoneChange={this.props.handlePhoneChange}
            handleEmailChange={this.props.handleEmailChange}
            handleLocationChange={this.props.handleLocationChange}
            handleDescriptionChange={this.props.handleDescriptionChange}
          />

          {/* <p>Work Experience <button onClick={this.props.addWorkExp}>Add</button></p> */}
          <p>Work Experience <button onClick={this.addExpSection}>Add</button></p>

          <Experience 
            company={this.props.company}
            position={this.props.position}
            workStart={this.props.workStart}
            workEnd={this.props.workEnd}
            workDescription={this.props.workDescription}
            course={this.props.course}
            institution={this.props.institution}

            handleCompanyChange={this.props.handleCompanyChange}
            handlePositionChange={this.props.handlePositionChange}
            handleWorkStartChange={this.props.handleWorkStartChange}
            handleWorkEndChange={this.props.handleWorkEndChange}
            handleWorkDescriptionChange={this.props.handleWorkDescriptionChange}
          />
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

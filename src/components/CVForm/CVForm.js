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
            handleEducationDescriptionChange={this.props.handleEducationDescriptionChange}

          />

          <button type="submit" >Submit</button>
          <button onClick={this.props.handleGeneratePDF} >Generate PDF</button>
          <button onClick={this.props.handleReset} >Reset</button>
        </form>
      </div>
    )
  }
}

export default CVForm;

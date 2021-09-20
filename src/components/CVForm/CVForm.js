import '../../styles/CVForm.css';
import React, {Component} from "react";
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

class CVForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    //alert(`${this.props.name} ${this.props.description}`)
  }

  // handleGeneratePDF = (event) => {
  //   //event.preventDefault();
  //   alert(`Generate the PDF`)
  // }

  // handleReset = (event) => {
  //   //event.preventDefault();
  //   alert(`Reset the CV`)
  // }

  render() {
    return (
      <div className='CVForm'>
        <form onSubmit={this.handleSubmit}>
          <Personal 
            name={this.props.name}
            description={this.props.description}
            handleNameChange={this.props.handleNameChange}
            handleDescriptionChange={this.props.handleDescriptionChange}
          />
          <Experience 
            company={this.props.company}
            position={this.props.position}
            handleCompanyChange={this.props.handleCompanyChange}
            handlePositionChange={this.props.handlePositionChange}
          />
          <Education 
            institution={this.props.institution}
            course={this.props.course}
            handleInstitutionChange={this.props.handleInstitutionChange}
            handleCourseChange={this.props.handleCourseChange}
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

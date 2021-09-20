import '../styles/Main.css';
import React, {Component} from "react";
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

class Main extends Component {
  constructor(props) {
    super(props)

    // this is the default CV info, before the user enters any information
    this.state = {
      name: 'John Wick',
      description: 'default description',
      company: 'Google',
      position: 'Junior Developer',
      institution: 'Harvard University',
      course: 'CS50: Introduction to Computer Science'
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleCompanyChange = (event) => {
    this.setState({
      company: event.target.value
    })
  }

  handlePositionChange = (event) => {
    this.setState({
      position: event.target.value
    })
  }

  handleInstitutionChange = (event) => {
    this.setState({
      institution: event.target.value
    })
  }

  handleCourseChange = (event) => {
    this.setState({
      course: event.target.value
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`${this.state.name} ${this.state.description}`)
  // }

  handleReset = event => {
    this.setState({
      name: 'John Wick',
      description: 'default description',
      company: 'Google',
      position: 'Junior Developer',
      institution: 'Harvard University',
      course: 'CS50: Introduction to Computer Science'
    })
  }

  handleGeneratePDF = (event) => {
    //event.preventDefault();
    window.print();
  }

  render() {
    return (
      <main>
        <CVForm 
          name={this.state.name}
          description={this.state.description}
          company={this.state.company}
          position={this.state.position}
          institution={this.state.institution}
          course={this.state.course}

          handleNameChange={this.handleNameChange.bind(this)}
          handleDescriptionChange={this.handleDescriptionChange.bind(this)}
          handleCompanyChange={this.handleCompanyChange.bind(this)}
          handlePositionChange={this.handlePositionChange.bind(this)}
          handleInstitutionChange={this.handleInstitutionChange.bind(this)}
          handleCourseChange={this.handleCourseChange.bind(this)}
          //HandleSubmit={() => this.handleSubmit()}
          handleReset={this.handleReset.bind(this)}
          handleGeneratePDF={this.handleGeneratePDF.bind(this)}
        />
        <CVPreview 
          name={this.state.name} 
          description={this.state.description}
          company={this.state.company}
          position={this.state.position}
          institution={this.state.institution}
          course={this.state.course}
        />
      </main>
    )
  }
}

export default Main;


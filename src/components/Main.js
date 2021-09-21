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
      title: 'Software Developer',
      phone: '250 555-0123',
      email: 'JWick@gmail.com',
      location: 'Vancouver, BC', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      
      company: 'Google',
      position: 'Junior Developer',
      workStart: '2019',
      workEnd: 'Present',
      workDescription: 'Commodo laboris amet aliquip incididunt do ut est exercitation blahblahblah.',
      
      course: 'CS50: Introduction to Computer Science',
      institution: 'Harvard University',
      educationStart: '2016',
      educationEnd: '2018',
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value
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

  handleWorkStartChange = (event) => {
    this.setState({
      workStart: event.target.value
    })
  }

  handleWorkEndChange = (event) => {
    this.setState({
      workEnd: event.target.value
    })
  }

  handleWorkDescriptionChange = (event) => {
    this.setState({
      workDescription: event.target.value
    })
  }

  handleCourseChange = (event) => {
    this.setState({
      course: event.target.value
    })
  }

  handleInstitutionChange = (event) => {
    this.setState({
      institution: event.target.value
    })
  }

  handleEducationStartChange = (event) => {
    this.setState({
      educationStart: event.target.value
    })
  }

  handleEducationEndChange = (event) => {
    this.setState({
      educationEnd: event.target.value
    })
  }


  handleReset = event => {
    this.setState({
      name: 'John Wick',
      title: 'Software Developer',
      phone: '250 555-0123',
      email: 'JWick@gmail.com',
      location: 'Vancouver, BC', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      
      company: 'Google',
      position: 'Junior Developer',
      workStart: '2019',
      workEnd: 'Present',
      workDescription: 'Commodo laboris amet aliquip incididunt do ut est exercitation blahblahblah.',
      
      course: 'CS50: Introduction to Computer Science',
      institution: 'Harvard University',
      educationStart: '2016',
      educationEnd: '2018',
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
          title={this.state.title}
          phone={this.state.phone}
          email={this.state.email}
          location={this.state.location}
          description={this.state.description}

          company={this.state.company}
          position={this.state.position}
          workStart={this.state.workStart}
          workEnd={this.state.workEnd}
          workDescription={this.state.workDescription}

          course={this.state.course}
          institution={this.state.institution}
          educationStart={this.state.educationStart}
          educationEnd={this.state.educationEnd}

          handleNameChange={this.handleNameChange.bind(this)}
          handleTitleChange={this.handleTitleChange.bind(this)}
          handlePhoneChange={this.handlePhoneChange.bind(this)}
          handleEmailChange={this.handleEmailChange.bind(this)}
          handleLocationChange={this.handleLocationChange.bind(this)}
          handleDescriptionChange={this.handleDescriptionChange.bind(this)}

          handleCompanyChange={this.handleCompanyChange.bind(this)}
          handlePositionChange={this.handlePositionChange.bind(this)}
          handleWorkStartChange={this.handleWorkStartChange.bind(this)}
          handleWorkEndChange={this.handleWorkEndChange.bind(this)}
          handleWorkDescriptionChange={this.handleWorkDescriptionChange.bind(this)}

          handleCourseChange={this.handleCourseChange.bind(this)}
          handleInstitutionChange={this.handleInstitutionChange.bind(this)}
          handleEducationStartChange={this.handleEducationStartChange.bind(this)}
          handleEducationEndChange={this.handleEducationEndChange.bind(this)}

          //HandleSubmit={() => this.handleSubmit()}
          handleReset={this.handleReset.bind(this)}
          handleGeneratePDF={this.handleGeneratePDF.bind(this)}
        />
        <CVPreview 
          name={this.state.name}
          title={this.state.title}
          phone={this.state.phone}
          email={this.state.email}
          location={this.state.location}
          description={this.state.description}

          company={this.state.company}
          position={this.state.position}
          workStart={this.state.workStart}
          workEnd={this.state.workEnd}
          workDescription={this.state.workDescription}

          course={this.state.course}
          institution={this.state.institution}
          educationStart={this.state.educationStart}
          educationEnd={this.state.educationEnd}
          
        />
      </main>
    )
  }
}

export default Main;


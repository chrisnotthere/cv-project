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

      workExp: [{
        company: 'Google',
        position: 'Junior Developer',
        workStart: '2019',
        workEnd: 'Present',
        workDescription: 'Commodo laboris amet aliquip incididunt do ut est exercitation blahblahblah.',
      },],
      
      education: [{
        course: 'CS50: Introduction to Computer Science',
        institution: 'Harvard University',
        educationStart: '2016',
        educationEnd: '2018',
      },],

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

  handleCompanyChange = (event, prevState) => {
    let newWorkExp = [...this.state.workExp];
    let newCompany = event.target.value;
    newWorkExp[0].company = newCompany;
    this.setState({newWorkExp});
  }

  handlePositionChange = (event) => {
    let newWorkExp = [...this.state.workExp];
    let newPosition = event.target.value;
    newWorkExp[0].position = newPosition;
    this.setState({newWorkExp});
  }

  handleWorkStartChange = (event) => {
    let newWorkExp = [...this.state.workExp];
    let newWorkStart = event.target.value;
    newWorkExp[0].workStart = newWorkStart;
    this.setState({newWorkExp});
  }

  handleWorkEndChange = (event) => {
    let newWorkExp = [...this.state.workExp];
    let newWorkEnd = event.target.value;
    newWorkExp[0].workEnd = newWorkEnd;
    this.setState({newWorkExp});
  }

  handleWorkDescriptionChange = (event) => {
    let newWorkExp = [...this.state.workExp];
    let newWorkDesc = event.target.value;
    newWorkExp[0].workDescription = newWorkDesc;
    this.setState({newWorkExp});
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

  addWorkExp = () => {
    alert('test');
  }


  handleReset = event => {
    this.setState({
      name: 'John Wick',
      title: 'Software Developer',
      phone: '250 555-0123',
      email: 'JWick@gmail.com',
      location: 'Vancouver, BC', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

      workExp: [{
        company: 'Google',
        position: 'Junior Developer',
        workStart: '2019',
        workEnd: 'Present',
        workDescription: 'Commodo laboris amet aliquip incididunt do ut est exercitation blahblahblah.',
      },],
      
      education: [{
        course: 'CS50: Introduction to Computer Science',
        institution: 'Harvard University',
        educationStart: '2016',
        educationEnd: '2018',
      },],
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

          company={this.state.workExp[0].company}
          position={this.state.workExp[0].position}
          workStart={this.state.workExp[0].workStart}
          workEnd={this.state.workExp[0].workEnd}
          workDescription={this.state.workExp[0].workDescription}

          course={this.state.education[0].course}
          institution={this.state.education[0].institution}
          educationStart={this.state.education[0].educationStart}
          educationEnd={this.state.education[0].educationEnd}

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

          addWorkExp={this.addWorkExp}
        />
        <CVPreview 
          name={this.state.name}
          title={this.state.title}
          phone={this.state.phone}
          email={this.state.email}
          location={this.state.location}
          description={this.state.description}

          company={this.state.workExp[0].company}
          position={this.state.workExp[0].position}
          workStart={this.state.workExp[0].workStart}
          workEnd={this.state.workExp[0].workEnd}
          workDescription={this.state.workExp[0].workDescription}

          course={this.state.education[0].course}
          institution={this.state.education[0].institution}
          educationStart={this.state.education[0].educationStart}
          educationEnd={this.state.education[0].educationEnd}
          
        />
      </main>
    )
  }
}

export default Main;


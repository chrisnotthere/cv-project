/* eslint-disable default-case */
import '../styles/Main.css';
import React, {Component} from "react";
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import uniqid from 'uniqid';

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
        id: uniqid(),
        company: 'Google',
        position: 'Junior Developer',
        workStart: '2019',
        workEnd: 'Present',
        workDescription: 'Commodo laboris amet aliquip incididunt do ut est exercitation blahblahblah.',
      },],
      
      education: [{
        id: uniqid(),
        course: 'CS50: Introduction to Computer Science',
        institution: 'Harvard University',
        educationStart: '2016',
        educationEnd: '2018',
      },],

    }
  }

  handlePersonalChange = (event, field) => {
    switch (field) {
      case 'name': {
        this.setState({
          name: event.target.value
        })
        break;
      }
      case 'title': {
        this.setState({
          title: event.target.value
        })
        break;
      }
      case 'phone': {
        this.setState({
          phone: event.target.value
        })
        break;
      }
      case 'email': {
        this.setState({
          email: event.target.value
        })
        break;
      }
      case 'location': {
        this.setState({
          location: event.target.value
        })
        break;
      }
      case 'description': {
        this.setState({
          description: event.target.value
        })
        break;
      }
    }
  }

  //changed so it now uses an index
  handleCompanyChange = (event, index) => {
    let newWorkExp = [...this.state.workExp];
    let newCompany = event.target.value;
    newWorkExp[index].company = newCompany;
    this.setState({newWorkExp});
  }

  handlePositionChange = (event, index) => {
    let newWorkExp = [...this.state.workExp];
    let newPosition = event.target.value;
    newWorkExp[0].position = newPosition;
    this.setState({newWorkExp});
  }

  handleWorkStartChange = (event, index) => {
    let newWorkExp = [...this.state.workExp];
    let newWorkStart = event.target.value;
    newWorkExp[0].workStart = newWorkStart;
    this.setState({newWorkExp});
  }

  handleWorkEndChange = (event, index) => {
    let newWorkExp = [...this.state.workExp];
    let newWorkEnd = event.target.value;
    newWorkExp[0].workEnd = newWorkEnd;
    this.setState({newWorkExp});
  }

  handleWorkDescriptionChange = (event, index) => {
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

  //add new empty object to work experience array
  addWorkExp = () => {

    let newWorkExpObj = {
      id: uniqid(),
      company: 'Testing...',
      position: '',
      workStart: '',
      workEnd: '',
      workDescription: '',
    }

    this.setState({workExp: [...this.state.workExp, newWorkExpObj]});
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
        id: uniqid(),
        company: 'Google',
        position: 'Junior Developer',
        workStart: '2019',
        workEnd: 'Present',
        workDescription: 'Commodo laboris amet aliquip incididunt do ut est exercitation blahblahblah.',
      },],
      
      education: [{
        id: uniqid(),
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

          handlePersonalChange={this.handlePersonalChange.bind(this)}

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


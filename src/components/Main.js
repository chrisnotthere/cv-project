/* eslint-disable no-restricted-globals */
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
        course: 'CS50: Intro to Computer Science',
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

  handleExperienceChange = (event, field, id) => {
    //find the correct workExp obj by using the id
    let prevState = [...this.state.workExp];
    let newWorkExp = prevState.find((exp) => exp.id === id);

    switch (field) {
      case 'company': {
        newWorkExp.company = event.target.value;
        this.setState({newWorkExp});
        break;
      }
      case 'position': {
        newWorkExp.position = event.target.value;
        this.setState({newWorkExp});
        break;
      }
      case 'workStart': {
        newWorkExp.workStart = event.target.value;
        this.setState({newWorkExp});
        break;
      }
      case 'workEnd': {
        newWorkExp.workEnd = event.target.value;
        this.setState({newWorkExp});
        break;
      }
      case 'workDescription': {
        newWorkExp.workDescription = event.target.value;
        this.setState({newWorkExp});
        break;
      }
    }
  }
  
  handleEducationChange = (event, field, id) => {
    let prevState = [...this.state.education];
    let newEdu = prevState.find((edu) => edu.id === id);

    switch (field) {
      case 'course': {
        newEdu.course = event.target.value;
        this.setState({newEdu});
        break;
      }
      case 'institution': {
        newEdu.institution = event.target.value;
        this.setState({newEdu});
        break;
      }
      case 'educationStart': {
        newEdu.educationStart = event.target.value;
        this.setState({newEdu});
        break;
      }
      case 'educationEnd': {
        newEdu.educationEnd = event.target.value;
        this.setState({newEdu});
        break;
      }
    }
  }

  addWorkExp = () => {
    let newId = uniqid();
    let newWorkExpObj = {
      id: newId,
      company: 'Some company',
      position: 'My position',
      workStart: '2015',
      workEnd: '2019',
      workDescription: 'description about my experience',
    }

    this.setState({workExp: [...this.state.workExp, newWorkExpObj]});
  }

  removeWorkExp = (event, id) => {
    let newWorkExp = this.state.workExp.filter(exp => exp.id !== id)
    this.setState({workExp: [...newWorkExp]});
  }

  addEducation = () => {
    let newId = uniqid();
    let newEduObj = {
      id: newId,
      course: 'Economics: 101',
      institution: 'Camosun College',
      educationStart: '2010',
      educationEnd: '2012',
    }

    this.setState({education: [...this.state.education, newEduObj]});
  }

  removeEducation = (event, id) => {
    let newEdu = this.state.education.filter(exp => exp.id !== id)
    this.setState({education: [...newEdu]});
  }

  handleReset = event => {
    //just refresh the page...
    location.reload();
  }

  handleGeneratePDF = (event) => {
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

          workExp={this.state.workExp}
          education={this.state.education}

          handlePersonalChange={this.handlePersonalChange.bind(this)}
          handleExperienceChange={this.handleExperienceChange.bind(this)}
          handleEducationChange={this.handleEducationChange.bind(this)}
          handleReset={this.handleReset.bind(this)}
          handleGeneratePDF={this.handleGeneratePDF.bind(this)}

          addWorkExp={this.addWorkExp}
          removeWorkExp={this.removeWorkExp.bind(this)}
          addEducation={this.addEducation}
          removeEducation={this.removeEducation.bind(this)}
        />
        <CVPreview 
          name={this.state.name}
          title={this.state.title}
          phone={this.state.phone}
          email={this.state.email}
          location={this.state.location}
          description={this.state.description}

          workExp={this.state.workExp}
          education={this.state.education}
        />
      </main>
    )
  }
}

export default Main;

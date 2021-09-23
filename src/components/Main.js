/* eslint-disable no-restricted-globals */
/* eslint-disable default-case */
import '../styles/Main.css';
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import uniqid from 'uniqid';
import Experience from './CVForm/Experience';
import CVExperience from './CVPreview/CVExperience';

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

  handleExperienceChange = (event, field, id) => {

    //find the correct workExp obj by using the id
    let prevState = [...this.state.workExp];
    let newWorkExp = prevState.find((exp) => exp.id === id);

    //let newWorkExp = [...this.state.workExp];
    console.log(id);

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

  /////old handler, keep incase new one breaks
  // handleCompanyChange = (event, index) => {
  //   let newWorkExp = [...this.state.workExp];
  //   let newCompany = event.target.value;
  //   newWorkExp[index].company = newCompany;
  //   this.setState({newWorkExp});
  // }
  

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

    let newId = uniqid();
    let newWorkExpObj = {
      id: newId,
      company: 'Some company',
      position: 'My position',
      workStart: '2015',
      workEnd: '2019',
      workDescription: 'blah blah blah blah blah blah blah blah',
    }

    this.setState({workExp: [...this.state.workExp, newWorkExpObj]});
    

    //it is probably a bad idea to render like i did below(commented out)

    //setTimeout(this.renderWorkExpForm.bind(this), 100);
    //setTimeout(this.renderWorkExpPreview.bind(this), 100);
    //this.renderWorkExpPreview();
    //this.renderWorkExp();
  }

  renderWorkExpForm = () => {

    const section = document.querySelector('#addExpDiv');

    const expSection = (
      <Experience 
        id={this.state.workExp[1].id}
        company={this.state.workExp[1].company}
        position={this.state.workExp[1].position}
        workStart={this.state.workExp[1].workStart}
        workEnd={this.state.workExp[1].workEnd}
        workDescription={this.state.workExp[1].workDescription}

        handleExperienceChange={this.handleExperienceChange.bind(this)}
      />
    );

    ReactDOM.render(expSection, section);
  }

  renderWorkExpPreview = () => {

    const section = document.querySelector('.add-exp-area');

    const expSection = (
      <CVExperience 
        id={this.state.workExp[1].id}
        company={this.state.workExp[1].company}
        position={this.state.workExp[1].position}
        workStart={this.state.workExp[1].workStart}
        workEnd={this.state.workExp[1].workEnd}
        workDescription={this.state.workExp[1].workDescription}

        //handleExperienceChange={this.handleExperienceChange.bind(this)}
      />
    );
    

    ReactDOM.render(expSection, section);

  }


  handleReset = event => {
    //just refresh the page...
    location.reload();
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

          id={this.state.workExp[0].id}
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
          handleExperienceChange={this.handleExperienceChange.bind(this)}

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

          workExp={this.state.workExp}

          id={this.state.workExp[0].id}
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


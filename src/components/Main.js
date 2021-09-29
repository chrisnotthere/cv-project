/* eslint-disable no-restricted-globals */
/* eslint-disable default-case */
import '../styles/Main.css';
import React, { useState } from "react";
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import uniqid from 'uniqid';

const Main = () => {

  const [cv, setCv] = useState({
      name: 'John Wick',
      title: 'Software Developer',
      phone: '250 555-0123',
      email: 'JWick@gmail.com',
      location: 'Vancouver, BC', 
      description: 'Brief bio about yourself in here...',

      workExp: [{
        id: uniqid(),
        company: 'Google',
        position: 'Junior Developer',
        workStart: '2019',
        workEnd: 'Present',
        workDescription: 'Talk about what you did during your time here.',
      },],
      
      education: [{
        id: uniqid(),
        course: 'CS50: Intro to Computer Science',
        institution: 'Harvard University',
        educationStart: '2016',
        educationEnd: '2018',
      },],
    });


  const handlePersonalChange = (event, field) => {
    switch (field) {
      case 'name': {
        setCv({...cv, name: event.target.value})
        break;
      }
      case 'title': {
        setCv({...cv, title: event.target.value})
        break;
      }
      case 'phone': {
        setCv({...cv, phone: event.target.value})
        break;
      }
      case 'email': {
        setCv({...cv, email: event.target.value})
        break;
      }
      case 'location': {
        setCv({...cv, location: event.target.value})
        break;
      }
      case 'description': {
        setCv({...cv, description: event.target.value})
        break;
      }
    }
  }

  const handleExperienceChange = (event, field, id) => {
    //find the correct workExp obj by using the id
    let prevState = [...cv.workExp];
    let newWorkExp = prevState.find((exp) => exp.id === id);

    switch (field) {
      case 'company': {
        newWorkExp.company = event.target.value;
        setCv({...cv,newWorkExp});
        break;
      }
      case 'position': {
        newWorkExp.position = event.target.value;
        setCv({...cv, newWorkExp});
        break;
      }
      case 'workStart': {
        newWorkExp.workStart = event.target.value;
        setCv({...cv, newWorkExp});
        break;
      }
      case 'workEnd': {
        newWorkExp.workEnd = event.target.value;
        setCv({...cv, newWorkExp});
        break;
      }
      case 'workDescription': {
        newWorkExp.workDescription = event.target.value;
        setCv({...cv, newWorkExp});
        break;
      }
    }
  }
  
  const handleEducationChange = (event, field, id) => {
    let prevState = [...cv.education];
    let newEdu = prevState.find((edu) => edu.id === id);

    switch (field) {
      case 'course': {
        newEdu.course = event.target.value;
        setCv({...cv, newEdu});
        break;
      }
      case 'institution': {
        newEdu.institution = event.target.value;
        setCv({...cv, newEdu});
        break;
      }
      case 'educationStart': {
        newEdu.educationStart = event.target.value;
        setCv({...cv, newEdu});
        break;
      }
      case 'educationEnd': {
        newEdu.educationEnd = event.target.value;
        setCv({...cv, newEdu});
        break;
      }
    }
  }

  const addWorkExp = () => {
    let newId = uniqid();
    let newWorkExpObj = {
      id: newId,
      company: 'Some company',
      position: 'My position',
      workStart: '2015',
      workEnd: '2019',
      workDescription: 'description about my experience',
    }

    setCv({...cv, workExp: [...cv.workExp, newWorkExpObj]});
  }

  const removeWorkExp = (event, id) => {
    let newWorkExp = cv.workExp.filter(exp => exp.id !== id)
    setCv({...cv, workExp: [...newWorkExp]});
  }

  const addEducation = () => {
    let newId = uniqid();
    let newEduObj = {
      id: newId,
      course: 'Economics: 101',
      institution: 'Camosun College',
      educationStart: '2010',
      educationEnd: '2012',
    }

    setCv({...cv, education: [...cv.education, newEduObj]});
  }

  const removeEducation = (event, id) => {
    let newEdu = cv.education.filter(exp => exp.id !== id)
    setCv({...cv, education: [...newEdu]});
  }

  const handleReset = event => {
    location.reload();
  }

  const handleGeneratePDF = (event) => {
    window.print();
  }


  return (
    <main>
      <CVForm 
        name={cv.name}
        title={cv.title}
        phone={cv.phone}
        email={cv.email}
        location={cv.location}
        description={cv.description}

        workExp={cv.workExp}
        education={cv.education}

        handlePersonalChange={handlePersonalChange.bind(this)}
        handleExperienceChange={handleExperienceChange.bind(this)}
        handleEducationChange={handleEducationChange.bind(this)}
        handleReset={handleReset.bind(this)}
        handleGeneratePDF={handleGeneratePDF.bind(this)}

        addWorkExp={addWorkExp}
        removeWorkExp={removeWorkExp.bind(this)}
        addEducation={addEducation}
        removeEducation={removeEducation.bind(this)}
      />
      <CVPreview 
        name={cv.name}
        title={cv.title}
        phone={cv.phone}
        email={cv.email}
        location={cv.location}
        description={cv.description}

        workExp={cv.workExp}
        education={cv.education}
      />
    </main>
  )
}


export default Main;

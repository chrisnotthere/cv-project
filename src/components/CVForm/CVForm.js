import '../../styles/CVForm.css';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

const CVForm = props => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='CVForm'>
      <form onSubmit={handleSubmit}>
        <p>Personal Details</p>
        <Personal 
          name={props.name}
          title={props.title}
          phone={props.phone}
          email={props.email}
          location={props.location}
          description={props.description}

          handlePersonalChange={props.handlePersonalChange}
        />

        <p>Work Experience <button onClick={props.addWorkExp}>Add</button></p>

        {props.workExp.map(workExp => (
          <Experience 
            key={workExp.id}
            id={workExp.id}
            company={workExp.company}
            position={workExp.position}
            workStart={workExp.workStart}
            workEnd={workExp.workEnd}
            workDescription={workExp.workDescription}
            course={workExp.course}
            institution={workExp.institution}
            handleExperienceChange={props.handleExperienceChange}
            removeWorkExp={props.removeWorkExp}
        />
        ))}
        
        <p>Education <button onClick={props.addEducation}>Add</button></p>

        {props.education.map(education => (
          <Education 
            key={education.id}
            id={education.id}
            institution={education.institution}
            course={education.course}
            educationStart={education.educationStart}
            educationEnd={education.educationEnd}
            educationDescription={education.educationDescription}

            handleEducationChange={props.handleEducationChange}
            removeEducation={props.removeEducation}
            addEducation={props.addEducation}
          />
        ))}

        <div className='buttons buttons-bottom'>
          <button type="submit" >Submit</button>
          <button className='pdf' onClick={props.handleGeneratePDF} >Generate PDF</button>
          <button className='reset' onClick={props.handleReset} >Reset</button>
        </div>
      </form>
    </div>
  )
}

export default CVForm;

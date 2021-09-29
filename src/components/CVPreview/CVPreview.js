import '../../styles/CVPreview.css';
import Header from './Header';
import CVExperience from './CVExperience';
import CVEducation from './CVEducation';

const CVPreview = (props) => {

  return (
    <div className='cv-preview'>
      <Header 
        name={props.name}
        title={props.title}
        phone={props.phone}
        email={props.email}
        location={props.location}
        description={props.description}
      />
      <hr/>
      <p className="section-header exp-header">Work Experience</p>
      <hr/>
      
      {props.workExp.map(workExp => (
        <CVExperience
          key={workExp.id}
          id={workExp.id}
          company={workExp.company}
          position={workExp.position}
          workStart={workExp.workStart}
          workEnd={workExp.workEnd}
          workDescription={workExp.workDescription}
        />
      ))}
      <hr/>
      <p className="section-header">Education</p>
      <hr/>

      {props.education.map(education => (
        <CVEducation
          key={education.id}
          id={education.id}
          course={education.course}
          institution={education.institution}
          educationStart={education.educationStart}
          educationEnd={education.educationEnd}
        />
      ))}

    </div>
  )
}


export default CVPreview;

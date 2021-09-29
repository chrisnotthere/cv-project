const CVEducation = props => {

  return (
    <div className='edu-item'>
      <div>{props.course}</div>
      <div>{`${props.institution} | ${props.educationStart} - ${props.educationEnd}`}</div>
    </div>
  )
}

export default CVEducation;

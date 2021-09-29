const CVExperience = props => {

  return (
    <>
      <div >
        <div className="cv-experience">
          <div className="cv-experience-header">
            <div className="cv-experience-company">
              <p>{props.company}</p>
            </div>
            <div className="cv-experience-info">
              <p className='cv-experience-position'>{props.position}</p>
              <p style={{ 'fontWeight': 'bold' }}>{`${props.workStart} - ${props.workEnd}`}</p>
            </div>
          </div>
          <div className="cv-experience-description">
            <p>{props.workDescription}</p>
          </div>
        </div>
      </div>
      <p>{props.description}</p>
    </>
  )
}

export default CVExperience;

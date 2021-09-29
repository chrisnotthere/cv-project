const Education = props => {

  return (
    <div className='education'>

        <div className="form-group">
          <label 
            className="form-control-label" 
            htmlFor="course">
            Course / Program
          </label>
          <input 
            value={props.course} 
            onChange={(e) => props.handleEducationChange(e, 'course', props.id)}
            placeholder="Course / Program" 
            type="text" 
            className="form-control" 
            id="course" 
            name="course" 
            required
          />
        </div>

        <div className="form-group">
          <label 
            className="form-control-label" 
            htmlFor="institution">
            Institution
          </label>
          <input 
            value={props.institution} 
            onChange={(e) => props.handleEducationChange(e, 'institution', props.id)}
            placeholder="Institution" 
            type="text" 
            className="form-control" 
            id="institution" 
            name="institution" 
            required
          />
        </div>

        <div className="form-group">
          <label 
            className="form-control-label" 
            htmlFor="start">
            Start Date
          </label>
          <input 
            value={props.educationStart} 
            onChange={(e) => props.handleEducationChange(e, 'educationStart', props.id)}
            placeholder="Start Date" 
            type="text" 
            className="form-control" 
            id="start" 
            name="start" 
            required
          />
        </div>

        <div className="form-group">
          <label 
            className="form-control-label" 
            htmlFor="end">
            End Date
          </label>
          <input 
            value={props.educationEnd} 
            onChange={(e) => props.handleEducationChange(e, 'educationEnd', props.id)}
            placeholder="End Date" 
            type="text" 
            className="form-control" 
            id="end" 
            name="end" 
            required
          />
        </div>

        <br/>
        <div className='buttons'>
          <button onClick={(e) => props.removeEducation(e, props.id)}>Delete</button>
        </div>
        <br/>

    </div>
  )
  
}

export default Education;

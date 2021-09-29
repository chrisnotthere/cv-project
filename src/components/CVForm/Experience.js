const Experience = props => {

  return (
    <div className='experience'>
        
        <div className="form-group">
          <label className="form-control-label" >
            Company
          </label>
          <input 
            value={props.company} 
            onChange={(e) => props.handleExperienceChange(e, 'company', props.id)}
            placeholder="Company" 
            type="text" 
            className="form-control" 
            required
          />
        </div>

        <div className="form-group">
          <label className="form-control-label">
            Position
          </label>
          <input 
            value={props.position} 
            onChange={(e) => props.handleExperienceChange(e, 'position', props.id)}              
            placeholder="Position" 
            type="text" 
            className="form-control" 
            required
          />
        </div>

        <div className="form-group">
          <label className="form-control-label">
            Start Date
          </label>
          <input 
            value={props.workStart} 
            onChange={(e) => props.handleExperienceChange(e, 'workStart', props.id)}              
            placeholder="Start Date" 
            type="text" 
            className="form-control" 
            required
          />
        </div>

        <div className="form-group">
          <label className="form-control-label">
            End Date
          </label>
          <input 
            value={props.workEnd} 
            onChange={(e) => props.handleExperienceChange(e, 'workEnd', props.id)}              
            placeholder="End Date" 
            type="text" 
            className="form-control" 
            required
          />
        </div>

        <div className="form-group-bottom">
          <label className="form-control-label">
            Description
          </label>
          <input 
            value={props.workDescription}
            onChange={(e) => props.handleExperienceChange(e, 'workDescription', props.id)}              
            placeholder="Description" 
            type="text" 
            className="form-control" 
            required
          />
        </div>

        <div className='buttons'>
          <button onClick={(e) => props.removeWorkExp(e, props.id)}>Delete</button>
        </div>
    </div>
  )
}

export default Experience;

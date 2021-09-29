const Personal = props => {

  return (
    <div className='personal'>

        <div className="form-group">
          <label 
            className="form-control-label" 
            htmlFor="name">
            Name
          </label>
          <input 
            value={props.name} 
            onChange={(e) => props.handlePersonalChange(e, 'name')}
            placeholder="Name" 
            type="text" 
            className="form-control" 
            id="name" 
            name="name" 
            required
          />
        </div>

        <div className="form-group">
          <label 
            className="form-control-label" 
            htmlFor="title">
            Title
          </label>
          <input 
            value={props.title} 
            onChange={(e) => props.handlePersonalChange(e, 'title')}
            placeholder="Title" 
            type="text" 
            className="form-control" 
            id="title" 
            name="title" 
            required
          />
        </div>

        <div className="form-group">
          <label 
            className="form-control-label" 
            htmlFor="phone">
            Phone
          </label>
          <input 
            value={props.phone} 
            onChange={(e) => props.handlePersonalChange(e, 'phone')}
            placeholder="Phone" 
            type="text" 
            className="form-control" 
            id="phone" 
            name="phone" 
            required
          />
        </div>

        <div className="form-group">
          <label 
            className="form-control-label" 
            htmlFor="email">
            Email
          </label>
          <input 
            value={props.email} 
            onChange={(e) => props.handlePersonalChange(e, 'email')}
            placeholder="Email" 
            type="text" 
            className="form-control" 
            id="email" 
            name="email" 
            required
          />
        </div>

        <div className="form-group">
          <label 
            className="form-control-label" 
            htmlFor="location">
            Location
          </label>
          <input 
            value={props.location} 
            onChange={(e) => props.handlePersonalChange(e, 'location')}
            placeholder="Location" 
            type="text" 
            className="form-control" 
            id="location" 
            name="location" 
            required
          />
        </div>

        <div className="form-group-bottom">
          <label 
            className="form-control-label" 
            htmlFor="description">
            Description
          </label>
          <input 
            value={props.description} 
            onChange={(e) => props.handlePersonalChange(e, 'description')}
            placeholder="Description..." 
            type="text" 
            className="form-control" 
            id="description" 
            name="description" 
            required
          />
        </div>
    </div>
  )
}

export default Personal;

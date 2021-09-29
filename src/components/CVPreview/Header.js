const Header = (props) => {

  return (
    <>
      <div className="cvheader">
        <div>
          <p className="name">{props.name}</p>
          <p className="title">{props.title}</p>
        </div>
        <div className="personal-info">
          <p>{props.phone}</p>
          <p>{props.email}</p>
          <p>{props.location}</p>
        </div>
      </div>
      <p className='personal-description' style={{ 'fontStyle': 'italic' }}>{props.description}</p>
    </>
  )
}

export default Header;

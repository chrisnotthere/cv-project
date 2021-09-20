import '../../styles/CVPreview.css';
import React, {Component} from "react";
import Header from './Header';

class CVPreview extends Component {

  render() {
    return (
      <div className='cv-preview'>
        <Header 
          name={this.props.name}
          title={this.props.title}
          phone={this.props.phone}
          email={this.props.email}
          location={this.props.location}
          description={this.props.description}
        />

      </div>
    )
  }
}

export default CVPreview;

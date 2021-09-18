import '../styles/Main.css';
import React, {Component} from "react";
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

class Main extends Component {
  constructor(props) {
    super(props)

    // this is the default CV info, before the user enters any information
    this.state = {
      name: 'John Wick',
      description: 'default description'
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`${this.state.name} ${this.state.description}`)
  // }

  render() {
    return (
      <main>
        <CVForm 
          name={this.state.name}
          description={this.state.description}
          handleNameChange={this.handleNameChange.bind(this)}
          handleDescriptionChange={this.handleDescriptionChange.bind(this)}
          //HandleSubmit={() => this.handleSubmit()}
        />
        <CVPreview 
          name={this.state.name} 
          description={this.state.description}
        />
      </main>
    )
  }
}

export default Main;


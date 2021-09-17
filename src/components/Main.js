import '../styles/Main.css';
import React, {Component} from "react";
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

class Main extends Component {

  render() {
    return (
      <main>
        <CVForm data='test' />
        <CVPreview data='test' />
      </main>
    )
  }
}

export default Main;

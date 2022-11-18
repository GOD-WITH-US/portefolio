import React, { Component } from 'react';
import ProgressBar from '../knowledges/ProgressBar'

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Html", xp: 1 },
      { id: 2, value: "Css", xp: 1 },
      { id: 3, value: "Php", xp: 0.3 },
      { id: 4, value: "Javascript", xp: 0.8 }
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.7 },
      { id: 2, value: "Bootstrap", xp: 0.2 },
      { id: 3, value: "Sass", xp: 0.4 },
      { id: 4, value: "Semantic Ui", xp: 0.1 }
    ]



  }
  render() {
 
    let { languages, frameworks } = this.state;


    return (
      <div className="languagesFrameworks">
        <ProgressBar
          paramlanguage={languages}
          title="languages"
          className="languagesDispconsole.log(props);lay"

        />
        <ProgressBar
         paramlanguage={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"

        />
      </div>
    );
  }
}

export default Languages;

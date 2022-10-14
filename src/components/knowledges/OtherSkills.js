import React from 'react';

const OtherSkills = () => {
  return (
    <div className="otherSkills">
    <h3>Autres compétences </h3>
    <div className="list">
      <ul>
        <li><i className="fab fa-github" ></i><span> Github</span></li>
        <li><i className="fas fa-c" ></i><span> Canva</span></li>
        <li><i className="fas fa-w" ></i><span> Whimsical</span></li>
        <li><i className="fa fa-arrow-rotate-right" ></i><span> Méthodes agiles</span></li>
        <br />
        <li><i className="fa fa-loader"></i> Skills loading..</li>
        
      </ul>
    </div>
  </div>
  );
};

export default OtherSkills;

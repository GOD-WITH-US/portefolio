import React from 'react';
import Navigation from '../components/Navigation';
import './_home.scss';
const Home = () => {
  return (
    <div className="home" >
     <Navigation/>
     <div className="homeContent">
       <div className="content">
        
         <div className="pdf">
         <a href="lien cv pdf" target="_blank">Télécharger mon CV</a>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Home;

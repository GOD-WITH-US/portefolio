// == Import
import React from 'react';
import { Route, Routes } from 'react-router-dom';
//Composants
import Home from '../../pages /Home';
import Contact from '../../pages /Contact';
import Knowledges from '../../pages /Knowledges';
import Portfolio from '../../pages /Portfolio';
import NotFound from '../../pages /NotFound';

// data, styles et utilitaires
import '../styles.scss';


// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/Competences" element={Knowledges()} />
        <Route path="/Portfolio" element={Portfolio()} />
        <Route path="/Contact" element={Contact()} />
        <Route path="*" element={NotFound()} />
      </Routes>
    </div>
  );
}

// == Export
export default App;

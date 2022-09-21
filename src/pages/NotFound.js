import React from 'react';
import { NavLink } from 'react-router-dom';
import './_notFound.scss'

import '../components/styles.scss';
const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existe pas !</h3>
        <NavLink  exact="true" to="/">
          <i className="fas fa-home">
            <span> Acceuil</span>
          </i>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;

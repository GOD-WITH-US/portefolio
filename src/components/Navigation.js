import React from 'react';
import { NavLink } from 'react-router-dom';
import './_navigation.scss'

const Navigation = () => {

  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="images/profil.jpg" alt="profil-pic" />
          <h3>Emmanuel Cronenberger</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact="true" to="/Competences" >
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact="true" to="/Portfolio" >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact="true" to="/Contact" >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>

        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/emmanuel-cronenberger-32122b220/" target="_blank"
              rel="noopener noreferrer"><i className="fab fa-linkedin">

              </i>

            </a>
          </li>

          <li>
            <a href="https://github.com/GOD-WITH-US" target="_blank"
              rel="noopener noreferrer"><i className="fab fa-github">

              </i>

            </a>
          </li>

          <li>
            <a href="https://twitter.com/ECronenberger" target="_blank"
              rel="noopener noreferrer"><i className="fab fa-twitter">

              </i>

            </a>
          </li>

          <li>
            <a href="https://wa.me/33778404737" target="_blank"
              rel="noopener noreferrer"><i className="fab fa-whatsapp">

              </i>

            </a>
          </li>

        </ul>
        <div className="signature">
          <h4 className='citation'> Il est plus facile de renoncer à une passion que de la maîtriser.</h4>
        </div>

      </div>
    </div>
  );
};

export default Navigation;

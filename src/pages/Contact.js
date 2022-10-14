import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard } from 'react-copy-to-clipboard';
import '../components/styles.scss';

const Contact = () => {
  return (
    <div className="contact">
    <Navigation />
    <div className="contactContent">
      <div className="header"></div>
      <div className="contactBox">
        <h1>Contactez-moi</h1>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>Wittisheim</span>
          </li>
          <li>
            <i className="fas fa-mobile-alt"></i>
            <CopyToClipboard text="0778404737">
              <span
                className="clickInput"
                onClick={() => {
                  alert("Téléphone copié !");
                }}
              >
                0778404737
              </span>
            </CopyToClipboard>
          </li>

          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Contact;

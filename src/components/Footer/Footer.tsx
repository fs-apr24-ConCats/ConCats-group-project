import React from 'react';
import './Footer.scss'
import logo from '../../img/Logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer__links">
          <a className="link" href="#">
            GitHub
          </a>
          <a className="link" href="#">
            Contacts
          </a>
          <a className="link" href="#">
            Rights
          </a>
        </div>
        <div className="footer__backToTop">
          <a className='footer__textInfo'>Back to top</a>
          <a href='#' className="arrow"></a>
        </div>
      </div>
    </footer>
  );
};

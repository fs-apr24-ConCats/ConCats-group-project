// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../img/Logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.footer__links}>
          <a className={styles.link} href="#">
            GitHub
          </a>
          <a className={styles.link} href="#">
            Contacts
          </a>
          <a className={styles.link} href="#">
            Rights
          </a>
        </div>
        <div className={styles.footer__backToTop}>
          <a className={styles.footer__textInfo}>Back to top</a>
          <a href='#' className={styles.arrow}></a>
        </div>
      </div>
    </footer>
  );
};

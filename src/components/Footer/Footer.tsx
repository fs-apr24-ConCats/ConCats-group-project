import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

export const Footer: React.FC = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Logo />
          <div className={styles.footer__links}>
            <a className={styles.link} href="#">
              GitHub
            </a>
            <Link className={styles.link} to="/contacts">
              Contacts
            </Link>
            <a className={styles.link} href="#">
              Rights
            </a>
          </div>
          <div className={styles.footer__backToTop}>
            <a onClick={scrollToTop} className={styles.footer__textInfo}>
              Back to top
            </a>
            <a onClick={scrollToTop} className={styles.arrow}></a>
          </div>
        </div>
      </footer>
    </>
  );
};

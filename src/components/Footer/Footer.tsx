import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import classNames from 'classnames';
import { useTheme } from '../../contexts/ThemeContext';


export const Footer: React.FC = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  const { theme } = useTheme();

  return (
    <>
      <footer className={classNames(styles.footer, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
        })}
      >
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

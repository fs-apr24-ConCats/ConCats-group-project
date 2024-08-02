import React, { useState } from 'react';
import classes from './Header.module.scss';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Favorites } from '../Favorites';
import { Cart } from '../Cart';
import { Menu } from '../../modules/Menu';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { i18n } = useTranslation();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <header className={classes.Header}>
      <div className={classes.Header__left}>
        <div className={classes.Header__logo}>
          <Logo />
        </div>

        <div className={classes.Header__nav}>
          <Nav />
        </div>
      </div>

      <div className={classes.Header__right}>
        <div className={classes.nav_LngWrap}>
          <button onClick={changeLanguage} className={classes.nav_LngBtn}>
            {i18n.language === 'en' ? 'UA' : 'EN'}
          </button>
        </div>
        <div className={classes.Header__favorites}>
          <Favorites />
        </div>

        <div className={classes.Header__cart}>
          <Cart />
        </div>

        <div className={classes.Header__menu}>
          <button
            type="button"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            <img
              src={isMenuOpen ? 'img/icons/Close.svg' : 'img/icons/Menu.svg'}
              alt={isMenuOpen ? 'close-menu' : 'burger-menu'}
            />
          </button>
        </div>
      </div>
      <Menu
        isOpen={isMenuOpen}
        onClickClose={handleToggleMenu}
        favouritesCount={0}
        cartCount={0}
      />
    </header>
  );
};

import React, { useState } from 'react';
import classes from './Header.module.scss';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Favorites } from '../Favorites';
import { Cart } from '../Cart';
import { Menu } from '../../modules/Menu'
import { Settings } from '../Settings';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(prevState => !prevState);
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
      <div className={classes.Header__settings}>
        <Settings isOpen={isSettingsOpen} onToggle={toggleSettings} />
      </div>
        <div className={classes.Header__favorites}>
          <Favorites />
        </div>
        
        <div className={classes.Header__cart}>
          <Cart />
        </div>

        <div className={classes.Header__menu}>
          <button type="button" onClick={handleToggleMenu} aria-label="Toggle menu">
          <img 
              src={isMenuOpen ? "img/icons/Close.svg" : "img/icons/Menu.svg"} 
              alt={isMenuOpen ? "close-menu" : "burger-menu"}
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

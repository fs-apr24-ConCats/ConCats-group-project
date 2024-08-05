import React from 'react';
import classes from './Nav.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../../pages/pages';
import { useTheme } from '../../contexts/ThemeContext';

export const Nav: React.FC = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return classNames([classes.Nav__item], { [classes.active]: isActive });
  };
  const { theme } = useTheme();

  return (
    <nav className={classNames(classes.Nav, {
      [classes.lightTheme]: theme === 'light',
      [classes.darkTheme]: theme === 'dark',
    })}>
      {PAGES.map(page => (
        <NavLink
          to={`/${page === 'home' ? '' : page}`}
          key={page}
          className={activeClass}
          id={`/${page === 'home' ? '' : page}`}
        >
          {page}
        </NavLink>
      ))}
    </nav>
  );
};
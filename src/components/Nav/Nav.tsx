import React from 'react';
import classes from './Nav.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../../pages/pages';

import { useTranslation } from 'react-i18next';

export const Nav: React.FC = () => {
  const { t } = useTranslation();

  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return classNames([classes.Nav__item], { [classes.active]: isActive });
  };

  return (
    <nav className={classes.Nav}>
      {PAGES.map(page => (
        <NavLink
          to={`/${page === 'home' ? '' : page}`}
          key={page}
          className={activeClass}
          id={`/${page === 'home' ? '' : page}`}
        >
          {t(`nav.${page}`)}
        </NavLink>
      ))}
    </nav>
  );
};

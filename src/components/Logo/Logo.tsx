import React from 'react';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link to="/">
    <button type="button">
      <div className={classes.Logo}>
        <img src="../../../public/img/icons/OK.png" className={classes.Logo__img} alt="Logo" />
      </div>
    </button>
  </Link>
);
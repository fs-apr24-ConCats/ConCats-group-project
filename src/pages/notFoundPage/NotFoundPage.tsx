import React from 'react';
import './NotFoundPage.scss';
// import notFoundImg from '../../../public/img/page-not-found.png';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pageNotFound__wrapper">
      <div className="pageNotFound">
        <div className="pageNotFound__image-wrapper">
          <img
            src="img/404-not-found.png"
            alt="page-not-found"
            className="pageNotFound__img"
          />
        </div>
        <h1 className="pageNotFound__title">Oooops! Page not found...</h1>
      </div>
    </div>
  );
};

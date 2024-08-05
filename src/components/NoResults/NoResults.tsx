import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NoResults.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  imgUrl?: string;
  withoutLink?: boolean;
};

export const NoResults: React.FC<Props> = ({
  title,
  imgUrl = 'img/product-not-found.png',
  withoutLink,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classes.NoResults}>
      <h2 className={classes.NoResults__title}>{title}</h2>

      <img src={imgUrl} className={classes.NoResults__img} alt="404" />

      {!withoutLink && (
        <Link to="/" className={classes.NoResults__button}>
          {t('buttons.goHome')}
        </Link>
      )}
    </div>
  );
};

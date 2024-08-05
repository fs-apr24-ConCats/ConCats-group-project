import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ModalContent.module.scss';

type Props = {
  closeModal: () => void;
};

export const ModalContent: React.FC<Props> = ({ closeModal }) => {
  const { t } = useTranslation();
  return (
    <div className={classes.ModalContent}>
      <h2>
        {t('cart.checkoutNot')}
        <br />
        {t('cart.seeYou')}
      </h2>

      <button className={classes.ModalContent__button} onClick={closeModal}>
        Ok
      </button>
    </div>
  );
};

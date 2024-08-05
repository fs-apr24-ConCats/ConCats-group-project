import React from 'react';
import { Item } from '../../types';
import styles from './ItemTechDetails.module.scss';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';

interface Props {
  item: Item;
}

export const ItemTechDetails: React.FC<Props> = ({ item }) => {
  const { theme } = useTheme();
  
  return (
    <>
      <h3 className={styles.title_tech}>
        Tech specs
      </h3>

      <div className={classNames(styles.product__info, styles.info, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
        })}
        >
        <div className={styles.info__row}>
          <p className={styles['info-key']}>Screen</p>
          <p className={styles['info-value']}>{item?.screen}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>Resolution</p>
          <p className={styles['info-value']}>{item?.resolution}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>Processor</p>
          <p className={styles['info-value']}>{item?.processor}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>RAM</p>
          <p className={styles['info-value']}>{item?.ram}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>Built in memory</p>
          <p className={styles['info-value']}>{item?.capacity}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>Camera</p>
          <p className={styles['info-value']}>{item?.camera}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>Zoom</p>
          <p className={styles['info-value']}>{item?.zoom}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>Cell</p>
          <p className={styles['info-value']}>{item?.cell}</p>
        </div>
      </div>
    </>
  )
}

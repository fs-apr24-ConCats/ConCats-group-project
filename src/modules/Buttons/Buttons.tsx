import React from 'react';
import classNames from 'classnames';
import styles from './Buttons.module.scss';
import { Product } from '../../types/Product';
import { getId } from '../../utils/getId';

type Props = {
  category: string;
  id: string;
  products: Product[];
  favourites: Product[];
  cart: Product[];
  onAddToFavourites: (id: string) => void;
  onAddToCart: () => void;
};

export const Buttons: React.FC<Props> = ({
  category,
  id,
  products,
  favourites,
  cart,
  onAddToFavourites,
  onAddToCart,
}) => {
  const hasInCart = cart.some(item => item.id === getId(category, products, id));

  const onClickFavHandle = () => {
    const itemId = getId(category, products, id);
    if (itemId !== undefined) {
      onAddToFavourites(itemId.toString());
    }
  };

  const onClickCart = () => {
    onAddToCart();
  };

  return (
    <div className={classNames(styles.buttons)}>
      {hasInCart ? (
        <button
          className={classNames(
            styles.buttons__button,
            styles['buttons__button-cart'],
            styles['buttons__button-cartActive']
          )}
          onClick={onClickCart}
        >
          Added
        </button>
      ) : (
        <button
          className={classNames(
            styles.buttons__button,
            styles['buttons__button-cart']
          )}
          onClick={onClickCart}
        >
          Add to cart
        </button>
      )}

      <button
        className={classNames(
          styles.buttons__button,
          styles['buttons__button-fav'],
          {
            [styles['buttons__button-fav-selected']]: favourites.some(item => item.id === getId(category, products, id)),
          }
        )}
        onClick={onClickFavHandle}
      />
    </div>
  );
};

import React from 'react';
import classNames from 'classnames';
import styles from './Buttons.module.scss';
import { Product } from '../../types/Product';
import { getId } from '../../utils/getId';
import { useCartAndFavouritsContextContext } from '../../components/controllers/CartAndFavourits/useCartAndFavouritsContext';

type Props = {
  id: string;
  category: string;
  product: Product;
  products: Product[];
  favourites: Product[];
  onAddToFavourites: (id: string) => void;
};

export const Buttons: React.FC<Props> = ({
  id,
  category,
  product,
  products,
  favourites,
  onAddToFavourites,
}) => {
  const { cart, onAddToCart } = useCartAndFavouritsContextContext();

  const hasInCart = cart.some(item => item.id === getId(category, products, id));

  const onClickFavHandle = () => {
    const itemId = getId(category, products, id);
    if (itemId !== undefined) {
      onAddToFavourites(itemId.toString());
    }
  };

  const onClickCart = () => {
    onAddToCart(product);
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

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CartPage.module.scss';
import { NoResults } from '../../components/NoResults';
import { CartItem } from './components/CartItem';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Modal } from './components/Modal';
import { ModalContent } from './components/ModalContent';
import { v4 as uuidv4 } from 'uuid';
import { useCartAndFavouritsContextContext } from '../../components/controllers/CartAndFavourits/useCartAndFavouritsContext';
import { CartActions } from '../../types';

export const CartPage: React.FC = () => {
  const {cart, onUpdateCart } = useCartAndFavouritsContextContext();
  const [sum, setSum] = useState(0);
  const [amount, setAmount] = useState(0);
  const [modalVisibility, setModalVisibility] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const validCart = cart.filter(
      item =>
        item.price !== undefined &&
        item.amount !== undefined &&
        item.amount > 0,
    );


    const total = validCart.reduce((p, item) => p + item.price * item.amount, 0);

    const quantity = validCart.reduce((p, item) => p + item.amount, 0);

    setSum(total);
    setAmount(quantity);

  }, [cart]);


  return (
    <div className={classes.CartPage}>
      <Breadcrumbs />

      {!cart.length && (
        <NoResults title={t('empty.cart')} imgUrl="img/cart-is-empty.png" />
      )}

      {cart.length > 0 && (
        <div className={classes.CartPage__container}>
          <h2>Cart</h2>

          <div className={classes.CartPage__content}>
            <div className={classes.CartPage__list}>
              {cart.map(item => (
                <CartItem
                  key={uuidv4()}
                  product={item}
                  increaseAmount={() => onUpdateCart(item, CartActions.Increase)}
                  decreaseAmount={() => onUpdateCart(item, CartActions.Decrease)}
                />
              ))}
            </div>

            <div className={classes.CartPage__total}>
              <div className={classes.CartPage__sum}>{`$${sum}`}</div>
              <div className={classes.CartPage__number}>
                {`Total for ${amount} item${amount === 1 ? '' : 's'}`}
              </div>
              <div className={classes.CartPage__line} />
              <button
                type="button"
                className={classes.CartPage__button}
                onClick={() => setModalVisibility(true)}
              >
                Checkout
              </button>

              <Modal isOpen={modalVisibility}>
                <ModalContent closeModal={() => setModalVisibility(false)} />
              </Modal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

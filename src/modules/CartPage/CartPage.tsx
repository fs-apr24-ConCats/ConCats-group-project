import { useState } from 'react';
import classes from './CartPage.module.scss';
import { NoResults } from '../../components/NoResults';
import { CartItem } from './components/CartItem';
import { Link } from 'react-router-dom';

export const CartPage: React.FC = () => {
    const [count, setCount] = useState(1);

    return (
        <div className={classes.CartPage}>

          <Link to='/' className={classes.home__link}>
            <img src="img/icons/Home.svg" alt="" /> {'>'} Cart
          </Link>

          {count === 0 && (
            <NoResults title="Your cart is empty" imgUrl="img/cart-is-empty.png" />
          )}
            
          {count > 0 && (
            <div className={classes.CartPage__container}>
              <h2>Cart</h2>

            <div className={classes.CartPage__content}>
              <div className={classes.CartPage__list}>
                <CartItem />
                <CartItem />
                <CartItem />
              </div>

              <div className={classes.CartPage__total}>
              <div className={classes.CartPage__sum}>{`1000 $`}</div>
              <div className={classes.CartPage__number}>
                {`Total for ${count} item${count === 1 ? '' : 's'}`}
              </div>
              <div className={classes.CartPage__line} />
              <button
                type="button"
                className={classes.CartPage__button}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
import React from "react";
import classes from './CartItem.module.scss';
import { Link } from "react-router-dom";
import { Icon } from "../../../../components/Icon";
import { IconList } from "../../../../components/Icon/utils/IconList";

export const CartItem: React.FC = () => {
    return (
        <article className={classes.CartItem}>
          <div className={classes.CartItem__container}>
            <button
              className={classes.CartItem__remove}
              type="button"
            >
              <img src="img/icons/Close-grey.svg" alt="Remove" />
            </button>
    
            <Link
              className={classes.CartItem__link}
              to={'/'}
              title="More details"
            >
              <div className={classes['CartItem__img-wrapper']}>
                <img className={classes.CartItem__image} src="img/phones/apple-iphone-7/black/00.webp" alt='apple-iphone-7' />
              </div>
    
              <h5 className={classes.CartItem__title}>Apple iphone 7 64gb</h5>
            </Link>
          </div>
    
          <div className={classes.CartItem__container}>
            <div className={classes['CartItem__quantity-wrapper']}>

            <Icon icon={IconList.minus} />
            <span className={classes.CartItem__quantity}>1</span>
            <Icon icon={IconList.plus} />

            </div>
            <p className={classes.CartItem__price}>200$</p>
          </div>
        </article>
      );
}
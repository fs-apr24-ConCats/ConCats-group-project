import React, { useEffect, useState } from 'react';
import classes from './FavoritesPage.module.scss';
import { useLocaleStorage } from '../../utils/useLocaleStorage';
import { favouritesProduct } from '../../types';
import { ProductCard } from '../../components/ProductCard';


export const FavouritesPage: React.FC = () => {
    const [favourites, setFavourites] = useLocaleStorage<favouritesProduct[]>(
      'favItem',
      [],
    );
    const [amount, setAmount] = useState(0);
    useEffect(() => {
      const validCard = favourites.filter(item => item.price !== undefined);
  
      if (validCard.length !== favourites.length) {
        setFavourites(validCard);
      }
      const quantity = validCard.reduce((p, item) => p + item.amount, 0);
      setAmount(quantity);
    }, [favourites, setFavourites]);
  
    return (
      <>
        <span className={classes.spanNav}> Home{' > '}Favourites</span>
        <div className={classes.Favourites}>
          <div>
            <h1 className={classes.titleFav}>Favourites</h1>
            <span className={classes.items}>{amount}</span>
          </div>
  
          <div className={classes.fav__container}>
            {favourites.map(product => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </>
    );
  };
  
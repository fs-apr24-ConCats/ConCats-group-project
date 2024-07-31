import React from 'react';
import { CartProduct, Product } from '../../../types';

export interface CartAndFavouritsContextType {
  cart: CartProduct[];
  onAddToCart: (product: Product) => void;
}

export const CartAndFavouritsContext = React.createContext<CartAndFavouritsContextType>({
  cart: [],
  onAddToCart: () => {},
});

import React from 'react';
import { Product } from '../../types';


export interface ProductsContextType {
  products: Product[];
}

export const ProductsContext = React.createContext<ProductsContextType>({
  products: []
});

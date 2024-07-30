import React, { useEffect, useMemo, useState } from 'react';
import { Product } from '../../types';
import { getProducts } from '../../api/dataFromServer';
import { ProductsContext } from './ProductsContext';

interface Props {
  children: React.ReactNode;
}

export const ProductsContextProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
    .then(setProducts)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const values = useMemo(
    () => ({
      products,
    }),
    [products],
  );

  return (
    <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
  );
};

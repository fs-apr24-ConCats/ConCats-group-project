import React from "react"
import classes from './HomePage.module.scss';
import { ProductCard } from '../../components/ProductCard';
import { Product } from '../../types/Product';

export const HomePage: React.FC = () => {
  const exampleProduct: Product = {
    id: 0,
    category: "electronics",
    itemId: "example-id",
    name: "Example Product",
    fullPrice: 1000,
    price: 800,
    screen: "6.1 inches",
    capacity: "128GB",
    color: "Black",
    ram: "4GB",
    year: 2022,
    image: "example-image-url.jpg",
  };

  const handleAddToFavourites = (id: string) => {
    console.log(`Added to favourites: ${id}`);
  };

  const handleAddToCart = (id: string) => {
    console.log(`Added to cart: ${id}`);
  };

    return(
      <>
        <h1 className={classes.title}>Header ↑</h1>
        <ProductCard
          product={exampleProduct}
          products={[exampleProduct]}
          favourites={[exampleProduct]}
          cart={[]}
          onAddToFavourites={handleAddToFavourites}
          onAddToCart={handleAddToCart}
       />
      </>
    )

}
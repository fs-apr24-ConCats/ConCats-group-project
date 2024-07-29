import React from 'react';
import Slider from 'react-slick';
import { ProductCard } from '../ProductCard';
import { useProductsContext } from '../../controllers/products';
import './CarouselCards.scss';

const handleAddToFavourites = (id: string) => {
  console.log(`Added to favourites: ${id}`);
};

const handleAddToCart = (id: string) => {
  console.log(`Added to cart: ${id}`);
};

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomNextArrow: React.FC<Props> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} carousel-arrow carousel-arrow--next`}
      style={{ ...style }}
      onClick={onClick}
    >
      →
    </div>
  );
};

const CustomPrevArrow: React.FC<Props> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} carousel-arrow carousel-arrow--prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      ←
    </div>
  );
};
export const CarouselCards: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const { products } = useProductsContext();

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <ProductCard
          product={products[0]}
          products={products}
          favourites={[products[3]]}
          cart={[]}
          onAddToFavourites={handleAddToFavourites}
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          product={products[0]}
          products={products}
          favourites={[products[3]]}
          cart={[]}
          onAddToFavourites={handleAddToFavourites}
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          product={products[0]}
          products={products}
          favourites={[products[3]]}
          cart={[]}
          onAddToFavourites={handleAddToFavourites}
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          product={products[0]}
          products={products}
          favourites={[products[3]]}
          cart={[]}
          onAddToFavourites={handleAddToFavourites}
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          product={products[0]}
          products={products}
          favourites={[products[3]]}
          cart={[]}
          onAddToFavourites={handleAddToFavourites}
          onAddToCart={handleAddToCart}
        />
        <ProductCard
          product={products[0]}
          products={products}
          favourites={[products[3]]}
          cart={[]}
          onAddToFavourites={handleAddToFavourites}
          onAddToCart={handleAddToCart}
        />
      </Slider>
    </div>
  );
};

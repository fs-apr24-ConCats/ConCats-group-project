import React from 'react';
import Slider from 'react-slick';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';
import './CarouselCards.scss';

const exampleProduct: Product = {
  id: 0,
  category: 'electronics',
  itemId: 'example-id',
  name: 'Example Product',
  fullPrice: 1000,
  price: 800,
  screen: '6.1 inches',
  capacity: '128GB',
  color: 'Black',
  ram: '4GB',
  year: 2022,
  image: 'example-image-url.jpg',
};

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
export function CarouselCards() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <ProductCard
            product={exampleProduct}
            products={[exampleProduct]}
            favourites={[exampleProduct]}
            cart={[]}
            onAddToFavourites={handleAddToFavourites}
            onAddToCart={handleAddToCart}
          />
        </div>
        <div>
          <ProductCard
            product={exampleProduct}
            products={[exampleProduct]}
            favourites={[exampleProduct]}
            cart={[]}
            onAddToFavourites={handleAddToFavourites}
            onAddToCart={handleAddToCart}
          />
        </div>
        <div>
          <ProductCard
            product={exampleProduct}
            products={[exampleProduct]}
            favourites={[exampleProduct]}
            cart={[]}
            onAddToFavourites={handleAddToFavourites}
            onAddToCart={handleAddToCart}
          />
        </div>
        <div>
          <ProductCard
            product={exampleProduct}
            products={[exampleProduct]}
            favourites={[exampleProduct]}
            cart={[]}
            onAddToFavourites={handleAddToFavourites}
            onAddToCart={handleAddToCart}
          />
        </div>
        <div>
          <ProductCard
            product={exampleProduct}
            products={[exampleProduct]}
            favourites={[exampleProduct]}
            cart={[]}
            onAddToFavourites={handleAddToFavourites}
            onAddToCart={handleAddToCart}
          />
        </div>
        <div>
          <ProductCard
            product={exampleProduct}
            products={[exampleProduct]}
            favourites={[exampleProduct]}
            cart={[]}
            onAddToFavourites={handleAddToFavourites}
            onAddToCart={handleAddToCart}
          />
        </div>
      </Slider>
    </div>
  );
}

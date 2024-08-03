import React from 'react';
import Slider from 'react-slick';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';
import './CarouselCards.scss';

interface PropsArrow {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomNextArrow: React.FC<PropsArrow> = ({
  className,
  style,
  onClick,
}) => {
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

const CustomPrevArrow: React.FC<PropsArrow> = ({
  className,
  style,
  onClick,
}) => {
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

interface Props {
  products: Product[];
}

export const CarouselCards: React.FC<Props> = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Slider>
    </div>
  );
};

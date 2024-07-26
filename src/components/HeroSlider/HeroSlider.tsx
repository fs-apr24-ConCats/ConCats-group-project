import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.scss';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomNextArrow: React.FC<Props> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow--next`}
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
      className={`${className} custom-arrow custom-arrow--prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      ←
    </div>
  );
};

export const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <Slider {...settings} className="hero-slider">
      <div className="hero-slider__wrap">
        <img
          src="img/banner-iphone.png"
          alt="Phones"
          className="hero-slider__image"
        />
      </div>
      <div className="hero-slider__wrap">
        <img
          src="img/banner-phones.png"
          alt="Phones"
          className="hero-slider__image"
        />
      </div>
      <div className="hero-slider__wrap">
        <img
          src="img/banner-tablets.png"
          alt="Phones"
          className="hero-slider__image"
        />
      </div>
      <div className="hero-slider__wrap">
        <img
          src="img/banner-accessories.png"
          alt="Phones"
          className="hero-slider__image"
        />
      </div>
    </Slider>
  );
};

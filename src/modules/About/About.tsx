import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './About.module.scss';
import { Item } from '../../types';
import { getItems } from '../../api/dataFromServer';
import { ThreeCircles } from 'react-loader-spinner';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const About: React.FC = () => {
  // const navigate = useNavigate();
  const { pathname } = useLocation();
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const navigate = useNavigate();

  const lastWordIndex = pathname.lastIndexOf('-') + 1;
  const colorFromUrl = pathname.slice(lastWordIndex);

  const [activeColor, setActiveColor] = useState(colorFromUrl);

  const category = pathname.split('/')[1];
  const itemId = pathname.split('/')[2];

  console.log('act', activeImage);

  useEffect(() => {
    getItems(category)
      .then(setItems)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const item = items.find(oneItem => oneItem.id === itemId);
  console.log(item);

  // function goBack() {
  //   navigate({ pathname })
  // }

  const handleChangeColor = (color: string) => {
    setActiveColor(color);
    navigate(`${pathname.slice(0, lastWordIndex)}${color}`);
  }

  return (
    <div className={styles.about}>
      <div className={styles.breadCrumbs}>
        <Breadcrumbs />
      </div>
      <Link to="/" className={styles.back_link}>
        <img src="/img/icons/Chevron(ArrowRight).svg" alt="ArrowBack" />
        <p className={styles.back_text}>Back</p>
      </Link>

      {isLoading ? (
        <ThreeCircles
          visible={true}
          height="200"
          width="200"
          color="#ffffff"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass={styles.loader}
        />
      ) : (
        <>
          <h2 className={styles.title}>{item?.name}</h2>

          <section className={styles.images_container}>
            <div className={styles.small_images}>
              {item?.images.map(image => (
                <img
                  key={uuidv4()}
                  src={image}
                  alt={item.name}
                  className={cn(styles.small_img, { 'styles.active': false })}
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>

            <div className={styles.big_image_wrapper}>
              <img
                src={activeImage || item?.images[0]}
                alt={item?.name}
                className={styles.big_image}
              />
            </div>
          </section>

          <section className={styles.choice_params}>
            <div className={styles.colors_params}>
              <p className={styles.colors_text}>Available colors</p>
              <form className={styles.colors}>
                {item?.colorsAvailable.map(color => (
                  <input
                    key={uuidv4()}
                    type="radio"
                    id="option1"
                    name="color"
                    className={styles.radio_color}
                    style={{backgroundColor : color}}
                    value={color}
                    onChange={() => handleChangeColor(color)}
                  />
                ))}
              </form>
            </div>

            <div className={styles.colors_params}>
              <p className={styles.colors_text}>Select capacity</p>
              
            </div>
          </section>

        </>
      )}
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import styles from './Catalog.module.scss';
import { Pagination } from '../../components/Pagination';
import { Product } from '../../types';
import { getProducts } from '../../api/dataFromServer';
import { ThreeCircles } from 'react-loader-spinner';
// import { ProductCard } from '../../components/ProductCard';

export const Catalog: React.FC = () => {
  // const [items, setItems] = useState<Item[]>([]);
  // const [isLoadingItem, setIsLoadingItem] = useState(true);
  

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })
      .finally(() => setIsLoading(false));
  }, []);


  console.log(products);
  // const category = pathname.split('/')[1];

  // useEffect(() => {
  //   getItems(category)
  //     .then(setItems)
  //     .catch(error => {
  //       console.error('There was a problem with the fetch operation:', error);
  //     })
      // .finally(() => setIsLoadingItem(false));
  // }, []);

  // const ALL_OPTIONS = { 4: 4, 8: 8, 16: 16, all: items.length };
  // const [itemsPerPage, setItemsPerPage] = useState(ALL_OPTIONS.all);

  // const changeItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setItemsPerPage(+event.target.value);
    // setCurrentPage(1);
  // };

  return (
    <div className={styles.catalog}>
      <div className={styles.breadCrumbs}></div>

      <h1 className={styles.catalog_title}>Mobile phones</h1>
      {/* <p className={styles.amount}>{`${items.length} phones`}</p> */}
      <div className={styles.filters}>
        <div className={styles.sort}>Sort by</div>
        {/* <select
          id="perPageSelector"
          className="form-control"
          value={itemsPerPage}
          onChange={event => changeItemsPerPage(event)}
        >
          {Object.entries(ALL_OPTIONS).map(([key, value]) => (
            <option key={value} value={value}>
              {key}
            </option>
          ))}
        </select> */}
      </div>

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
          <div className={styles.card_holder}>
          <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
          </div>

          <Pagination
          //  total={phones.length}
          //  perPage={itemsPerPage}
          // currentPage={currentPage}
          // onPageChange={num => setCurrentPage(num)}
          />
        </>
      )}
    </div>
  );
};

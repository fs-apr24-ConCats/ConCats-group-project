import React, { useEffect, useState } from 'react';
import styles from './Catalog.module.scss';
import { Pagination } from '../../components/Pagination';
import { Product } from '../../types';
import { getProducts } from '../../api/dataFromServer';
import { ThreeCircles } from 'react-loader-spinner';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';

const sortProducts = (products: Product[], sortBy: string) => {
  const sortedProducts = products;

  if (sortBy === 'newest') {
    return sortedProducts.sort(
      (product1, product2) => product2.year - product1.year,
    );
  }

  if (sortBy === 'alphabetically') {
    return sortedProducts.sort((product1, product2) =>
      product1.name.localeCompare(product2.name),
    );
  }

  if (sortBy === 'cheapest') {
    return sortedProducts.sort(
      (product1, product2) => product1.price - product2.price,
    );
  }

  return sortedProducts;
};

export const Catalog: React.FC = () => {
  // const [items, setItems] = useState<Item[]>([]);
  // const [isLoadingItem, setIsLoadingItem] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleAddToFavourites = (id: string) => {
    console.log(`Added to favourites: ${id}`);
  };

  const handleAddToCart = (id: string) => {
    console.log(`Added to cart: ${id}`);
  };

  const category = pathname.split('/')[1];

  const filteredProducts = products.filter(
    product => product.category === category,
  );

  const ALL_OPTIONS = { 4: 4, 8: 8, 16: 16, all: filteredProducts.length };
  const SORT_BY_OPTIONS = {
    Newest: 'newest',
    Alphabetically: 'alphabetically',
    Cheapest: 'cheapest',
  };

  const [itemsPerPage, setItemsPerPage] = useState(ALL_OPTIONS.all);
  const [sortBy, setSortBy] = useState(SORT_BY_OPTIONS.Newest);
  const [searchParams, setSearchParams] = useSearchParams();

  const changeItemsPerPage = (value: string) => {
    setItemsPerPage(+value);
    const params = new URLSearchParams(searchParams);
    params.set('itemsPerPage', value);
    setSearchParams(params);
    // setCurrentPage(1);
  };

  const handleSortBy = (value: string) => {
    setSortBy(value);
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    setSearchParams(params);
  };

  const sortedProducts = sortProducts(filteredProducts, sortBy);

  return (
    <div className={styles.catalog}>
      <div className={styles.breadCrumbs}></div>

      <h1 className={styles.catalog_title}>{category}</h1>
      <p className={styles.amount}>{`${sortedProducts.length} models`}</p>
      <div className={styles.filters}>
        <div className={styles.sort_wrap}>
          <p className={styles.sort}>Sort by</p>
          <select
            id="sortBy"
            className={styles.sortFormControl}
            value={sortBy}
            onChange={event => handleSortBy(event.target.value)}
          >
            {Object.entries(SORT_BY_OPTIONS).map(([key, value]) => (
              <option key={value} value={value}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.sort_wrap}>
          <p className={styles.sort}>Items on page</p>
          <select
            id="perPageSelector"
            className={styles.pageFormControl}
            value={itemsPerPage}
            onChange={event => changeItemsPerPage(event.target.value)}
          >
            {Object.entries(ALL_OPTIONS).map(([key, value]) => (
              <option key={value} value={value}>
                {key}
              </option>
            ))}
          </select>
        </div>
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
          <ul className={styles.card_holder}>
            {sortedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                products={products}
                favourites={[products[3]]}
                cart={[]}
                onAddToFavourites={handleAddToFavourites}
                onAddToCart={handleAddToCart}
              />
            ))}
          </ul>

          <Pagination
          // total={phones.length}
          // perPage={itemsPerPage}
          // currentPage={currentPage}
          // onPageChange={num => setCurrentPage(num)}
          />
        </>
      )}
    </div>
  );
};

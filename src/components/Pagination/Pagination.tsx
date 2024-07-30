import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = (
{
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const numberOfPages = Math.ceil(total / perPage);

  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected + 1);
  };

  return (
    <div className={styles['pagination-block']}>
      <ReactPaginate
        previousLabel={<span className={`${styles['pagination-icon']} ${styles['pagination-arrowLeft']}`}></span>}
        nextLabel={<span className={`${styles['pagination-icon']} ${styles['pagination-arrowRight']}`}></span>}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={numberOfPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={styles['pagination-pages']}
        activeClassName={styles['pagination-selected']}
        previousClassName={`${styles['pagination-btn']} ${styles['pagination-squareSm']}`}
        nextClassName={`${styles['pagination-btn']} ${styles['pagination-squareSm']}`}
        pageClassName={`${styles['pagination-btn']} ${styles['pagination-squareSm']}`}
        disabledClassName={styles['pagination-disabled']}
        />
    </div>
  );
};

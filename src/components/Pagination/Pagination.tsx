import React from 'react';
import styles from './Pagination.module.scss';

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
  const visiblePageNumbers = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  // console.log(total);
  // console.log(perPage);
  // console.log(currentPage);
  // console.log(onPageChange);

  return (
    <div className={styles['pagination-block']}>
      <button
        type="button"
        className={`${styles['pagination-btn']} ${styles['pagination-squareSm']} ${currentPage <= 1 ? styles['pagination-disabled'] : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <span className={`${styles['pagination-icon']} ${styles['pagination-arrowLeft']}`}></span>
      </button>

      <ul className={styles['pagination-pages']}>
        {visiblePageNumbers.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={`${styles['pagination-btn']} ${styles['pagination-squareSm']} ${page === currentPage ? styles['pagination-selected'] : ''}`}
              onClick={() => onPageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`${styles['pagination-btn']} ${styles['pagination-squareSm']} ${currentPage >= numberOfPages ? styles['pagination-disabled'] : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= numberOfPages}
      >
        <span className={`${styles['pagination-icon']} ${styles['pagination-arrowRight']}`}></span>
      </button>
    </div>
  );
};

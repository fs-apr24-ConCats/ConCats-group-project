import React, { useState, useEffect } from "react";
import styles from './CursorSettings.module.scss';

export const CursorSettings: React.FC = () => {
  const [isCustomCursor, setIsCustomCursor] = useState(false);

  useEffect(() => {
    console.log('Applying custom cursors');

    const elements = document.querySelectorAll('a, button');

    elements.forEach(el => {
      const element = el as HTMLElement;
      if (isCustomCursor) {
        element.style.cursor = `url('/img/icons/okcursor.png'), auto`;
      } else {
        element.style.cursor = 'pointer';
      }
    });

    document.body.style.cursor = isCustomCursor 
      ? `url('/img/icons/okcursor.png'), auto` 
      : 'auto';
  }, [isCustomCursor]);

  const handleCustomCursorToggle = () => {
    setIsCustomCursor(!isCustomCursor);
  };

  return (
    <div className={styles.cursorSettings}>
      <div className={styles.label}>Custom cursor</div>
      <label className={styles.switch}>
        <input type="checkbox" checked={isCustomCursor} onChange={handleCustomCursorToggle} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};





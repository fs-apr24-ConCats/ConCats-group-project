import React from "react";
import styles from './Settings.module.scss';

interface SettingsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onToggle, isOpen }) => {
  return (
    <div className={styles.settings}>
      <button
        type="button"
        onClick={onToggle}
        aria-label="Toggle settings"
        className={`${styles.iconButton} ${isOpen ? 'active' : ''}`}
      ></button>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <img src="/path/to/icon1.svg" alt="Option 1" />
          </div>
          <div className={styles.menuItem}>
            <img src="/path/to/icon2.svg" alt="Option 2" />
          </div>
          <div className={styles.menuItem}>
            <img src="/path/to/icon3.svg" alt="Option 3" />
          </div>
        </div>
      )}
    </div>
  );
};

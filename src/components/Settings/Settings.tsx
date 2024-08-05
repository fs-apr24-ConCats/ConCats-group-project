import React, { useState } from "react";
import styles from './Settings.module.scss';

interface SettingsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onToggle, isOpen }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.settings}>
      <button
        type="button"
        onClick={onToggle}
        aria-label="Toggle settings"
        className={`${styles.iconButton} ${isOpen ? 'active' : ''}`}
      >
        <img src="/img/icons/settings.svg" alt="Language" />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <button
              type="button"
              className={styles.menuItem__language}
            >
              <img src="/img/icons/Globe.png" alt="Language" />
            </button>
          </div>
          <div className={styles.menuItem}>
          <button
              type="button"
              className={styles.menuItem__theme}
              onClick={handleThemeToggle}
            >
                <img
                  src={`/img/icons/${isDarkMode ? 'Moon' : 'Sun'}.png`}
                  alt="Light/Dark theme"
                />
            </button>
          </div>
          <div className={styles.menuItem}>
          <button
              type="button"
              className={styles.menuItem__cursor}
            >
              <img src="/img/icons/Globe.png" alt="Language" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from "react";
import styles from './Settings.module.scss';
import { ThemeToggleButton } from "../../contexts/ThemeToggleButton";
import { useTheme } from "../../contexts/ThemeContext";
import classNames from "classnames";

interface SettingsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onToggle, isOpen }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { theme } = useTheme();
  
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const suffixForImg = theme === 'dark' ? '' : '-light';

  return (
    <div className={classNames(styles.settings, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-label="Toggle settings"
        className={`${styles.iconButton} ${isOpen ? 'active' : ''}`}
      > 
        <img src={`/img/icons/settings${suffixForImg}.svg`} alt="Settings" />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <button
              type="button"
              className={styles.menuItem__language}
            >
              <img src={`/img/icons/Globe${suffixForImg}.png`} alt="Language" />
            </button>
          </div>
          <div className={styles.menuItem}>
          <ThemeToggleButton />
          </div>
          <div className={styles.menuItem}>
          <button
              type="button"
              className={styles.menuItem__cursor}
            >
              <img src={`/img/icons/Globe${suffixForImg}.png`} alt="Language" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

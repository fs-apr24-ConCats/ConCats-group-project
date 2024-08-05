import React from "react";
import classes from './ModalContent.module.scss';
import { useTheme } from "../../../../contexts/ThemeContext";
import classNames from "classnames";

type Props = {
    closeModal: () => void;
};

export const ModalContent: React.FC<Props> = ({ closeModal }) => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames(classes.ModalContent, {
            [classes.lightTheme]: theme === 'light',
            [classes.darkTheme]: theme === 'dark',
        })}
        >
        <h2>
        Checkout is not implemented yet.
        <br />
        See you soon :)
        </h2>

        <button
        className={classes.ModalContent__button}
        onClick={closeModal}
        >
        Ok
        </button>
    </div>
  );
};
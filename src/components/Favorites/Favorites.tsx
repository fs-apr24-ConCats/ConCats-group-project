import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from './Favorites.module.scss';
import classNames from "classnames";
import { Icon } from "../Icon";
import { IconList } from "../Icon/utils/IconList";

const activeClass = ({ isActive }: { isActive: boolean }) => {
    return classNames([classes.Favorites], { [classes.active]: isActive });
};

export const Favorites = () => {
    const [counter, setCounter] = useState(2);

    return (
        <NavLink className={activeClass} to="/favorites">
            <Icon icon={IconList.favorites} counter={counter} />
        </NavLink>
    )
}
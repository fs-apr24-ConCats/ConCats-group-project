import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from './Cart.module.scss';
import classNames from "classnames";
import { IconList } from "../Icon/utils/IconList";
import { Icon } from "../Icon";

const activeClass = ({ isActive }: { isActive: boolean }) => {
    return classNames([classes.cart], { [classes.active]: isActive });
};

export const Cart: React.FC = () => {
    const [counter, setCounter] = useState(0);

    return (
        <NavLink className={activeClass} to="/cart">
            <Icon icon={IconList.cart} counter={counter} />
        </NavLink>
    )
}
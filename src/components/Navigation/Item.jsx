import React from "react";
import s from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={`/${props.message.toLowerCase()}`} className={
                (status) => ((status.isActive) ? (s.active) : (''))
            }>{props.message}</NavLink>
        </div>
    )
}

export default Item;
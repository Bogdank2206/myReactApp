import React from "react";
import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <div className={s.user}>
                <NavLink to={`/dialogs/${props.id}`} className={(status)=>(
                    (status.isActive) ? (s.active) : ('')
                )}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;
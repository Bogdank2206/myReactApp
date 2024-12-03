import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <span className={s.item}>Friends</span>
            <div className={s.friendsData}>
                {
                    props.state.map((el) => (
                        <Friend key={el.id} name={el.name}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Friends;
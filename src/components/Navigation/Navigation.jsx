import React from 'react';
import s from "./Navigation.module.css"
import Item from "./Item";
import FriendsContainer from "./FriendsContainer";

const Navigation = () => {
    return (
        <div className={s.nav}>
            <Item message="Profile" />
            <Item message="Dialogs" />
            <Item message="Users" />
            <Item message="News" />
            <Item message="Music" />
            <Item message="Settings" />
            <FriendsContainer />
        </div>
    );
}

export default Navigation;
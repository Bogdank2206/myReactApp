import React from 'react';
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Chigai_kuginuki.svg/640px-Chigai_kuginuki.svg.png' />
        </header>
    );
}

export default Header;
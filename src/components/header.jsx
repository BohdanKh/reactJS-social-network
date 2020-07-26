import React from 'react';
import obRenamer from './header.module.css';

let Header = () => {
    return (
        <header className={obRenamer.header}>
            <img src='https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg'></img>
        </header>
    );
}

export default Header;
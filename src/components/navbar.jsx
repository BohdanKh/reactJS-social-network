import React from "react";
import obRenamer from "./navbar.module.css";
console.log(obRenamer);

let Navbar = () => {
    return (
        <nav className={obRenamer.navbar}>
            <div className={obRenamer.item + '' + obRenamer.active}><a>Profile</a></div>
            <div className={obRenamer.item}><a>News</a></div>
            <div className={obRenamer.item}><a>Music</a></div>
            <div className={obRenamer.item}><a>Messages</a></div>
            <div className={obRenamer.item}><a>Settings</a></div>
        </nav>
    );
}

export default Navbar;
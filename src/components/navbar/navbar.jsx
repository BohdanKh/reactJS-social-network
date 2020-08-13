import React from "react";
import obRenamer from "./navbar.module.css";

let Navbar = () => {
    return (
        <nav className={obRenamer.navbar}>
            <div className={obRenamer.item + '' + obRenamer.active}><a href={"/profile"}>Profile</a></div>
            <div className={obRenamer.item}><a href={"/messages"}>Messages</a></div>
            <div className={obRenamer.item}><a href={"/music"}>Music</a></div>
            <div className={obRenamer.item}><a>News</a></div>
            <div className={obRenamer.item}><a>Settings</a></div>
        </nav>
    );
}

export default Navbar;
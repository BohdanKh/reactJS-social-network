import React from "react";
import obRenamer from "./navbar.module.css";
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return (
        <nav className={obRenamer.navbar}>
            <div className={obRenamer.item}>
                <NavLink to={"/profile"} activeClassName={obRenamer.activeI}>Profile</NavLink>
            </div>
            <div className={obRenamer.item}>
                <NavLink to={"/messages"} activeClassName={obRenamer.activeI}>Messages</NavLink>
            </div>
            <div className={obRenamer.item}>
                <a href={"/music"}>Music</a>
            </div>
            <div className={obRenamer.item}>
                <a>News</a>
            </div>
            <div className={obRenamer.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
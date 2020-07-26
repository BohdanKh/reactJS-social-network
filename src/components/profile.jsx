import React from 'react';
import renamer from './profile.module.css';
console.log(renamer);

let Profile = () => {
    return (
        <div className={renamer.profile}>
            <div className={renamer.item}>background</div>
            <div className={renamer.item}>avatar</div>
            <div className={renamer.item}>personal data</div>
            <div className={renamer.item}>write post</div>
            <div className={renamer.item}>
                MY POSTS:
                <div className={renamer.subitem}>fist post</div>
                <div className={renamer.subitem}>2 post</div>
                <div className={renamer.subitem + " " + renamer.active}>last post</div>
            </div>
        </div>
    );
}

export default Profile;
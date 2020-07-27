import React from 'react';
import renamer from './profile.module.css';
import MyPosts from './myPosts/myPosts.jsx';

let Profile = () => {
    return (
        <div className={renamer.profile}>
            <div className={renamer.item}>top picture</div>
            <div className={renamer.item + " " + renamer.active}>avatar + personal data</div>
                <MyPosts />
        </div>
    );
}

export default Profile;
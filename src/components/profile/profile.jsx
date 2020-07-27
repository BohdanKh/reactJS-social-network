import React from 'react';
import renamer from './profile.module.css';
import MyPosts from './myPosts/myPosts.jsx';
console.log(renamer);

let Profile = () => {
    return (
        <div className={renamer.profile}>
            <div className={renamer.item}>Background</div>
            <div className={renamer.item + " " + renamer.active}>avatar + personal data</div>
                <MyPosts />
        </div>
    );
}

export default Profile;
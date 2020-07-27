import React from 'react';
import renamer from './myPosts.module.css';
import Post from './post/post';

console.log(renamer);

let MyPosts = () => {
    return (
        <div className={renamer.item}>
            <div>MY POSTS:</div>
            <textarea />
            <input type="button" value="Send" />
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
);
}

export default MyPosts;
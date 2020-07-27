import React from 'react';
import renamer from './myPosts.module.css';
import Post from './post/post';

let MyPosts = () => {
    return (
        <div className={renamer.item}>
            <div>MY POSTS:</div>
            <textarea />
            <input type="button" value="Send" />
            <div>
                <Post message="I am exited" likes="14"/>
                <Post message="I like donkeys" likes="15"/>
                <Post message="Dog was met by me" likes="8"/>
                <Post message="I dislike evil humans" likes="3"/>
            </div>
        </div>
);
}

export default MyPosts;
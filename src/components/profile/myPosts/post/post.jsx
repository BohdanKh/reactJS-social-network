import React from 'react';
import renamer from './post.module.css';

let Post = () => {
    return (
            <div>
                <div className={renamer.subitem}>
                    It is post
                </div>
            </div>
    );
}

export default Post;
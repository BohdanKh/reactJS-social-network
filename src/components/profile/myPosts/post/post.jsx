import React from 'react';
import renamer from './post.module.css';
console.log(renamer);

let Post = (props) => {
    return (
            <div>
                <div className={renamer.subitem}>
                    <span>{props.message}</span>
                    <div>
                        {console.log(props)}
                        <span>like: </span>
                        <span class={renamer.color_of_like}>{props.likes}</span>
                        </div>
                    <br/>
                </div>
            </div>
    );
}

export default Post;
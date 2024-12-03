import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Posts/Post";

const MyPosts = (props) => {
    const updateNewPostText = (event) => {
        props.updateNewPostText(event.target.value);
    }
    return (
        <div className={s.postBlock}>
            <div>
                <h3>New post</h3>
                <div>
                    <textarea onChange={updateNewPostText}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Send</button>
                </div>
            </div>
            <div>
                <h3>My posts</h3>
                {
                    props.PostsData.map((el) =>
                        <Post message={el.message}
                              likesCount={el.likesCount}/>)
                }
            </div>
        </div>
    )
}

export default MyPosts;
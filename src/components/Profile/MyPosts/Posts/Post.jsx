import React from "react"
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.ytimg.com/vi/jnjsfDjv5M8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCsgTih_MA8=&rs=AOn4CLDrgK6hbiVGlBjsPKpTNDSO4CrdIg' />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;
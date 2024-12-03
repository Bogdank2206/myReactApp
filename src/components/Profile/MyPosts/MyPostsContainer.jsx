import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        PostsData: state.profilePage.PostsData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
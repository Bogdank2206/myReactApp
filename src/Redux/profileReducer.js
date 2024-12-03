const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updateNewPostActionCreator = (newText) => ({
    type: UPDATE_NEW_POST,
    newText: newText,
})

const initialState = {
    PostsData: [
        {message: 'Piska', likesCount: 15},
        {message: 'Chlen', likesCount: 20},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '') {
                const newPost = {
                    message: state.newPostText,
                    likesCount: 0,
                }
                return {
                    ...state,
                    PostsData: [...state.PostsData, newPost],
                    newPostText: '',
                }
            } else {
                return state;
            }
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText,
            }
        default:
            return state;
    }
}

export default profileReducer;

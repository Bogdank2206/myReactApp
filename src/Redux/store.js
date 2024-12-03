import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
    _state: {
        profilePage: {
            PostsData: [
                {message: 'Piska', likesCount: 15},
                {message: 'Chlen', likesCount: 20},
            ],
            newPostText: '',
        },
        dialogsPage: {
            DialogUsers: [
                {id: 1, name: 'User 1'},
                {id: 2, name: 'User 2'},
                {id: 3, name: 'User 3'},
                {id: 4, name: 'User 4'},
                {id: 5, name: 'User 5'},
            ],
            MessagesData: [
                {id: 1, message: 'Message 1'},
                {id: 2, message: 'Message 2'},
                {id: 3, message: 'Message 3'},
            ],
            newMessageText: '',
        },
        navBarBlock: {
            Friends: [
                {name: 'Friend 1'},
                {name: 'Friend 2'},
                {name: 'Friend 3'},
            ],
        },
    },
    _callSubscriber: undefined,
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this);
    }
}

// window.store = store;
export default store;
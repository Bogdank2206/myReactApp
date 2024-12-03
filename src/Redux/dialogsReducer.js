const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const ADD_MESSAGE = 'ADD-MESSAGE'

export const updateNewMessageActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE,
    newMessageText: newMessageText,
})

export const addNewMessageActionCreator = () => ({
    type: ADD_MESSAGE,
})

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessageText,
            }
        case ADD_MESSAGE:
            if (state.newMessageText !== '') {
                const newMessage = {
                    id: 4,
                    message: state.newMessageText,
                }
                return {
                    ...state,
                    MessagesData: [...state.MessagesData, newMessage],
                    newMessageText: '',
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default dialogsReducer;
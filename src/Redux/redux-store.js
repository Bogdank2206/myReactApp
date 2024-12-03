import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {configureStore} from "@reduxjs/toolkit";
import navBarBlockReducer from "./navBarBlockReducer";
import usersReducer from "./UsersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBarBlock: navBarBlockReducer,
    usersPage: usersReducer,
})

const store = configureStore({
    reducer: reducers,
});

window.store = store;
export default store;
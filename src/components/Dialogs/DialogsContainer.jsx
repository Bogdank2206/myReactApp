import Dialogs from "./Dialogs/Dialogs";
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        DialogUsers: state.dialogsPage.DialogUsers,
        MessagesData: state.dialogsPage.MessagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        addMessage: () => {
            dispatch(addNewMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
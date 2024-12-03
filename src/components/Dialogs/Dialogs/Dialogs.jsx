import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    // debugger;
    const updateNewMessageText = (event) => {
        props.updateNewMessageText(event.target.value);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {
                    props.DialogUsers.map((el) => (
                            <DialogItem id={el.id} name={el.name}/>
                        )
                    )
                }
            </div>
            <div className={s.messages}>
                {
                    props.MessagesData.map((el) => (
                        <Message message={el.message}/>
                    ))
                }
                <div>
                    <div>
                        <textarea onChange={updateNewMessageText}
                                  value={props.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={props.addMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsContorls/FormsControls";
import {required, maxLengthCreator} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsDataElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                          id={dialog.id}/>);
    let messagesDataElements = state.messageData.map(m => <Message message={m.message} key={m.id}/>);
    let newMassageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    /*   if(props.isAuth) return <Redirect to={"/login"} />; */


    return <div className={s.dialogs}>

        <div className={s.dialogsItems}>

            {dialogsDataElements}

        </div>

        <div className={s.messages}>

            {messagesDataElements}

        </div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>


}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength100]}
                       name="newMessageBody"
                       placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;
import React from "react";
import {sendmessage_Creator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,

    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: (newMessageBody) => { dispatch(sendmessage_Creator(newMessageBody)) }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
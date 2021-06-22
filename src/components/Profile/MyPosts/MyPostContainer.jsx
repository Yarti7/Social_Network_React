import React from "react";
import {addpost_actioncreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPost";
import {connect} from "react-redux";



let  mapStateToProps = (state) => {
    return{
        postsdata: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let  mapDispatchToProps = (dispatch) => {
    return{
        addPost: (newPostText) => {
            dispatch(addpost_actioncreator(newPostText));
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
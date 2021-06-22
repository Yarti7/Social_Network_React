import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTOS_SUCCESS = 'SAVE_PHOTOS_SUCCESS';

let initialState = {

    postsData: [
        {message: "Post1", id: 3, likescount: 12},
        {message: "Post2", id: 1, likescount: 2},
        {message: "Post3", id: 4, likescount: 3},
        {message: "Post777", id: 2, likescount: 7}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {

            let newP = {message: action.newPostText, id: 5, likescount: 0};

            return {
                ...state,
                postsData: [...state.postsData, newP],
                newPostText: ''
            };


        }

        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            };

        }

        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            };

        }

        case DELETE_POST: {

            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            };

        }
        case SAVE_PHOTOS_SUCCESS: {

            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };

        }

        default:
            return state;


    }


}

export const addpost_actioncreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTOS_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
};

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {

    }

};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {

    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.userId));
    }
    else {
       dispatch(stopSubmit( "edit-profile", {_error: response.data.messages[0]}));
       return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;
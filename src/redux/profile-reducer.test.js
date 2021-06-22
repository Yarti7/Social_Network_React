import profileReducer, {addpost_actioncreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {

    postsData: [
        {message: "Post1", id: 3, likescount: 12},
        {message: "Post2", id: 1, likescount: 2},
        {message: "Post3", id: 4, likescount: 3},
        {message: "Post777", id: 2, likescount: 7}
    ]
};


it('length of posts should be incremented', () => {
    // 1. test data
    let action = addpost_actioncreator("it-kama");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expecetation
    expect(newState.postsData.length).toBe(5);

});

it('test message', () => {
    // 1. test data
    let action = addpost_actioncreator("it-kama");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expecetation
    expect(newState.postsData[4].message).toBe("it-kama");

});

it('after deleting bude menshe', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expecetation
    expect(newState.postsData.length).toBe(3);

});


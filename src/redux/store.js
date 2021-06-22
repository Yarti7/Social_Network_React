import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

    _state: {
        profilePage: {
            postsData: [
                {message: "Post1", id: 3, likescount: 12},
                {message: "Post2", id: 1, likescount: 2},
                {message: "Post3", id: 4, likescount: 3},
                {message: "Post777", id: 2, likescount: 7}
            ],

            newPostText: 'Text here...'
        },

        dialogPage: {

            messageData: [
                {message: "Hi", id: 3},
                {message: "Lol", id: 1},
                {message: "Kek", id: 4},
                {message: "Arbidol2", id: 2}
            ],

            newMessageBody: "",

            dialogsData: [
                {name: "Yaruk", id: 3},
                {name: "Yaruk2", id: 1},
                {name: "Valera", id: 4},
                {name: "Valera2", id: 2},
                {name: "Vladosik", id: 5},
                {name: "Smetanochka", id: 6}
            ]

        },

        sidebar: {}

    },

    _callSubscriber() {

        console.log('State is changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {

        this._callSubscriber = observer;

    },

    dispatch(action) {

       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
       this._state.sidebar = sidebarReducer(this._state.sidebar, action);

       this._callSubscriber(this._state);

    }


}





export default store;

window.store = store;
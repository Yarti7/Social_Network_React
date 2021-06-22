const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {


    messageData: [
        {message: "Hi", id: 3},
        {message: "Lol", id: 1},
        {message: "Kek", id: 4},
        {message: "Arbidol2", id: 2}
    ],

    dialogsData: [
        {name: "Yaruk", id: 3},
        {name: "Yaruk2", id: 1},
        {name: "Valera", id: 4},
        {name: "Valera2", id: 2},
        {name: "Vladosik", id: 5},
        {name: "Smetanochka", id: 6}
    ]

}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;

            return  {
                ...state,
                messageData: [...state.messageData, {message: body, id: 5}]
            };


        default:
            return state;

    }

}

export const sendmessage_Creator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogReducer;
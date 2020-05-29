import { SEND_MESSAGE } from "../action-types";

const initialState = {
    messageList: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messageList: [...state.messageList, action.payload]
            }
        }
        default: return state;
    }
}

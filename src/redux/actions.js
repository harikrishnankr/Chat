import { SEND_MESSAGE } from "./action-types";

let nextTodoId = 0;

export const sendMessage = message => ({
    type: SEND_MESSAGE,
    payload: {
        id: ++nextTodoId,
        message
    }
});

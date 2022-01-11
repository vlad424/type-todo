import { TodoActions } from "../../types/types";
import { initialState } from "./post_reducer";

const SET_ACTIVE_EDIT = "SET_ACTIVE_EDIT"

export const modal_reducer_edit = (state = initialState.modal_edit_active, action:TodoActions) => {
    switch(action.type) {
        case SET_ACTIVE_EDIT:
            return {modal_edit_active: action.payload}
        default:
            return state
    }
}
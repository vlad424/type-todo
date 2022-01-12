import { TodoActions } from "../../types/types"
import { initialState } from "./post_reducer"

const SET_ACTIVE = "SET_ACTIVE"

export const modal_reducer = (state = initialState.modal_active, action:TodoActions) => {
    switch(action.type) {
        case SET_ACTIVE: 
            return {modal_active: action.payload}
        default:
            return state
    }
}
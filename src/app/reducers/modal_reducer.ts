import { TodoActions } from "../../types/types"

const SET_ACTIVE = "SET_ACTIVE"

var modal_active:boolean = true 

export const modal_reducer = (state = modal_active, action:TodoActions) => {
    switch(action.type) {
        case SET_ACTIVE: 
            return action.payload
        default:
            return state
    }
}
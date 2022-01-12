import { EditModal} from "../../types/types";
import { initialState } from "./post_reducer";

const SET_ACTIVE_EDIT = "SET_ACTIVE_EDIT"

export const modal_reducer_edit = (state = initialState.modal_edit_active, action:EditModal) => {
    switch(action.type) {
        case SET_ACTIVE_EDIT:
            return {modal_edit_active: action.payload.active, cache_id: action.payload.id}
        default:
            return state
    }
}
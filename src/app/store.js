import { createStore, combineReducers } from "redux";
import { initialState } from "./reducers/post_reducer";
import { modal_reducer } from "./reducers/modal_reducer";
import { post_reducer } from "./reducers/post_reducer";

const rootReducer = combineReducers({
    post_reducer,
    modal_reducer
});

const store = createStore(rootReducer,  initialState );

export default store;

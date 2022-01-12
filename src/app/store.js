import { createStore, combineReducers, applyMiddleware } from "redux";
import { modal_reducer } from "./reducers/modal_reducer";
import { post_reducer } from "./reducers/post_reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { modal_reducer_edit } from "./reducers/modal_reducer_edit";

const rootReducer = combineReducers({
    post_reducer,
    modal_reducer,
    modal_reducer_edit
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
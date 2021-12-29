import { createStore } from "redux";
import { initialState, reducer } from "./post_reducer";

const store = createStore(reducer,  initialState );

export default store;

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { lapsReducer } from "./lapsReducer";
import { timeReducer } from "./timeReducer";

const rootReducer = combineReducers({
    timeReducer,
    lapsReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
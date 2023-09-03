import { combineReducers } from "redux";
import { operationsReducer,NotesoperationsReducer } from "./todoapp/reducers/operations";

const rootReducer = combineReducers({
    operationsReducer, NotesoperationsReducer
})

export default rootReducer;

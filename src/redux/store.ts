import { createStore } from "redux";
import changeTodoReducer from "./reducer";

const store = createStore(changeTodoReducer);

export default store;

import { ADD_TODO, TODO, DOING, DONE } from "./types";
import { changeTodo, changeDoing, changeDone, TodosAction } from "./actions";

export interface Todo {
  id: number;
  text: string;
}

export type TodosState = Todo[];

export const initialState: TodosState = [];

function todosReducer(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = { id: action.payload.id, text: action.payload.text };
      return [...state, newTodos];
    default:
      return state;
  }
}

export default todosReducer;

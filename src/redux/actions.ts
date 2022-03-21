import { ADD_TODO, TODO, DOING, DONE } from "./types";

export type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof changeTodo>
  | ReturnType<typeof changeDoing>
  | ReturnType<typeof changeDone>;

/*export interface TodosAction {
  changeTodo: "TODO";
  changeDoing: "DOING";
  changeDone: "DONE";
}*/

export const addTodo = (text: string, id: number) => ({
  type: ADD_TODO,
  payload: {
    id,
    text
  }
});

export const changeTodo = () => ({
  type: TODO
});

export const changeDoing = () => ({
  type: DOING
});

export const changeDone = () => ({
  type: DONE
});

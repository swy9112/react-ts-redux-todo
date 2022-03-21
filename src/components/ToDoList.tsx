import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

type IonAddTodo = {
  onAddTodo: (text: string, id: number) => void;
};

function ToDoList({ onAddTodo }: IonAddTodo) {
  return (
    <div>
      <h1>To Dos</h1>
      <CreateToDo onAddTodo={onAddTodo} />
      <ul></ul>
    </div>
  );
}

export default ToDoList;

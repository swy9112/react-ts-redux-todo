import { useDispatch, useSelector } from "react-redux";
import ToDo from "./components/ToDo";
import ToDoList from "./components/ToDoList";
import { TodosAction } from "./redux/actions";
import { addTodo } from "./redux/actions";

function App() {
  const todos = useSelector((state: TodosAction) => state);
  const dispatch = useDispatch();

  const onAddTodo = (text: string, id: number) => {
    dispatch(addTodo(text, id));
  };
  console.log(todos);

  return (
    <>
      <ToDoList onAddTodo={onAddTodo} />
    </>
  );
}

export default App;

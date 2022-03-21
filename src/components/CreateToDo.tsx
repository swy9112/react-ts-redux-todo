import { useForm } from "react-hook-form";
import { addTodo } from "../redux/actions";

interface IForm {
  toDo: string;
}

type IonAddTodo = {
  onAddTodo: (text: string, id: number) => void;
};

function CreateToDo({ onAddTodo }: IonAddTodo) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    onAddTodo(toDo, Date.now());
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do"
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;

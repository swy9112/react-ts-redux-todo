import React from "react";
import { useSelector } from "react-redux";
import { TodosAction } from "../redux/actions";

function ToDo() {
  const todos = useSelector((state: TodosAction) => state);

  return (
    <li>
      <span>{todos}</span>
    </li>
  );
}

export default ToDo;

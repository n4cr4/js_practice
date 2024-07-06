import { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { DoingTodos } from "./components/DoingTodos";
import { DoneTodos } from "./components/DoneTodos";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [doingTodos, setDoingTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...doingTodos, todoText];
    setDoingTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...doingTodos];
    newTodos.splice(index, 1);
    setDoingTodos(newTodos);
  };

  const onClickDone = (index) => {
    const newDoingTodos = [...doingTodos];
    newDoingTodos.splice(index, 1);
    const newDoneTodos = [...doneTodos, doingTodos[index]];

    setDoingTodos(newDoingTodos);
    setDoneTodos(newDoneTodos);
  };

  const onClickReturn = (index) => {
    const newDoingTodos = [...doingTodos, doneTodos[index]];
    const newDoneTodos = [...doneTodos];
    newDoneTodos.splice(index, 1);

    setDoingTodos(newDoingTodos);
    setDoneTodos(newDoneTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <DoingTodos
        todos={doingTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <DoneTodos todos={doneTodos} onClickReturn={onClickReturn} />
    </>
  );
};

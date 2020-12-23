import React, { useContext } from "react";
import { TodoContext } from "../contexts/todolist";
import styles from "./AddToDo.scss";

// contain AddToDo functionality containing storing deleting etc. for clients
export default function AddToDo() {
  const { setTodos, todos } = useContext(TodoContext);
  const addTodo = () => {
    if (
      (document.getElementById("addTodoText") as HTMLInputElement).value !== ""
    ) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: (document.getElementById("addTodoText") as HTMLInputElement)
            .value,
          state: false,
        },
      ]);
    }
  };
  return (
    <div className={styles.container}>
      <span>TodoText</span>
      <input id="addTodoText" type="text"></input>
      <button onClick={() => addTodo()}>Add</button>
    </div>
  );
}

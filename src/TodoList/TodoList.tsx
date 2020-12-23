import React, { useContext, useState } from "react";
import styles from "./TodoList.scss";
import { TodoContext } from "../contexts/todolist";
import TodoItem from "../TodoItem/TodoItem";

// contain TodoList functionality containing storing deleting etc. for clients
export default function TodoList() {
  const { todos, completedThings, setCompletedThings } = useContext(
    TodoContext
  );

  return (
    <div className={styles.listcontainer}>
      <h2>Thing that you need to get done</h2>
      {todos.map((item: any) => (
        <TodoItem key={item.id} todo={item}></TodoItem>
      ))}
    </div>
  );
}

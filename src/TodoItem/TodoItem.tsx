import React, { useContext, useState } from "react";
import styles from "./TodoItem.scss";

import { TodoContext } from "../contexts/todolist";

import { TodoItemT } from "../typesTS/TodoItemT";
import TodoList from "../TodoList";
// contain TodoItem functionality containing storing deleting etc. for clients
export default function TodoItem({ todo }: { todo: TodoItemT }) {
  const { todos, setTodos, completedThings, setCompletedThings } = useContext(
    TodoContext
  );
  const toComplete = () => {
    todo.state = true;
    setCompletedThings(completedThings + 1);
  };
  const toUncomplete = () => {
    todo.state = false;
    setCompletedThings(completedThings - 1);
  };
  const removeTodo = () => {
    setTodos(
      todos.filter((item: TodoItemT) => {
        return item.id !== todo.id;
      })
    );
  };
  return (
    <div>
      {todo.state ? (
        <div className={styles.todoContainer}>
          <input type="checkbox" onChange={() => toUncomplete()}></input>
          <span>{todo.text}</span>
          <button onClick={() => removeTodo()}>Remove</button>
        </div>
      ) : (
        <div className={styles.todoContainer}>
          <input type="checkbox" onChange={() => toComplete()}></input>
          <span>{todo.text}</span>
          <button onClick={() => removeTodo()}>Remove</button>
        </div>
      )}
    </div>
  );
}

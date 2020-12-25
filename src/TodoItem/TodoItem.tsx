import React, { useContext, useState } from "react";
import styles from "./TodoItem.scss";

import { TodoContext } from "../contexts/todolist";

import { TodoItemT } from "../typesTS/TodoItemT";
import TodoList from "../TodoList";
// contain TodoItem functionality containing storing deleting etc. for clients
export default function TodoItem({ todo }: { todo: TodoItemT }) {
  const {
    todos,
    setTodos,
    completedThings,
    setCompletedThings,
    todosCompleted,
    setTodosCompleted,
  } = useContext(TodoContext);
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
    <div className={styles.todoThing}>
      {todo.state ? (
        <div className={styles.todoCompletedContainer}>
          <input type="checkbox" onChange={() => toUncomplete()}></input>
          <span className="checkmark"></span>
          <span>{todo.text}</span>
          <button onClick={() => removeTodo()}>Remove</button>
        </div>
      ) : (
        <div className={styles.todoContainer}>
          <input type="checkbox" onChange={() => toComplete()}></input>
          <span className="checkmark"></span>
          <span>{todo.text}</span>
          <button onClick={() => removeTodo()}>Remove</button>
        </div>
      )}
    </div>
  );
}

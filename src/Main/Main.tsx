import React, { useEffect, useState } from "react";
import styles from "./Main.scss";

import AddToDo from "../AddToDo/AddToDo";
import TodoList from "../TodoList/TodoList";

import { TodoItemT } from "../typesTS/TodoItemT";

import { TodoContext } from "../contexts/todolist";

// contain main functionality containing storing deleting etc. for clients
export default function Main() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Buy bread",
      state: false,
    },
    {
      id: 2,
      text: "Buy milk",
      state: false,
    },
  ]);
  const [todosCompleted, setTodosCompleted] = useState<TodoItemT[]>([]);
  const [completedThings, setCompletedThings] = useState(0);
  useEffect(() => {
    todos.sort((a, b) => {
      return a.id - b.id;
    });
    todos.sort((a, b) => {
      return Number(a.state) - Number(b.state);
    });
    console.log("hello");
  }, [todos]);
  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        completedThings,
        setCompletedThings,
        todosCompleted,
        setTodosCompleted,
      }}
    >
      <div className={styles.container}>
        <h1>Things to get done</h1>
        <span>Things that you did : {completedThings}</span>
        <AddToDo></AddToDo>
        <TodoList></TodoList>
      </div>
    </TodoContext.Provider>
  );
}

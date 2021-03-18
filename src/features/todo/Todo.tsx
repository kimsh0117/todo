import React from "react";
import styles from "./Todo.module.css";

import { TodoHeader } from "./TodoHeader/TodoHeader";
import { TodoInput } from "./TodoInput/TodoInput";
import { TodoList } from "./TodoList/TodoList";
import { TodoFooter } from "./TodoFooter/TodoFooter";

import { useLocation } from 'react-router-dom';

interface TodoProps {
  name: string;
}

export function Todo(props: TodoProps) {
  const location = useLocation();
  return (
    <div className={styles.todo}>
      <TodoHeader name={props.name}/>
      <TodoList />
      {location.pathname !== '/deleted' ? <TodoInput /> : ""}
      {/* <TodoFooter /> */}
    </div>
  );
}

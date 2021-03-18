import React from "react";
import styles from "./Todo.module.css";

import { TodoHeader } from "./TodoHeader/TodoHeader";
import { TodoInput } from "./TodoInput/TodoInput";
import { TodoList } from "./TodoList/TodoList";
import { TodoFooter } from "./TodoFooter/TodoFooter";

export function Todo() {
  return (
    <div className={styles.todo}>
      <TodoHeader />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

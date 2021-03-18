import React from "react";
import { useLocation } from "react-router-dom";
import TodoHeaderDate from './TodoHeaderDate';
import styles from './TodoHeader.module.css';

interface TodoHeaderProps {
  name: string;
}

export function TodoHeader(props: TodoHeaderProps) {

  let location = useLocation();
  return (
    <header className={styles.todo_header}>
      <div>
        <h1 className={styles.title}>{props.name}</h1>
        {location.pathname === '/' ? <TodoHeaderDate /> : ""}
      </div>
    </header>
  );
}

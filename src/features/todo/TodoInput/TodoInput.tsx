import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./TodoInput.module.css";
import useTodo from "../useTodo";

export function TodoInput() {
  const { onAddTodo } = useTodo();
  const [value, setValue] = useState("");
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onAddTodo({ id: v4(), task: value });
      setValue("");
    }
  };
  return (
    <div className={styles.inputBox}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="Type what you have to do"
      />
      <span className="addContainer">
        <i
          className={`${styles.addBtn} fa fa-plus`}
          aria-hidden="true"
          onClick={() => onAddTodo({ id: v4(), task: value })}
        ></i>
      </span>
    </div>
  );
}

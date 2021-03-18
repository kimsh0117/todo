import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./TodoInput.module.css";
import useTodo from "../useTodo";

export function TodoInput() {
  const { onAddTodo } = useTodo();
  const [value, setValue] = useState("");
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && value !== "") {
      onAddTodo({
        id: v4(),
        task: value,
        impotant: false,
        created: new Date(),
        done: false,
      });
      setValue("");
    }
  };
  return (
    <div className={`${styles.inputBox}`}>
      <div style={{ width: '5%', margin: '0'}}>
        <i
          className={`${styles.addBtn} fa fa-plus`}
          aria-hidden="true"
          onClick={() => {
            if (value !== "") {
              onAddTodo({
                id: v4(),
                task: value,
                impotant: false,
                created: new Date(),
                done: false,
              });
              setValue("");
            }
          }}
        ></i>
      </div>
      <div style={{width: '95%'}}>
        <input
          className={styles.todo_input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder="작업 추가"
        />
      </div>
    </div>
  );
}

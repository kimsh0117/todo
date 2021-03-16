import React from 'react';
import useTodo from '../useTodo';
import styles from './TodoFooter.module.css';

export function TodoFooter() {
  const { onClearTodo } = useTodo();
  return (
    <div className={styles.clearAllContainer}>
      <span
        onClick={() => onClearTodo() }
      >Clear All</span>
    </div>
  )
}

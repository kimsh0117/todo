import React from 'react';

import { TodoHeader } from "./TodoHeader/TodoHeader";
import { TodoInput } from "./TodoInput/TodoInput";
import { TodoList } from "./TodoList/TodoList";
import { TodoFooter } from "./TodoFooter/TodoFooter";

export function Todo() {
  return (
    <div>
      <TodoHeader />
      <TodoInput/>
      <TodoList/>
      <TodoFooter/>
    </div>
  )
}

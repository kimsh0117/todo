import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useTodo from "../useTodo";
import _ from "lodash";
import "./TodoList.css";

export function TodoList() {
  const { todo, onRemoveTodo } = useTodo();
  let list = _.map(todo, (item) => (
    <CSSTransition key={item.id} timeout={300} classNames="list">
      <li className="shadow todo-list">
        <i className={`checkBtn fa fa-check`} aria-hidden="true"></i>
        {item.task}
        <span className="removeBtn" onClick={() => onRemoveTodo(item.id)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </li>
    </CSSTransition>
  ));
  return (
    <section>
      <TransitionGroup component="ul" className="todo-ul">
        {list}
      </TransitionGroup>
    </section>
  );
}

import React from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import useTodo from "../useTodo";
import { Todo } from "../todoSlice";
import _ from "lodash";
import "./TodoList.css";

export function TodoList() {
  const { task, deleted, onChangeImportant, onChangeDone, done, today } = useTodo();
  const location = useLocation();
  const chooseList = (path: string): Todo => {
    if (path === "/") return today;
    if (path === "/deleted") return deleted;
    if (path === "/important") return done;
    return task;
  };
  let list = _.map(chooseList(location.pathname), (item) => (
    <CSSTransition key={item.id} timeout={300} classNames="list">
      <li className="shadow todo-list">
        <span onClick={() => onChangeDone(item.id)} className="checkIcons">
          {item.done ? (
            <i className={`checkBtn fa fa-check`} aria-hidden="true"></i>
          ) : (
            <FiberManualRecordOutlinedIcon className="checkBtn" />
          )}
        </span>
        <span>{item.task}</span>

        <span className="itemIcons" onClick={() => onChangeImportant(item.id)}>
          {item.impotant ? (
            <i
              className="lni lni-star-filled why"
              style={{ color: "#8E9BFF" }}
            ></i>
          ) : (
            <i
              className="lni lni-star why"
              aria-hidden="true"
              style={{ color: "#8E9BFF" }}
            ></i>
          )}
        </span>
      </li>
    </CSSTransition>
  ));
  return (
    <section className="todo_main">
      <TransitionGroup component="ul" className="todo-ul">
        {list}
      </TransitionGroup>
    </section>
  );
}

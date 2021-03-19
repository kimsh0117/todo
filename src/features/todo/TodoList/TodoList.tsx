import React, { MouseEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useTodo from "../useTodo";
import { Todo } from "../todoSlice";
import _ from "lodash";
import "./TodoList.css";

export function TodoList() {
  const {
    task,
    deleted,
    onChangeImportant,
    onChangeDone,
    onRemoveTodo,
    done,
    today,
  } = useTodo();
  const location = useLocation();
  const chooseList = (path: string): Todo => {
    if (path === "/") return today;
    if (path === "/deleted") return deleted;
    if (path === "/important") return done;
    return task;
  };
  const [mouseX, setMouseX] = useState<null | number>(null);
  const [mouseY, setMouseY] = useState<null | number>(null);
  const [tempItem, setTempItem] = useState("");

  const handleContextMenu = (e: MouseEvent, id: string): void => {
    setMouseX(e.clientX - 2);
    setMouseY(e.clientY - 4);
    setTempItem(id);
  };
  const handleContextMenuClose = () => {
    setMouseX(null);
    setMouseY(null);
  };
  let list = _.map(chooseList(location.pathname), (item) => (
    <CSSTransition key={item.id} timeout={300} classNames="list">
      <li
        className="shadow todo-list"
        onContextMenu={(e: MouseEvent) => {
          e.preventDefault();
          handleContextMenu(e, item.id);
        }}
      >
        <span onClick={() => onChangeDone(item.id)} className="checkIcons">
          {item.done ? (
            <i
              className={`checkBtn fa fa-check`}
              aria-hidden="true"
              style={{ marginLeft: "4px" }}
            ></i>
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
      <Menu
        keepMounted
        open={mouseY !== null}
        onClose={handleContextMenuClose}
        anchorReference="anchorPosition"
        anchorPosition={
          mouseY !== null && mouseX !== null
            ? { top: mouseY, left: mouseX }
            : undefined
        }
      >
        <MenuItem
          onClick={() => {
            onRemoveTodo(tempItem);
            handleContextMenuClose();
            setTempItem("");
          }}
        >
          삭제
        </MenuItem>
      </Menu>
    </section>
  );
}

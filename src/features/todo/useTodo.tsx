import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  clearTodo,
  selectTask,
  selectDeleted,
  selectDone,
  selectedToday,
  changeImportand,
  changeDone,
  Item,
} from "./todoSlice";
import { useCallback } from "react";
// import { createSelector } from '@reduxjs/toolkit';

export default function useTodo() {
  const task = useSelector(selectTask);
  const deleted = useSelector(selectDeleted);
  const done = useSelector(selectDone);
  const today = useSelector(selectedToday);

  const dispatch = useDispatch();

  const onAddTodo = useCallback((diff: Item) => dispatch(addTodo(diff)), [
    dispatch,
  ]);
  const onRemoveTodo = useCallback((id: string) => dispatch(removeTodo(id)), [
    dispatch,
  ]);
  const onClearTodo = useCallback(() => dispatch(clearTodo()), [dispatch]);

  const onChangeImportant = useCallback(
    (id: string) => dispatch(changeImportand(id)),
    [dispatch]
  );
  const onChangeDone = useCallback(
    (id: string) => dispatch(changeDone(id)),
    [dispatch]
  );
  return {
    task,
    deleted,
    done,
    today,
    onAddTodo,
    onRemoveTodo,
    onClearTodo,
    onChangeImportant,
    onChangeDone,
  };
}

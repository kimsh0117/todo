import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  clearTodo,
  selectTodo,
  selectDeleted,
  Item,
} from "./todoSlice";
import { useCallback } from "react";
// import { createSelector } from '@reduxjs/toolkit';

export default function useTodo() {
  const todo = useSelector(selectTodo);
  const deleted = useSelector(selectDeleted);

  const dispatch = useDispatch();

  const onAddTodo = useCallback((diff: Item) => dispatch(addTodo(diff)), [
    dispatch,
  ]);
  const onRemoveTodo = useCallback((id: string) => dispatch(removeTodo(id)), [
    dispatch,
  ]);
  const onClearTodo = useCallback(() => dispatch(clearTodo()), [dispatch]);

  return {
    todo,
    deleted,
    onAddTodo,
    onRemoveTodo,
    onClearTodo,
  };
}

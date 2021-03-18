import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import _ from "lodash";

// 완료 항목 추가
// 생성 날짜 추가
// 완료 날짜 추가
export interface Item {
  id: string;
  task: string;
}

export interface Todo {
  [key: string]: Item;
}

export interface TodoState {
  todo: Todo;
  deleted: Todo;
}
const initialState: TodoState = {
  todo: {},
  deleted: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Item>) => {
      state.todo = {
        ...state.todo,
        [payload.id]: {
          id: payload.id,
          task: payload.task,
        },
      };
    },
    removeTodo: (state, { payload }: PayloadAction<string>) => {
      state.deleted = {
        ...state.deleted,
        [payload]: state.todo![payload],
      };

      state.todo = _.omit(state.todo, payload);
    },
    clearTodo: (state) => {
      state.deleted = {
        ...state.todo,
        ...state.deleted,
      };

      state.todo = {};
    },
  },
});

export const { addTodo, removeTodo, clearTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo.todo;
export const selectDeleted = (state: RootState) => state.todo.deleted;

export default todoSlice.reducer;

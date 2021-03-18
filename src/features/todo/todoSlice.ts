import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import _ from "lodash";

export interface Item {
  id: string;
  task: string;
  impotant: boolean | null;
  created: Date | null;
  done: boolean | null;
}

export interface Todo {
  [key: string]: Item;
}

export interface TodoState {
  task: Todo;
  deleted: Todo;
}

const initialState: TodoState = {
  task: {},
  deleted: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Item>) => {
      state.task = {
        ...state.task,
        [payload.id]: {
          id: payload.id,
          task: payload.task,
          impotant: payload.impotant,
          created: payload.created,
          done: payload.done,
        },
      };
    },
    removeTodo: (state, { payload }: PayloadAction<string>) => {
      state.deleted = {
        ...state.deleted,
        [payload]: state.task![payload],
      };

      state.task = _.omit(state.task, payload);
    },
    changeImportand: (state, { payload }: PayloadAction<string>) => {
      state.task[payload].impotant = !state.task[payload].impotant;
    },
    changeDone: (state, { payload }: PayloadAction<string>) => {
      state.task[payload].done = !state.task[payload].done;
    },
    clearTodo: (state) => {
      state.deleted = {
        ...state.task,
        ...state.deleted,
      };

      state.task = {};
    },
  },
});

export const {
  addTodo,
  removeTodo,
  clearTodo,
  changeImportand,
  changeDone,
} = todoSlice.actions;

export const selectTask = (state: RootState) => state.todo.task;
export const selectDeleted = (state: RootState) => state.todo.deleted;
export const selectDone = (state: RootState) => {
  let done: Todo = {};
  for (const [key, value] of Object.entries(state.todo.task)) {
    if (value.impotant) {
      done[key] = value;
    }
  }
  return done;
};
export const selectedToday = (state: RootState) => {
  let today: Todo = {}
  let d = new Date();
  for (const [key, value] of Object.entries(state.todo.task)) {
    if(value.created?.getDate() == d.getDate()) {
        today[key] = value;
    }
  }
  return today;
};
export default todoSlice.reducer;

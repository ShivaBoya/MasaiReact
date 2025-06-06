import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  tasks: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addProject, addTask, toggleTaskStatus } = projectSlice.actions;
export default projectSlice.reducer;


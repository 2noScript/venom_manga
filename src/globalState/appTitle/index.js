import { createSlice } from "@reduxjs/toolkit";
export const appTitle = createSlice({
  name: "appTile",
  initialState: {
    title: null,
  },
  reducers: {
    title: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { title } = appTitle.actions;
export default appTitle.reducer;

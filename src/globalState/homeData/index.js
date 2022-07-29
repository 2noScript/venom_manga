import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "~/Fetch";

export const fetchHomeData = createAsyncThunk(
  "fetchHomeData",
  async (params, thunkAPI) => {
    const resHot = await fetchApi.get("hot");
    const resNewMangaUpdate = await fetchApi.get("new-update");
    const resNewManga = await fetchApi.get("filter", {
      params: {
        status: 0,
        sort: 0,
        genres: 0,
      },
    });
    const hot = resHot.data;
    const newManga = resNewManga.data;
    const newMangaUpdate = resNewMangaUpdate.data;
    return { hot, newManga, newMangaUpdate };
  }
);

export const homeData = createSlice({
  name: "homeData",
  initialState: {
    error: false,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [fetchHomeData.pending]: (state) => {
      state.loading = true;
    },
    [fetchHomeData.rejected]: (state) => {
      state.error = true;
    },
    [fetchHomeData.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const {} = homeData.actions;

export default homeData.reducer;

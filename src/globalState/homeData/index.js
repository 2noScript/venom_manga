import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "~/Fetch";

export const fetchHomeData = createAsyncThunk(
  "fetchHomeData",
  async (params, thunkAPI) => {
    try {
      const resHot = await fetchApi.get("hot");
      const resNewMangaUpdate = await fetchApi.get("new-update");
      const resNewManga = await fetchApi.get("filter", {
        params: {
          status: 0,
          sort: 0,
          genres: 0,
          page: 0,
        },
      });
      const resTopWeek = await fetchApi.get("filter", {
        params: {
          status: 0,
          sort: 2,
          genres: 0,
          page: 0,
        },
      });
      const resTopMonth = await fetchApi.get("filter", {
        params: {
          status: 0,
          sort: 1,
          genres: 0,
          page: 0,
        },
      });
      const resDay = await fetchApi.get("filter", {
        params: {
          status: 0,
          sort: 3,
          genres: 0,
          page: 0,
        },
      });
      const hot = resHot.data;
      const newManga = resNewManga.data;
      const newMangaUpdate = resNewMangaUpdate.data;
      const topWeek = resTopWeek.data;
      const topMonth = resTopMonth.data;
      const topDay = resDay.data;
      return { hot, newManga, newMangaUpdate, topWeek, topMonth, topDay };
    } catch {
      const hot = null;
      const newManga = null;
      const newMangaUpdate = null;
      const topWeek = null;
      const topMonth = null;
      const topDay = null;
      return { hot, newManga, newMangaUpdate, topWeek, topMonth, topDay };
    }
  }
);

export const homeData = createSlice({
  name: "homeData",
  initialState: {
    error: false,
    data: {
      hot: null,
      newManga: null,
      newMangaUpdate: null,
      topWeek: null,
      topMonth: null,
      topDay: null,
    },
    loading: false,
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
      state.loading = false;
    },
  },
});
export const {} = homeData.actions;

export default homeData.reducer;

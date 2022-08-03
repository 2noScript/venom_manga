import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "~/Fetch";

export const fetchMangaDetailChapList = createAsyncThunk(
  "fetchMangaDetailChapList",
  async (params, thunkAPI) => {
    try {
      const { data } = await fetchApi.get(`detail?keymanga=${params}`);
      return data;
    } catch {
      return null;
    }
  }
);

export const mangaDetailData = createSlice({
  name: "mangaDetailData",
  initialState: {
    error: false,
    data: null,
    loading: false,
  },
  reducers: {
    resetData: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchMangaDetailChapList.pending]: (state) => {
      state.loading = true;
    },
    [fetchMangaDetailChapList.rejected]: (state) => {
      state.error = true;
    },
    [fetchMangaDetailChapList.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});
export const { resetData } = mangaDetailData.actions;

export default mangaDetailData.reducer;

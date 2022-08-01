import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "~/Fetch";

export const fetchMangaDetailChapList = createAsyncThunk(
  "fetchMangaDetailChapList",
  async (params, thunkAPI) => {
    const { data } = await fetchApi.get(`detail?keymanga=${params}`);
    return data;
  }
);

export const mangaDetailData = createSlice({
  name: "mangaDetailData",
  initialState: {
    error: false,
    data: null,
    detail: null,
    loading: false,
  },
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload;
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
    },
  },
});
export const { setDetail } = mangaDetailData.actions;

export default mangaDetailData.reducer;

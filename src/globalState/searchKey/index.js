import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "~/Fetch";

export const searchKeyFetch = createAsyncThunk(
  "searchKeyFetch",
  async (params, thunkAPI) => {
    if (!params.trim().length) return null;
    const { data } = await fetchApi.get(`key-word?kw=${params}`);
    // console.log(data);
    return data;
  }
);

export const searchKey = createSlice({
  name: "searchKey",
  initialState: {
    error: false,
    data: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [searchKeyFetch.pending]: (state) => {
      state.loading = true;
    },
    [searchKeyFetch.rejected]: (state) => {
      state.error = true;
    },
    [searchKeyFetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});
export const {} = searchKey.actions;

export default searchKey.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "~/Fetch";
import { routesConfig } from "~/configs";
export const fetchMangaFilterData = createAsyncThunk(
  "fetchMangaFilterData",
  async (params, thunkAPI) => {
    const { sort, page, genres, status } = params;
    try {
      const { data } = await fetchApi.get(`filter`, {
        params: {
          status,
          sort,
          genres,
          page,
        },
      });
      return data;
    } catch {
      return null;
    }
  }
);

export const mangaFilterData = createSlice({
  name: "mangaFilterData",
  initialState: {
    queries: {
      status: 0,
      sort: 0,
      genres: 0,
      page: 0,
    },
    error: false,
    data: null,
    loading: false,
    filterUrl: routesConfig.mangaFilter,
  },
  reducers: {
    resetData: (state) => {
      state.data = null;
    },
    setQueries: (state, action) => {
      const { name, count } = action.payload;
      state.queries[`${name}`] = count;
      if (name === "status") state.status = count;
      if (name === "sort") state.status = count;
      if (name === "genres") state.status = count;
      if (name === "page") state.status = count;
    },
    setFilterUrl: (state, action) => {
      const { status, sort, genres } = state.queries;
      state.filterUrl = `${routesConfig.mangaFilter}?status=${status}&sort=${sort}&genres=${genres}`;
    },
  },
  extraReducers: {
    [fetchMangaFilterData.pending]: (state) => {
      state.loading = true;
    },
    [fetchMangaFilterData.rejected]: (state) => {
      state.error = true;
    },
    [fetchMangaFilterData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});
export const { resetData, setQueries, setFilterUrl } = mangaFilterData.actions;

export default mangaFilterData.reducer;

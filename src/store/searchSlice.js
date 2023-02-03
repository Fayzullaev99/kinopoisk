import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieByFilters } from "../utils/api";

export const fetchContent = createAsyncThunk(
  "search/fetchContent",
  async (url, { rejectWithValue }) => {
    try {
      const responce = await getMovieByFilters(url);
      return responce.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setIsLoading = (state) => {
  state.isLoading = true;
  state.movie = {};
};

const searchSlice = createSlice({
  name: "search",
  initialState: {
    content: {},
    totalPages: 0,
    currentPage: 0,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, setIsLoading)
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.content = action.payload.docs;
        state.totalPages = action.payload.pages;
        state.currentPage = action.payload.page;
      })
      .addCase(fetchContent.rejected, setError);
  },
});

export default searchSlice.reducer;

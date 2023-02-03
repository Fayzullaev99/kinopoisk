import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovie, getMovieImages } from "../utils/api";

// export const fetchMovie = createAsyncThunk(
//   "movie/fetchMovie",
//   async (id, { rejectWithValue }) => {
//     try {
//       const responce = await getMovie(id);
//       return responce.data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setIsLoading = (state) => {
  state.isLoading = true;
  // state.movie = {};
};

const mainSlice = createSlice({
  name: "main",
  initialState: {
    movies: {},
    serials: {},
    cartoons: {},
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, setIsLoading)
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        // state.movie = action.payload;
      })
      .addCase(fetchMovie.rejected, setError);
  },
});

export default mainSlice.reducer;

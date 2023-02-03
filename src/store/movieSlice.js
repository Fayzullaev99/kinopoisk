import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovie, getMovieImages } from "../utils/api";
import arrayRandom from "../utils/arrayRandom";

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (id, { rejectWithValue }) => {
    try {
      const responce = await getMovie(id);
      return responce.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchImages = createAsyncThunk(
  "movie/fetchPictures",
  async (id, { rejectWithValue }) => {
    try {
      const responce = await getMovieImages(id);
      return responce.data.docs.filter(
        (x) =>
          // без тмдб
          !x.url.startsWith("https://www.themoviedb") &&
          // без битых сылок из бд
          !x.url.includes("http", 1) &&
          x.type !== "promo" &&
          x.type !== "shooting"
      );
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

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: {},
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
        state.movie = action.payload;
      })
      .addCase(fetchMovie.rejected, setError)

      .addCase(fetchImages.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.movie.backdrop = arrayRandom(action.payload);
      });
  },
});

export default movieSlice.reducer;

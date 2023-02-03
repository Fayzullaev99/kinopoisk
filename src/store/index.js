import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import filterReducer from "./filterSlice";
import searchReducer from "./searchSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});

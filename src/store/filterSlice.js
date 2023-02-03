import { createSlice } from "@reduxjs/toolkit";
import { CURRENT_YEAR } from "../utils/constants";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      genres: [],
      order: "новые",
      type: "Фильм",
      keyword: "",
      ratingFrom: 1,
      ratingTo: 10,
      yearFrom: 2000,
      yearTo: CURRENT_YEAR,
    },
  },
  reducers: {
    changeSingleInput(state, action) {
      state.filters[action.payload.name] = action.payload.value;
    },
    changeGenresInput(state, action) {
      state.filters.genres = action.payload;
    },
    changeDoubleInput(state, action) {
      state.filters[Object.keys(action.payload)[0]] = Object.values(
        action.payload
      )[0];
      state.filters[Object.keys(action.payload)[1]] = Object.values(
        action.payload
      )[1];
    },
  },
});

export const { changeSingleInput, changeGenresInput, changeDoubleInput } =
  filterSlice.actions;

export default filterSlice.reducer;

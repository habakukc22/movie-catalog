import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = { isSearching: false, searchedMovies: [] };

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    updateResults(state, action) {
      return {
        ...state,
        isSearching: !!action.payload.length,
        searchedMovies: action.payload,
      };
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;

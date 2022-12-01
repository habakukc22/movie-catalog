import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  isSearching: false,
  showSearchBar: false,
  searchText: "",
  searchedMovies: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    updateResults(state, action) {
      return {
        ...state,
        isSearching: !!action.payload.typedText.length,
        searchText: action.payload.typedText,
        searchedMovies: action.payload.fetchedMoviesResults,
      };
    },
    toggleSearchBar(state, action) {
      return { ...state, showSearchBar: !state.showSearchBar };
    },
    clearResults(state, action) {
      return { ...initialSearchState, showSearchBar: state.showSearchBar };
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;

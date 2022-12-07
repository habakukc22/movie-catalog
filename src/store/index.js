import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search-slice";
import categoriesReducer from "./categories-slice";
import burguerReducer from "./burguer-slice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    categories: categoriesReducer,
    burguer: burguerReducer,
  },
});

export default store;

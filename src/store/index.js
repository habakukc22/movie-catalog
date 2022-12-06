import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search-slice";
import categoriesReducer from "./categories-slice";

const store = configureStore({
  reducer: { search: searchReducer, categories: categoriesReducer },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialCategoriesState = {
  categories: [],
  isCategoriesShown: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesState,
  reducers: {
    toggleCategoriesList(state, action) {
      return {
        ...state,
        isCategoriesShown: !state.isCategoriesShown,
      };
    },
    closeCategoriesList(state, action) {
      return {
        ...state,
        isCategoriesShown: false,
      };
    },
    populateCategoryList(state, action) {
      if (JSON.stringify(state.categories) === JSON.stringify(action.payload)) {
        return state;
      } else {
        return {
          ...state,
          categories: action.payload,
        };
      }
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;

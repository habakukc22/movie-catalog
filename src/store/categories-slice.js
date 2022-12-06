import { createSlice } from "@reduxjs/toolkit";

const initialCategoriesState = {
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
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;

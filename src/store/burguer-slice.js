import { createSlice } from "@reduxjs/toolkit";

const initialBurguerState = {
  isBurguerHit: false,
};

const burguerSlice = createSlice({
  name: "burguer",
  initialState: initialBurguerState,
  reducers: {
    toggleBurguerMenu(state, action) {
      return {
        ...state,
        isBurguerHit: !state.isBurguerHit,
      };
    },
    closeBurguerMenu(state, action) {
      return {
        ...state,
        isBurguerHit: false,
      };
    },
  },
});

export const burguerActions = burguerSlice.actions;

export default burguerSlice.reducer;

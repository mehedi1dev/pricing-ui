import { createSlice } from "@reduxjs/toolkit";

export const priceModeSlice = createSlice({
  name: "priceMode",
  initialState: {
    mode: "",
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = priceModeSlice.actions;

export default priceModeSlice.reducer;

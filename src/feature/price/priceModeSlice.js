import { createSlice } from "@reduxjs/toolkit";

export const priceModeSlice = createSlice({
  name: "priceMode",
  initialState: {
    isMonthly: 1,
  },
  reducers: {
    setMonthly: (state) => {
      state.isMonthly = 1;
    },
    setYearly: (state) => {
      state.isMonthly = 0;
    },
  },
});

export const { setMonthly, setYearly } = priceModeSlice.actions;

export default priceModeSlice.reducer;

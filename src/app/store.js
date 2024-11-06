import { configureStore } from "@reduxjs/toolkit";
import priceModeReducer from "../feature/price/priceModeSlice";

export default configureStore({
  reducer: {
    priceMode: priceModeReducer,
  },
});

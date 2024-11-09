import { configureStore } from "@reduxjs/toolkit";
import priceModeReducer from "../feature/price/priceModeSlice";
import planReducer from "../feature/price/plansSlice";

export default configureStore({
  reducer: {
    priceMode: priceModeReducer,
    plans: planReducer,
  },
});

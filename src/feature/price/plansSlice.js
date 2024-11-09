import { createSlice } from "@reduxjs/toolkit";

export const plansSlice = createSlice({
  name: "plans",
  initialState: {
    simplifiedPlans: [],
    plansInfo: {},
    features: [],
  },
  reducers: {
    simplifyPlans: (state, action) => {
      const plans = action.payload;
      state.simplifiedPlans = plans.reduce((acc, plan) => {
        const existingPlan = acc.find((p) => p.name === plan.name);
        if (existingPlan) {
          existingPlan.title = [].concat(existingPlan.title, plan.title);
          existingPlan.price = [].concat(existingPlan.price, plan.price);
          existingPlan.text = [].concat(existingPlan.text, plan.text);
          existingPlan.details = [].concat(existingPlan.details, plan.details);
          existingPlan.isMultiple = true;
        } else {
          acc.push({ ...plan, isMultiple: false });
        }
        return acc;
      }, []);
    },
    setPlansInfo: (state, action) => {
      state.plansInfo = action.payload;
    },
    setFeatures: (state, action) => {
      state.features = action.payload;
    },
  },
});

export const { simplifyPlans, setPlansInfo, setFeatures } = plansSlice.actions;

export default plansSlice.reducer;

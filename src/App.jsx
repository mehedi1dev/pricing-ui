import "./App.css";
import { css } from "@emotion/css";
import SelectModeComponent from "./Components/SelectModeComponent";
import PriceCards from "./Components/PriceCards";
import data from "./data/pricing-table-data.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  simplifyPlans,
  setPlansInfo,
  setFeatures,
} from "./feature/price/plansSlice";

const containerStyle = css({
  maxWidth: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "16px",
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch actions to set data from JSON file
    if (data.plans) {
      dispatch(simplifyPlans(data.plans));
    }
    if (data.plansInfo) {
      dispatch(setPlansInfo(data.plansInfo));
    }
    if (data.features) {
      dispatch(setFeatures(data.features));
    }
  }, [dispatch]);

  return (
    <div className={containerStyle}>
      <SelectModeComponent />
      <PriceCards />
    </div>
  );
}

export default App;

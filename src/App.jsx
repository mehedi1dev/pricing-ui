import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { setMonthly, setYearly } from "./feature/price/priceModeSlice";
import { css } from "@emotion/css";

const style = css({
  color: "purple",
});

function App() {
  const priceMode = useSelector((state) => state.priceMode.isMonthly);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style}>{priceMode ? "Mothly" : "Yearly"}</div>
      <button
        onClick={() => {
          dispatch(setMonthly());
        }}
      >
        Monthly
      </button>
      <button
        onClick={() => {
          dispatch(setYearly());
        }}
      >
        Yearly
      </button>
    </>
  );
}

export default App;

import { css } from "@emotion/css";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../feature/price/priceModeSlice";

const headerStyle = css({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  marginBottom: "2rem",
});

const tabStyle = css({
  padding: "0.5rem 1rem",
  cursor: "pointer",
  color: "#666",
  border: "none",
  fontSize: "16px",
  background: "transparent",
  "&:first-child": {
    borderRight: "1px solid #c6d7e3",
  },
});

const activeStyle = css({
  paddingBottom: "2px",
  color: "#b78deb",
  borderBottom: "2px solid #b78deb",
  fontWeight: "bold",
});

const SelectModeComponent = () => {
  const dispatch = useDispatch();
  const priceMode = useSelector((state) => state.priceMode.mode);
  const { plansInfo } = useSelector((state) => state.plans);

  // Get the first key dynamically
  const defaultMode = Object.keys(plansInfo)[0] || "1_year"; // Default to "1_year" if plansInfo is empty

  // If the mode is not set, initialize it to the first key of plansInfo
  if (!priceMode) {
    dispatch(setMode(defaultMode));
  }

  return (
    <div>
      <div className={headerStyle}>
        <button
          className={tabStyle}
          onClick={() => {
            dispatch(setMode("1_year"));
          }}
        >
          <span className={`${priceMode === "1_year" && activeStyle}`}>
            {plansInfo["1_year"]?.title || "Billed monthly"}
          </span>
        </button>
        <button
          className={tabStyle}
          onClick={() => {
            dispatch(setMode("2_year"));
          }}
        >
          <span className={`${priceMode === "2_year" && activeStyle}`}>
            {plansInfo["2_year"]?.title || "Billed yearly"}
          </span>
        </button>
        {plansInfo["2_year"]?.discount && (
          <span
            className={css({
              background: "#f0e6fb",
              padding: "3px 6px",
              marginLeft: "10px",
              borderRadius: "40px",
              fontSize: "12px",
              display: "inline-flex",
              alignItems: "center",
              color: "#666",
            })}
          >
            {plansInfo["2_year"].discount}
          </span>
        )}
      </div>
    </div>
  );
};

export default SelectModeComponent;

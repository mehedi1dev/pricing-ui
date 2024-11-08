import { css } from "@emotion/css";
import { useDispatch, useSelector } from "react-redux";
import { setMonthly, setYearly } from "../feature/price/priceModeSlice";

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
  const isMonthly = useSelector((state) => state.priceMode.isMonthly);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={headerStyle}>
        <button
          className={tabStyle}
          onClick={() => {
            dispatch(setMonthly());
          }}
        >
          <span className={`${isMonthly && activeStyle}`}>Billed monthly</span>
        </button>
        <button
          className={tabStyle}
          onClick={() => {
            dispatch(setYearly());
          }}
        >
          <span className={`${!isMonthly && activeStyle}`}>Billed yearly</span>
        </button>
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
          Save 20% 🤩
        </span>
      </div>
    </div>
  );
};

export default SelectModeComponent;

import { css } from "@emotion/css";
import PriceCard from "./PriceCard";

const gridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(271px, 1fr))",
  gap: "16px",
  maxWidth: "1200px",
  margin: "0 auto",
});

// const popularBadgeStyle = css({
//   position: "absolute",
//   top: "-0.75rem",
//   right: "1rem",
//   backgroundColor: "#10b981",
//   color: "white",
//   padding: "0.25rem 0.75rem",
//   borderRadius: "1rem",
//   fontSize: "0.75rem",
// });

const PriceCards = () => {
  return (
    <div className={gridStyle}>
      {/* Free Plan */}
      <PriceCard primaryColor="#4cb3fd" secondaryColor="#e5f2ff" />
      <PriceCard primaryColor="#4cb3fd" secondaryColor="#e5f2ff" />
      <PriceCard primaryColor="#4cb3fd" secondaryColor="#e5f2ff" />
      <PriceCard primaryColor="#4cb3fd" secondaryColor="#e5f2ff" />
    </div>
  );
};

export default PriceCards;

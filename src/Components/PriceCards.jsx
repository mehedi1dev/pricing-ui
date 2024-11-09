import { css } from "@emotion/css";
import PriceCard from "./PriceCard";
import { useSelector } from "react-redux";

const gridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(271px, 1fr))",
  gap: "16px",
  maxWidth: "1200px",
  margin: "0 auto",
});

const cardColor = [
  {
    primaryColor: "#4cb3fd",
    secondaryColor: "#e5f2ff",
  },
  {
    primaryColor: "#ffb72c",
    secondaryColor: "#fff0d9",
  },
  {
    primaryColor: "#68cb9b",
    secondaryColor: "#d8fdf0",
  },
  {
    primaryColor: "#b78deb",
    secondaryColor: "#f7f5fb",
  },
];

const PriceCards = () => {
  const { simplifiedPlans } = useSelector((state) => state.plans);

  return (
    <div className={gridStyle}>
      {simplifiedPlans?.map((planData, index) => {
        const colorIndex = index % cardColor.length;
        return (
          <PriceCard
            primaryColor={cardColor[colorIndex].primaryColor}
            secondaryColor={cardColor[colorIndex].secondaryColor}
            data={planData}
            isMultiple={planData.isMultiple}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default PriceCards;

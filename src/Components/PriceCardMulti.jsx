import { css } from "@emotion/css";
import PropTypes from "prop-types";
import Tooltip from "./smallComponents/Tooltip";
import CustomSelect from "./smallComponents/CustomSelect";
import { useState } from "react";
import InfoIcon from "./smallComponents/InfoIcon";
import { useSelector } from "react-redux";

const PriceCardMulti = ({
  primaryColor = "#4cb3fd",
  secondaryColor = "#e5f2ff",
  data,
}) => {
  const [priceIndex, setPriceIndex] = useState(0);
  const { features } = useSelector((state) => state.plans);
  const { mode } = useSelector((state) => state.priceMode);

  const onSelect = (option) => {
    setPriceIndex(option.value);
  };
  const headerStyle = css({
    padding: "2rem",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    borderTop: `10px solid ${primaryColor}`,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  });

  const buttonStyle = css({
    padding: "0.75rem",
    borderRadius: "0.375rem",
    border: "none",
    color: "white",
    fontWeight: 500,
    cursor: "pointer",
    marginTop: "auto",
    background: primaryColor,
  });

  const featureListStyle = css({
    listStyle: "none",
    padding: "10px 0px",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  });

  const selectSectionStyle = css({
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "25px",
    color: primaryColor,
  });
  return (
    <div className={headerStyle}>
      <div>
        <p className={css({ margin: 0, fontSize: "18px", color: "#49687E" })}>
          {data.name}
        </p>
        <div
          className={css({
            padding: "10px 0px",
            margin: "0 0 4px",
            display: "inline-flex",
            columnGap: "10px",
          })}
        >
          <span
            className={css({
              margin: 0,
              fontSize: "32px",
              fontWeight: "bold",
              color: primaryColor,
            })}
          >
            {data.details[priceIndex][mode].price}
          </span>
          <div
            className={css({
              display: data.name.toLowerCase() === "free" ? "none" : "flex",
              flexDirection: "column-reverse",
              marginBottom: "4px",
            })}
          >
            <span
              className={css({ margin: 0, fontSize: "14px", color: "#83a1b7" })}
            >
              /Month
            </span>
            <span
              className={css({
                color: "red",
                textDecoration: "line-through",
                fontSize: "12px",
              })}
            >
              {data.price[priceIndex]}/month
            </span>
          </div>
        </div>
        <br />
        <div className={css(selectSectionStyle)}>
          <div
            className={css({
              minWidth: "150px",
              maxWidth: "200px",
              width: "full",
            })}
          >
            <CustomSelect
              options={data.title.map((value, index) => {
                return { label: value, value: index };
              })}
              onChange={onSelect}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          </div>
          <span className={css({ marginTop: "4px" })}>
            <InfoIcon text={data.text[priceIndex]} />
          </span>
        </div>
      </div>

      <div>
        <p
          className={css({
            color: "#49687E",
            fontWeight: "500",
            padding: "8px 0px",
          })}
        >
          {data.name} includes:
        </p>
        <ul className={featureListStyle}>
          {features
            .filter((feature) => {
              return feature.is_pro === (data.name === "Free" ? "0" : "1");
            })
            .map((feature, index) => (
              <li
                className={css({ padding: "5px 0px", color: "#49687E" })}
                key={index}
              >
                <Tooltip text={feature.feature_desc}>
                  {feature.feature_title}
                </Tooltip>
              </li>
            ))}
        </ul>
      </div>

      <button className={css(buttonStyle)}>
        {data.details[priceIndex][mode].btn_text}
      </button>
    </div>
  );
};

PriceCardMulti.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
  }).isRequired,
  showSelect: PropTypes.bool,
};

export default PriceCardMulti;

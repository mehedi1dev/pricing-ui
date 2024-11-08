import { css } from "@emotion/css";
import CustomSelect from "./smallComponents/CustomSelect";

const InfoIcon = () => {
  return (
    <span>
      <div className="pt__tooltip">
        <div className="pt__tooltip__content">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_615_3319)">
              <path
                d="M8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z"
                stroke="currentColor"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 10.6667V8"
                stroke="currentColor"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 5.3335H8.00667"
                stroke="currentColor"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_615_3319">
                <rect width="16" height="16" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="pt__tooltip__hover">
          The total number of unique visitors who can view Chaty on your website
          each month. The visitors counter resets once every month
        </div>
      </div>
    </span>
  );
};

const PriceCard = ({
  primaryColor = "#4cb3fd",
  secondaryColor = "#e5f2ff",
}) => {
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

  const visitorStyle = css({
    width: "fit-content",
    padding: "5px 15px",
    borderRadius: "40px",
    fontSize: "12px",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    background: secondaryColor,
    color: primaryColor,
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
          Free
        </p>
        <div
          className={css({
            padding: "10px 0px",
            margin: "0 0 4px",
            display: "inline-flex",
            columnGap: "10px",
            alignItems: "baseLine",
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
            Free
          </span>
          <span
            className={css({ margin: 0, fontSize: "14px", color: "#83a1b7" })}
          >
            /Month
          </span>
        </div>
        <br />
        <div className={css(visitorStyle)}>
          <p>Up to 500 visitors/month</p>
          <span className={css({ marginTop: "4px" })}>
            <InfoIcon />
          </span>
        </div>

        <div className={css(selectSectionStyle)}>
          <div
            className={css({
              minWidth: "150px",
              maxWidth: "200px",
              width: "full",
            })}
          >
            <CustomSelect
              options={[
                {
                  label: "Up to 10,000 visitors/month",
                  value: "Up to 10,000 visitors/month",
                },
                {
                  label: "Up to 20,000 visitors/month",
                  value: "Up to 20,000 visitors/month",
                },
                {
                  label: "Up to 30,000 visitors/month",
                  value: "Up to 30,000 visitors/month",
                },
              ]}
              selectedValue={"Up to 10,000 visitors/month"}
              color={primaryColor}
            />
          </div>

          <span className={css({ marginTop: "4px" })}>
            <InfoIcon />
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
          Free includes:
        </p>
        <ul className={featureListStyle}>
          {[
            "Unlimited widgets",
            "Unlimited channels",
            "Contact form",
            "Widget customization",
            "Channels customization",
            "Triggers",
            "Attention effect",
            "Page targeting",
            "Custom channels",
          ].map((feature, index) => (
            <li
              className={css({ padding: "5px 0px", color: "#49687E" })}
              key={index}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button className={css(buttonStyle)}>Select Plan</button>
    </div>
  );
};
PriceCard.propTypes = {
  primaryColor: String,
  secondaryColor: String,
};
export default PriceCard;

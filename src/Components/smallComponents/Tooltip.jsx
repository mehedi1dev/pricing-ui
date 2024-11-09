import PropTypes from "prop-types";
import { css } from "@emotion/css";

const Tooltip = ({ text, children }) => {
  const tooltipStyle = css({
    width: "200px", // Fixed width for tooltip
    whiteSpace: "normal", // Allows text to wrap within the fixed width
    wordWrap: "break-word",
    "& img": {
      maxWidth: "100%", // Limits image width to the tooltip's width
      height: "auto", // Maintains image aspect ratio
    },
  });

  return (
    <span className="pt__tooltip">
      <div className="pt__tooltip__content">{children}</div>
      <div
        className={`pt__tooltip__hover ${tooltipStyle}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </span>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;

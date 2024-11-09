import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/css";

const CustomSelect = ({
  options,
  onChange,
  primaryColor = "#b78deb",
  secondaryColor = "#e5f2ff",
}) => {
  const dropdownRef = useRef(null);

  const dropdownStyles = css({
    position: "relative",
    width: "100%",
    marginTop: "0.25rem",
  });

  const buttonStyles = css({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    width: "100%",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    border: `1px solid ${primaryColor}`,
    color: primaryColor,
    cursor: "pointer",
    backgroundColor: "#fff",
    transition: "border-color 0.3s",

    "&:hover": {
      borderColor: "#6366f1",
    },
  });

  const buttonContentStyles = css({
    display: "flex",
    gap: "4px",
    alignItems: "center",
    width: "100%",
  });

  const labelStyles = css({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });

  const iconStyles = css({
    color: "#374151",
  });

  const menuStyles = css({
    position: "absolute",
    marginTop: "0.25rem",
    minWidth: "200px",
    maxWidth: "250px",
    borderRadius: "0.25rem",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 100,
  });

  const optionStyles = css({
    gap: "8px",
    padding: "16px 8px",
    cursor: "pointer",
    display: "flex",
    borderBottom: "1px solid #f0e6fb",
    fontSize: "12px",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: `${secondaryColor}`,
      color: primaryColor,
    },
  });

  const activeStyle = css({
    backgroundColor: `${secondaryColor}`,
    color: primaryColor,
  });

  const svgStyles = css({
    width: "16px",
    height: "16px",
    fill: primaryColor,
  });

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to handle click outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={dropdownStyles} ref={dropdownRef}>
      {/* Dropdown button */}
      <div className={buttonStyles} onClick={() => setIsOpen(!isOpen)}>
        <div className={buttonContentStyles}>
          <p
            className={labelStyles}
            dangerouslySetInnerHTML={{ __html: selectedOption.label }}
          ></p>
          <span className={iconStyles}>
            {isOpen ? (
              <svg className={svgStyles} viewBox="0 0 24 24">
                <path d="M7 14l5-5 5 5H7z" />
              </svg>
            ) : (
              <svg className={svgStyles} viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            )}
          </span>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className={menuStyles}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`${optionStyles} ${
                option === selectedOption && activeStyle
              }`}
            >
              <p dangerouslySetInnerHTML={{ __html: option.label }}></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

export default CustomSelect;

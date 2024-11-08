import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/css";

const CustomSelect = ({ options, selectedValue, color = "#b78deb" }) => {
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
    border: `1px solid ${color}`,
    color: color,
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
    width: "100%",
    borderRadius: "0.25rem",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 100,
  });

  const optionStyles = css({
    gap: "8px",
    padding: "16px 8px",
    cursor: "pointer",
    borderBottom: "1px solid #f0e6fb",
    fontSize: "12px",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: `${color}1a`,
      color: color,
    },
  });

  const activeStyle = css({
    backgroundColor: `${color}1a`,
    color: color,
  });

  const svgStyles = css({
    width: "16px",
    height: "16px",
    fill: "#b78deb",
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const selected = options.find((option) => option.label === selectedValue);
    setSelectedOption(selected || null);
  }, [selectedValue, options]);

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
    setIsOpen(false);
  };

  return (
    <div className={dropdownStyles} ref={dropdownRef}>
      {/* Dropdown button */}
      <div className={buttonStyles} onClick={() => setIsOpen(!isOpen)}>
        <div className={buttonContentStyles}>
          <p className={labelStyles}>
            {selectedOption ? selectedOption.label : "Select an option"}
          </p>
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
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  options: null,
  selectedValue: null,
  color: null,
};

export default CustomSelect;

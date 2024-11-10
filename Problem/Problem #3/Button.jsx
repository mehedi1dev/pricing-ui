import PropTypes from "prop-types";

const Button = ({ variant, children, onClick }) => {
  // An object that store the colors based on name,
  // so we can use it by simply calling,
  // and not to call conditional statement
  const buttonStyles = {
    primary: { backgroundColor: "blue", color: "white" },
    secondary: { backgroundColor: "gray", color: "black" },
    "icon-arrow-primary": { backgroundColor: "blue", color: "white" },
    "icon-arrow-secondary": { backgroundColor: "gray", color: "black" },
  };

  return (
    <button style={buttonStyles[variant]} onClick={onClick}>
      {(variant === "icon-arrow-primary" ||
        variant === "icon-arrow-secondary") && <span>&rarr;</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  //If the variant is fixed, we can use this.
  //   variant: PropTypes.oneOf([
  //     "primary",
  //     "secondary",
  //     "icon-arrow-primary",
  //     "icon-arrow-secondary",
  //   ]).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;

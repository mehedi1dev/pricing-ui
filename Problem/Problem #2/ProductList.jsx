// ProductList.js
import React from "react";
import PropTypes from "prop-types";

//Using React.memo to cache the result
const ProductList = React.memo(({ products }) => {
  console.log("ProductList rendered");
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
});

ProductList.displayName = "ProductList";

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;

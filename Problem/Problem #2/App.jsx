import { useState, useCallback } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

//To optize the this codebase, React.Memo and useCallack is needed.
// React.memo to skip re-rendering a component if the props are unchanged.
// useCallback to skip re-rendering on next renders.

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
  ]);

  const addProduct = useCallback((product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: prevProducts.length + 1 },
    ]);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;

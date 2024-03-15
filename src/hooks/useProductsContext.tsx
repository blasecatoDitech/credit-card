import { useContext } from "react";
import ProductContext from "../context/ProductsProvider";

const useProductsContext = () => {
  return useContext(ProductContext);
};

export default useProductsContext;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { TypeProduct, TypeOrders } from "../common/utils/types";
const API = import.meta.env.VITE_API;

const ProductContext = createContext({});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [listProducts, setlistProducts] = useState({});
  const [listCategories, setlistCategories] = useState({});
  const [listOrders, setListOrders] = useState<TypeOrders[]>([]);

  async function getProducts() {
    const url = `${API}/products?limit=12`;
    const { data: dataProducts } = await axios.get(url);
    setlistProducts(dataProducts);
  }

  async function getCategories() {
    const url = `${API}/products/categories`;
    const { data: dataCategories } = await axios.get(url);
    setlistCategories(dataCategories);
  }

  const handleAddOrder = (product: TypeProduct, amount: number) => {
    const values = { product, amount };
    console.log("====================================");
    console.log(product, amount);
    console.log("====================================");

    const productIndex = listOrders?.find(
      (prodID: TypeOrders) => prodID.product.id === product.id
    );

    if (productIndex?.product?.id >= 1) {
      for (let index = 0; index < listOrders.length; index++) {
        const element = listOrders[index];
        if (element.product.id === productIndex?.product?.id) {
          if (amount === 0) {
            const newListOrders = listOrders.filter(
              (item: TypeOrders) => item.product.id !== product.id
            );
            setListOrders(newListOrders);
            return;
          }
          element.amount = amount;
        }
      }

      return;
    }
    if (amount >= 1) {
      setListOrders([...listOrders, values]);
      return;
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        listProducts,
        listCategories,
        listOrders,
        handleAddOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;

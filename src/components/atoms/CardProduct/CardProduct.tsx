/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { TypeProduct } from "../../../common/utils/types";
import { useState } from "react";
import useProductsContext from "../../../hooks/useProductsContext";

interface Props {
  product: TypeProduct;
}
const CardProduct = ({ product }: Props) => {
  const [counter, setCounter] = useState(0);
  const { handleAddOrder }: any = useProductsContext();

  const handleOrders = (type: string) => {
    if (type === "less" && counter >= 1) {
      setCounter(counter - 1);
      handleAddOrder(product, counter - 1);
    }
    if (type === "more" && counter <= 9) {
      setCounter(counter + 1);
      handleAddOrder(product, counter + 1);
    }
  };

  return (
    <div className="CardProduct">
      <img src={product.image} />
      <div className="card-footer">
        <h2 className="h2">{product.title}</h2>
        <p className="category-text">{product.category}</p>
        <div className="flex">
          <p className="price">
            <span className="signal">$</span>
            {product.price}
          </p>
          <div className="buttons">
            <Button onClick={() => handleOrders("less")}>-</Button>
            {counter}
            <Button onClick={() => handleOrders("more")}>+</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;

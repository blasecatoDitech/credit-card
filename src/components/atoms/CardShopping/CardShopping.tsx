/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeOrders } from "../../../common/utils/types";

interface Props {
  order: TypeOrders;
}
const CardShopping = ({ order }: Props) => {
  console.log(order);
  const { product, amount }: any = order;

  return (
    <div className="CardShopping">
      <div className="left">
        <div className="image">
          <img src={product.image} alt="" className="logo" />
        </div>
        <div className="body">
          <p className="">{product.title}</p>
          <span className="">${product.price}</span>
        </div>
      </div>
      <div className="flex-column">
        <div className="row">
          <span className="title">Amount</span>
          <span className="text">{amount}</span>
        </div>
        <span className="title">Total</span>
        <span className="text">${amount * product?.price}</span>
      </div>
    </div>
  );
};

export default CardShopping;

/* eslint-disable @typescript-eslint/no-explicit-any */
import useProductsContext from "../../../hooks/useProductsContext";
import CardProduct from "../../atoms/CardProduct/CardProduct";

const ListProducts = () => {
  const { listProducts }: any = useProductsContext();
  return (
    <div className="products">
      <h1 className="body-title text-center mt-5">New Arrivals</h1>
      <h1 className="body-regular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor
        augue
      </h1>
      <div className="list-products">
        {listProducts.length >= 1 &&
          listProducts?.map((product: any) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default ListProducts;

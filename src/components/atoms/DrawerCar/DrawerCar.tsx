/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Drawer } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import useProductsContext from "../../../hooks/useProductsContext";
import CardShopping from "../CardShopping/CardShopping";
import { TypeOrders } from "../../../common/utils/types";

const DrawerCar = () => {
  const [open, setOpen] = useState(false);
  const { listOrders }: any = useProductsContext();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  // console.log("====================================");
  // console.log(listOrders);
  // console.log("====================================");
  return (
    <div className="DrawerCar">
      <Button className="button button-shop" onClick={showDrawer}>
        <ShoppingCartOutlined />
        <span>Comprar</span>
        {listOrders.length >= 1 && (
          <div className="alert">
            <span>{listOrders.length}</span>
          </div>
        )}
      </Button>
      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {listOrders?.map((order: TypeOrders) => (
          <CardShopping key={order.product.id} order={order} />
        ))}
        <div className="button-float">
          <Button className="button-confirm">
            <ShoppingCartOutlined />
            Comprar
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerCar;

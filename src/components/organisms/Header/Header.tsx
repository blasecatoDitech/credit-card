/* eslint-disable @typescript-eslint/no-explicit-any */
import LogoPng from "../../../assets/images/logo.png";
import { Button } from "antd";
import useProductsContext from "../../../hooks/useProductsContext";
import { useState } from "react";
import DrawerCar from "../../atoms/DrawerCar/DrawerCar";

const Header = () => {
  const [categoryActive, setCategoryActive] = useState(0);
  const { listCategories }: any = useProductsContext();

  return (
    <>
      <div className="header-padding" />
      <div className="header">
        <div className="container">
          <div className="">
            <img src={LogoPng} alt="logo" className="logo" />
          </div>
          <nav>
            <DrawerCar />
          </nav>
        </div>
        <div className="nav">
          {listCategories?.length >= 1 &&
            listCategories?.map((category: any) => (
              <Button
                key={category}
                className={`button button-secoundary ${
                  categoryActive === category && "button-secoundary--active"
                }`}
                onClick={() => setCategoryActive(category)}
              >
                {category}
              </Button>
            ))}
        </div>
      </div>
    </>
  );
};

export default Header;

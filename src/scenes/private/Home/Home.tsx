/* eslint-disable @typescript-eslint/no-explicit-any */
import ListProducts from "../../../components/organisms/ListProducts/ListProducts";
import Banner from "./components/Banner/Banner";

const Home = () => {
  return (
    <div className="Home">
      <Banner />
      <ListProducts />
    </div>
  );
};
export default Home;

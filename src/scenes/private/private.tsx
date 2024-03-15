import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/organisms/Layout/Layout";
import Home from "./Home/Home";

const RouterPrivate = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
        // errorElement: <Page404 />,
      },
    ],
  },
]);

export default RouterPrivate;

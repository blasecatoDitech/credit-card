import { RouterProvider } from "react-router-dom";
import RouterPrivate from "./scenes/private/private";

function App() {
  return <RouterProvider router={RouterPrivate} />;
}

export default App;

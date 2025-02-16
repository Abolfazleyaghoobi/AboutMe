import Loader from "./components/loader/Loader";
import Home from "./page/home/Home";

export const routers = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/loader",
    element: <Loader />,
  },
];

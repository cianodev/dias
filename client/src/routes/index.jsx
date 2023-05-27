import { createBrowserRouter } from "react-router-dom";

import Pager from "../components/Pager";

import Login from "../pages/Login";
import Main from "../pages/Main";
import Home from "../pages/Home";
import Stocks from "../pages/Stocks";
import Notify from "../pages/Notify";
import ManageUsers from "../pages/ManageUsers";

const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Pager title="Dashboard" content={<Home />} />,
      },
      {
        path: "/stocks",
        element: <Pager title="Stocks" content={<Stocks />} />,
      },
      {
        path: "/notify",
        element: <Pager title="Notify" content={<Notify />} />,
      },
      {
        path: "/manage-users",
        element: <Pager title="Manager Users" content={<ManageUsers />} />,
      },
      {
        path: "*",
        element: <>No</>,
      },
    ],
  },
  {
    path: "/login",
    element: <Pager title="Login" content={<Login />} />,
  },
]);

export { router };

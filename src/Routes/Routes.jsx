import { Routes, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import DashboardLayouts from "../Layout/DashboardLayouts";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Region from "../Dashboard/Region/Region";
import Area from "../Dashboard/Area/Area";
import CreateRegion from "../Dashboard/Region/CreateRegion";
import CreateArea from "../Dashboard/Area/CreateArea";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  // dashboard ================
  {
    path: "/dashboard",
    element: <DashboardLayouts />,
    children: [
      {
        path: "/dashboard/region",
        element:  <PrivateRoute>
        <Region />
      </PrivateRoute>,
      },
      {
        path: "/dashboard/region",
        element: (
          <PrivateRoute>
            <Region />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/region/createRegion",
        element: <PrivateRoute><CreateRegion /></PrivateRoute>,
      },
      {
        path: "/dashboard/area",
        element:<PrivateRoute> <Area /></PrivateRoute>,
      },
      {
        path: "/dashboard/area/createArea",
        element: <PrivateRoute><CreateArea /></PrivateRoute>,
      },
    ],
  },
]);

export default router;

// import MainLayout from "../../layout/MainLayout";
// import { privateRoutes } from "./privateRoutes";

// export const getRoutes = () => ({
//   path: "/",
//   element: <MainLayout />,
//   children: privateRoutes,
// });

import { privateRoutes } from "./privateRoutes";
import MainLayout from "../../layout/MainLayout";
import ProtectRoute from "./ProtectRoute";
export const getRoutes = () => {
  const allRoute = [];
  privateRoutes.map((r) => {
    r.element = <ProtectRoute route={r}>{r.element}</ProtectRoute>;
  });
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};

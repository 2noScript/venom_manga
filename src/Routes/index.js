//pages
import Home from "~/pages/Home";
import { routesConfig } from "~/configs";
//layout

import { HomeLayout } from "~/layouts";
import { Fragment } from "react";

const publicRoutes = [
  { path: routesConfig.home, component: Home, layout: HomeLayout },
  // other
  //
];
const privateRoutes = {};
export { publicRoutes, privateRoutes };

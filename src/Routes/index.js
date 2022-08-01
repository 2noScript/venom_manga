//pages
import Home from "~/pages/Home";
import MangaDetail from "~/pages/MangaDetail";
import { routesConfig } from "~/configs";
//layout

import { HomeLayout, MangaDetailLayout } from "~/layouts";
import { Fragment } from "react";

const publicRoutes = [
  { path: routesConfig.home, component: Home, layout: HomeLayout },
  { path: "/test", component: Fragment, layout: HomeLayout },
  {
    path: routesConfig.mangaDetail,
    component: MangaDetail,
    layout: MangaDetailLayout,
  },

  // other
  //
];
const privateRoutes = {};
export { publicRoutes, privateRoutes };

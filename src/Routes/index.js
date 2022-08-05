import { Routes, Route } from "react-router-dom";
import { memo } from "react";
//pages
import Home from "~/pages/Home";
import MangaDetail from "~/pages/MangaDetail";
import MangaFilter from "../pages/MangaFilter";
import { routesConfig } from "~/configs";

//layout

import { DefaultLayout } from "~/layouts";
import { Fragment } from "react";

const publicRoutes = [
  { path: routesConfig.home, component: Home, layout: DefaultLayout },
  {
    path: routesConfig.mangaDetail,
    component: MangaDetail,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.mangaFilter,
    component: MangaFilter,
    layout: DefaultLayout,
  },
];

const privateRoutes = {};
function RenderRoutes() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        const Layout = route.layout;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}
export default memo(RenderRoutes);
export { publicRoutes, privateRoutes };

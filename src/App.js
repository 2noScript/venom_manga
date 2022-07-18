import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/Routes";
import useScrollPosition from "@react-hook/window-scroll";
import OnTop from "./components/OnTop";
import { useState, useEffect } from "react";
function App() {
  const scrollY = useScrollPosition(60 /*fps*/);

  return (
    <div className="app">
      {scrollY > 600 && <OnTop right={"10px"} top={"600px"} />}
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
    </div>
  );
}

export default App;

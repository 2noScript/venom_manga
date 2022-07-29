import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/Routes";
import useScrollPosition from "@react-hook/window-scroll";
import { useSelector } from "react-redux";
import OnTop from "./components/OnTop";
import { useEffect } from "react";
const SCROLL_FPS = 250;
function App() {
  const scrollY = useScrollPosition(SCROLL_FPS);
  const title = useSelector((state) => state.appTitle.title);
  useEffect(() => {
    document.title = title;
    console.log(title);
  }, [title]);
  return (
    <div className="app">
      {scrollY > 600 && <OnTop right={"42px"} top={"600px"} />}
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

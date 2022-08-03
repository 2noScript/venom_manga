import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/Routes";
import useScrollPosition from "@react-hook/window-scroll";
import { useWindowWidth } from "@react-hook/window-size";
import { useSelector } from "react-redux";
import OnTop from "./components/OnTop";
import { useEffect } from "react";
import { memo } from "react";
import ComboBox from "./components/ComboBox";
const SCROLL_FPS = 250;
const options = [
  { value: "chocolate", label: "C" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
function App() {
  const scrollY = useScrollPosition(SCROLL_FPS);
  const title = useSelector((state) => state.appTitle.title);
  const onlyWidth = useWindowWidth();
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="app">
      {scrollY > 600 && <OnTop right={"42px"} top={"600px"} />}
      {onlyWidth > 860 && null && (
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
      )}
      <ComboBox options={options} />
    </div>
  );
}

export default memo(App);

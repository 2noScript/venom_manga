import RenderRoutes from "~/Routes";
import { useWindowWidth } from "@react-hook/window-size";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { memo } from "react";
import ScrollOnTop from "./components/ScrollOnTop";
const SCROLL_FPS = 250;

function App() {
  const title = useSelector((state) => state.appTitle.title);
  const onlyWidth = useWindowWidth();
  useEffect(() => {
    document.title = title;
}, [title]);
  return (
    <div className="app">
      <ScrollOnTop fps={SCROLL_FPS} right={"42px"} top={"600px"} />
      {onlyWidth > 860 && true && <RenderRoutes />}
    </div>
  );
}

export default memo(App);

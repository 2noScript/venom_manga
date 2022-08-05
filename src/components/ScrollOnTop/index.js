import OnTop from "../OnTop";
import useScrollPosition from "@react-hook/window-scroll";

function ScrollOnTop({ fps = 60, top, right }) {
  const scrollY = useScrollPosition(fps);

  return <> {scrollY > 600 && <OnTop right={right} top={top} />}</>;
}

export default ScrollOnTop;

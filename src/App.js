import { useFetch } from "~/hooks";
import Header from "./components/Header";
import BannerSlide from "./components/BannerSilde";
import Tippy from "@tippyjs/react/headless";
function App() {
  const [data] = useFetch("get", "new-update");
  console.log(data);
  return (
    <div className="app">
      <Header />
      {/* {data && <BannerSlide data={data.jsonData} />} */}
      <Tippy
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            My tippy box
          </div>
        )}
      >
        <button>My button</button>
      </Tippy>
    </div>
  );
}

export default App;

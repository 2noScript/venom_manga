import { useFetch } from "~/hooks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerSlide from "./components/BannerSilde";
import Loading from "./components/Loading";
import Tippy from "@tippyjs/react/headless";
function App() {
  const [data] = useFetch("get", "new-update");
  console.log(data);
  return (
    <div className="app">
      {data ? (
        <>
          <Header />
          {data && <BannerSlide data={data.jsonData} />}
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;

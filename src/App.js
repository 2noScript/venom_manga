import { useFetch } from "~/hooks";
import BannerSlide from "./components/BannerSilde";

function App() {
  const [data] = useFetch("get", "new-update");
  console.log(data);
  return (
    <div className="app">{data && <BannerSlide data={data.jsonData} />}</div>
  );
}

export default App;

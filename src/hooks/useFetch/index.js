import { useState, useEffect } from "react";

import fetchApi from "~/Fetch";
const useFetch = (method, url, option) => {
  const [data, setData] = useState();
  useEffect(() => {
    const request = async (method, url, option) => {
      try {
        if (method === "get") {
          const res = await fetchApi.get(url, option);
          setData(res.data);
        } else if (method === "post") {
          //
        }
      } catch (err) {
        console.log("request not found");
      }
    };
    request(method, url, option);
    return;
  }, [url]);
  return [data];
};

export default useFetch;

import axios from "axios";
const fetchApi = axios.create({
  baseURL: process.env.REACT_APP_API,
  // baseURL: process.env.REACT_APP_LOCAL_API,
});

export default fetchApi;

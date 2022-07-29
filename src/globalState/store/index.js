import { configureStore } from "@reduxjs/toolkit";
import homeData from "../homeData";
import appTitle from "../appTitle";
export default configureStore({
  reducer: { homeData, appTitle },
});

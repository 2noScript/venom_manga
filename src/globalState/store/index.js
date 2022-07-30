import { configureStore } from "@reduxjs/toolkit";
import homeData from "../homeData";
import appTitle from "../appTitle";
import searchKey from "../searchKey";
export default configureStore({
  reducer: { homeData, appTitle, searchKey },
});

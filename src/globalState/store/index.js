import { configureStore } from "@reduxjs/toolkit";
import homeData from "../homeData";
import appTitle from "../appTitle";
import searchKey from "../searchKey";
import mangaDetailData from "../mangaDetailData";
import mangaFilterData from "../mangaFilterData";
export default configureStore({
  reducer: { homeData, appTitle, searchKey, mangaDetailData, mangaFilterData },
});

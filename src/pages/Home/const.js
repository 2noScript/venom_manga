import { routesConfig } from "~/configs";

const TITLE = {
  newUpdate: {
    name: "mới cập nhật",
    link: ``,
  },
  newManga: {
    name: "truyện mới",
    link: `${routesConfig.mangaFilter}?page=0&sort=2&genres=0&status=0`,
  },
};
const TOP_MANGA = [
  {
    title: "top one",
    name: "topOne",
    more: `${routesConfig.mangaFilter}?page=0&sort=2&genres=0&status=0`,
  },
  {
    title: "top tháng",
    name: "topMonth",
    more: `${routesConfig.mangaFilter}?page=0&sort=1&genres=0&status=0`,
  },
  {
    title: "top tuần",
    name: "topWeek",
    more: `${routesConfig.mangaFilter}?page=0&sort=2&genres=0&status=0`,
  },
  {
    title: "top ngày",
    name: "topDay",
    more: `${routesConfig.mangaFilter}?page=0&sort=3&genres=0&status=0`,
  },
];
const MORE_BUTTON = [
  {
    title: "xem thêm",
    link: "",
  },
  {
    title: "xem thêm",
    link: "",
  },
  {
    title: "xem thêm",
    link: "",
  },
  {
    title: "xem thêm",
    link: "",
  },
];
export { TITLE, TOP_MANGA, MORE_BUTTON };

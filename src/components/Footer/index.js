import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { memo } from "react";
import {
  FaFacebookSquare,
  FaTiktok,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaRegCopyright,
} from "react-icons/fa";
import { ImNeutral } from "react-icons/im";
import venomLeft from "img/footer/venom-left.png";
import venomCenter from "img/footer/venom-center.png";
import venomRight from "img/footer/venom-preview.png";
const cx = classNames.bind(styles);

const contact = [
  {
    name: "facebook",
    ico: <FaFacebookSquare />,
    link: "https://www.facebook.com/profile.php?id=100024072759238",
  },
  {
    name: "youtube",
    ico: <FaYoutubeSquare />,
    link: "https://www.youtube.com/channel/UCBoON30jZ100O8m9DGUHWqQ",
  },
  {
    name: "tiktok",
    ico: <FaTiktok />,
    link: "https://www.tiktok.com/@2noscript?lang=en",
  },
  {
    name: "instagram",
    ico: <FaInstagramSquare />,
    link: "",
  },
];
const copyright = {
  name: "2noScript",
  link: "https://github.com/2noScript",
  ico: <FaRegCopyright />,
};
const important =
  "Mọi thông tin và hình ảnh trên website đều được sưu tầm trên Internet.Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông tin nào trên web này";
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <img src={venomLeft} alt={"left"} className={cx("img-left")} />
      <div className={cx("content")}>
        <img src={venomCenter} alt="" className={cx("img-center")} />
        <div className={cx("copyright")}>
          <span>copyright</span>
          <span>{copyright.ico}</span>
          <a href={copyright.link} target="blank">
            {copyright.name}
          </a>
        </div>
        <div className={cx("important")}>{important}</div>
        <div className={cx("contact")}>
          {contact.map((item, index) => {
            return (
              <div className={cx(`${item.name}`, "contact-item")} key={index}>
                <a href={item.link} target="blank">
                  {item.ico}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <img src={venomRight} alt="xx" className={cx("img-right")} />
    </div>
  );
}

export default memo(Footer);

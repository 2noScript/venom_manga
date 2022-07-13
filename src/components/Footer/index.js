import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

import {
  FaFacebookSquare,
  FaTiktok,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import venomLeft from "img/footer/Venom-footer-left.png";
import venomCenter from "img/footer/footer-center.png";
const cx = classNames.bind(styles);

const contact = [
  {
    name: "facebook",
    ico: <FaFacebookSquare />,
    link: "",
  },
  {
    name: "youtube",
    ico: <FaYoutubeSquare />,
    link: "",
  },
  {
    name: "tiktok",
    ico: <FaTiktok />,
    link: "",
  },
  {
    name: "instagram",
    ico: <FaInstagramSquare />,
    link: "",
  },
];
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <img src={venomLeft} alt={"left"} className={cx("img-left")} />
      <div className={cx("content")}>
        <img src={venomCenter} alt="" className={cx("img-center")} />
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
    </div>
  );
}

export default Footer;

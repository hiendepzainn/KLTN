import { IoHomeOutline } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";
import { PiUserCircleLight } from "react-icons/pi";
import "./Header.css";
import logo from "../../assets/images/find.png";

var Header = () => {
  return (
    <>
      <div className="header">
        <div className="left-component">
          <img src={logo} alt="logo" />
        </div>
        <div className="center-component">
          <div className="change-colour outer-icon">
            <IoHomeOutline className="home-icon center-icon" />
          </div>
          <div className="change-colour outer-icon">
            <TfiCup className="center-icon" />
          </div>
        </div>
        <div className="right-component">
          <div className="change-colour outer-right-icon outer-icon policy">
            <FaUserShield />
          </div>
          <div className="change-colour outer-right-icon outer-icon notification">
            <FaRegBell />
          </div>
          <div className="change-colour outer-right-icon outer-icon money">
            + 50,000đ
          </div>
          <div className="outer-right-icon infor">
            <PiUserCircleLight className="icon-user" />
          </div>
          <div className="change-colour outer-right-icon theme">
            <BsFillMoonFill className="icon-theme" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

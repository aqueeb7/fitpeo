import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header_sub_section">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <IoSearchSharp />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="header_sub_section">
        <div className="profile_setting">
          <div className="profile_setting_icon">
            <MdOutlineMail size={26} color="#ccc" />
          </div>
          <div className="profile-setting_icon">
            <IoSettingsOutline size={26} color="#ccc" />
          </div>
          <div className="profile-setting_icon">
            <IoMdNotificationsOutline size={26} color="#ccc" />
          </div>
          <div className="profile-setting_icon">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

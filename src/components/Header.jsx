import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../assets/profile.jpg";
import react from "../assets/react.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header_sub_section">
        <div className="logo">
          <img src={react} alt="logo" />
        </div>
      </div>
      <div className="header_sub_section">
        <div className="wrapper">
          <div className="icon">
            <IoSearchSharp color="#A5A6A9" size={22} />
          </div>
          <input className="input" placeholder="Search"></input>
        </div>
        {/* <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <IoSearchSharp />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
          />
        </div> */}
      </div>
      <div className="header_sub_section">
        <div className="profile_setting">
          <div className="profile_setting_icon">
            <MdOutlineMail size={24} color="#A5A6A9" />
          </div>
          <div className="profile_setting_icon">
            <IoSettingsOutline size={24} color="#A5A6A9" />
          </div>
          <div className="profile_setting_icon">
            <IoMdNotificationsOutline size={24} color="#A5A6A9" />
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

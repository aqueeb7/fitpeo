import logo from "../assets/react.svg";
import { FaHome } from "react-icons/fa";
import { MdInsertChartOutlined } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const icons = [
  FaHome,
  MdInsertChartOutlined,
  BiTask,
  CiWallet,
  IoBagCheckOutline,
  IoIosLogOut,
];
const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        {icons.map((Icon, index) => (
          <div key={index} className="sidebar__item">
            <Icon className="mx-4" size={26} color="#ccc" />
          </div>
        ))}
      </nav>
    </section>
  );
};

export default SideBar;

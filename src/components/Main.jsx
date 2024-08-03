import { IoMdArrowDropup } from "react-icons/io";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { BsBagPlusFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import Accordion from "./Accordian";

import { AiOutlineAim } from "react-icons/ai";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Rectangle,
} from "recharts";
import StatsCard from "./StatsCard";

const data = [
  { id: 1, day: 5, activity: 7000 },
  { id: 2, day: 6, activity: 3000 },
  { id: 3, day: 7, activity: 5000 },
  { id: 4, day: 8, activity: 8000 },
  { id: 5, day: 9, activity: 4000 },
  { id: 6, day: 10, activity: 6000 },
  { id: 7, day: 11, activity: 10000 },
  { id: 8, day: 12, activity: 12000 },
  { id: 9, day: 13, activity: 7000 },
  { id: 10, day: 14, activity: 9000 },
  { id: 11, day: 15, activity: 6000 },
  { id: 12, day: 16, activity: 8000 },
  { id: 13, day: 17, activity: 11000 },
  { id: 14, day: 18, activity: 10000 },
  { id: 15, day: 19, activity: 13000 },
  { id: 16, day: 20, activity: 15000 },
  { id: 17, day: 21, activity: 14000 },
  { id: 18, day: 22, activity: 11000 },
  { id: 19, day: 23, activity: 10000 },
  { id: 20, day: 24, activity: 9000 },
  { id: 21, day: 25, activity: 11000 },
  { id: 22, day: 26, activity: 12000 },
  { id: 23, day: 27, activity: 11000 },
];
const cards = [
  {
    icon: BsFillBagCheckFill,
    color: "#4062FE",
    title: "Total Orders",
    stat: {
      isProfitable: true,
      percentage: 3,
      quantity: 75,
    },
  },
  {
    icon: BsBagXFill,
    color: "#00C98D",
    title: "Total Delivered",
    stat: {
      isProfitable: false,
      percentage: 3,
      quantity: 70,
    },
  },
  {
    icon: BsBagPlusFill,
    color: "#F25E5E",
    title: "Total Cancelled",
    stat: {
      isProfitable: true,
      percentage: 3,
      quantity: 5,
    },
  },
  {
    icon: GiReceiveMoney,
    color: "#E443A1",
    title: "Total Revenue",
    stat: {
      isProfitable: false,
      percentage: 3,
      quantity: 12,
    },
  },
];
const accordionData = [
  {
    title: "Goals",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. `,
    icon: AiOutlineAim,
    color: "#FF6E24",
  },
  {
    title: "Popular Dishes",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
    icon: LiaHamburgerSolid,
    color: "#6E96FF",
  },
  {
    title: "Menus",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis.`,
    icon: BiDish,
    color: "#25A4DB",
  },
];

// Function to format y-axis tick labels
const formatYAxis = (tickItem) => {
  if (tickItem >= 1000) {
    return `${tickItem / 1000}k`;
  }
  return tickItem;
};

const Main = () => {
  return (
    <main className="main">
      <div className="sub-section">
        <div className="sub-main-section">
          {cards.map((Card, index) => (
            <CustomCard
              key={index}
              Icon={Card.icon}
              title={Card.title}
              color={Card.color}
              stat={Card.stat}
            />
          ))}
        </div>
      </div>
      <div className="sub-section">
        <StatsCard />
      </div>
      <div className="sub-section">
        <div className="sub-section-header">
          <h5
            style={{
              color: "#fff",
            }}
          >
            Activity
          </h5>
          <div className="custom-select-wrapper">
            <select className="custom-select">
              <option value="weekly" selected>
                Weekly
              </option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <BarChart width={1070} height={200} data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickCount={7}
            tickFormatter={formatYAxis}
          />
          <Bar
            dataKey="activity"
            fill="#7294FF"
            barSize={20}
            shape={<Rectangle radius={20} />}
          />
        </BarChart>
      </div>
      <div className="sub-section">
        <div className="custom-accordion">
          {accordionData.map(({ title, content, icon, color, index }) => (
            <Accordion
              key={index}
              title={title}
              content={content}
              Icon={icon}
              color={color}
            />
          ))}
        </div>
      </div>
      <div className="sub-section"></div>
      <div className="sub-section"></div>
      <div className="sub-section">
        <h2>Dashboard</h2>
      </div>
    </main>
  );
};

// eslint-disable-next-line react/prop-types
function CustomCard({ title, color, stat, Icon }) {
  return (
    <div className="custom-card">
      <div className="card-logo">
        <div className="icon-bg" style={{ backgroundColor: color + "50" }}>
          <Icon size={26} color={color} />
        </div>
      </div>
      <div className="card-header">
        <span>{title}</span>
      </div>
      <div className="card-stats">
        <div className="sub-card-stats">
          <h1>{stat.quantity}</h1>
        </div>
        <div className="sub-card-stats">
          <span style={{ color: stat.isProfitable ? "#6ee751" : "#E7545B" }}>
            {stat.isProfitable ? (
              <IoMdArrowDropup color="#6EE751" size={20} />
            ) : (
              <FaCaretDown color="#E7545B" />
            )}
            3%
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;

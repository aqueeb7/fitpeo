import { BsFillBagCheckFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { BsBagPlusFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";

const percentage = 66;

const cards = [
  {
    icon: BsFillBagCheckFill,
    color: "#4062FE",
    title: "Total Orders",
    stat: {
      isProfitable: true,
      percentage: 3,
      order: 75,
    },
  },
  {
    icon: BsBagXFill,
    color: "#00C98D",
    title: "Total Delevered",
    stat: {
      isProfitable: false,
      percentage: 3,
      order: 70,
    },
  },
  {
    icon: BsBagPlusFill,
    color: "#F25E5E",
    title: "Total Cancelled",
    stat: {
      isProfitable: true,
      percentage: 3,
      order: 5,
    },
  },
  {
    icon: BsBagPlusFill,
    color: "#E443A1",
    title: "Total Revenue",
    stat: {
      isProfitable: false,
      percentage: 3,
      order: 12,
    },
  },
];

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
        <div className="net_profit">
          <div className="stats">
            <p>Net Profit</p>
            <h2>$ 6759.25</h2>
            <span>
              <IoMdArrowDropup color="#6EE751" size={20} />
              3%
            </span>
          </div>
          <div className="progress_bar" style={{ width: 90, height: 100 }}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </div>
      </div>
      <div className="sub-section"></div>
      <div className="sub-section"></div>
      <div className="sub-section"></div>
      <div className="sub-section"></div>
    </main>
  );
};

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
          <h1>{stat.order}</h1>
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

import { IoMdArrowDropup } from "react-icons/io";

const StatsCard = () => {
  return (
    <div className="net_profit">
      <div className="stats">
        <p>Net Profit</p>
        <h2>$ 6759.25</h2>
        <span>
          <IoMdArrowDropup color="#6EE751" size={20} />
          3%
        </span>
      </div>
      <div className="progress_bar_wrapper">
        <div className="progress_bar">
          <svg
            width="150"
            height="150"
            viewBox="-18.75 -18.75 187.5 187.5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              r="65"
              cx="75"
              cy="75"
              fill="transparent"
              stroke="#28336a"
              strokeWidth="14"
              strokeDasharray="408.2px"
              strokeDashoffset="0"
            ></circle>
            <circle
              r="65"
              cx="75"
              cy="75"
              stroke="#7294ff"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDashoffset="122px"
              fill="transparent"
              strokeDasharray="408.2px"
            ></circle>
            <text
              x="48px"
              y="72px"
              fill="#ffffff"
              fontSize="30px"
              fontWeight="bold"
              style={{ transform: "rotate(90deg) translate(0px, -146px)" }}
            >
              70%
            </text>
            <text
              x="70px"
              y="95px"
              fill="#ffffff"
              fontSize="14px"
              style={{
                transform: "rotate(90deg) translate(-10px, -146px)",
              }}
            >
              Goal
            </text>
            <text
              x="50px"
              y="110px"
              fill="#ffffff"
              fontSize="14px"
              style={{
                transform: "rotate(90deg) translate(-10px, -146px)",
              }}
            >
              Completed
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

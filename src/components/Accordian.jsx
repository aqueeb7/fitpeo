import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, content, Icon, color }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="custom-accordion-item">
      <div
        className="custom-accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="accordion-logo">
          <div className="icon-bg" style={{ backgroundColor: color + "50" }}>
            <Icon size={26} color={color} />
          </div>
        </div>
        <p>{title}</p>
        <div className="accodion-caret">
          {/* {isActive ? <FaCaretUp color="#fff" /> : <FaCaretDown color="#fff" />} */}
          {isActive ? (
            <FaAngleDown color="#fff" style={{ marginLeft: "5px" }} />
          ) : (
            <FaAngleRight color="#fff" style={{ marginLeft: "5px" }} />
          )}
        </div>
      </div>
      {isActive && <div className="custom-accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;

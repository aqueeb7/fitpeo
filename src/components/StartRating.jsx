import { FaStar } from "react-icons/fa6";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        const starColor = index < rating ? "#FADD2E" : "#DCDCDB"; // Determine color
        return (
          <FaStar key={index} color={starColor} /> // Render star with appropriate color
        );
      })}
    </div>
  );
};

export default StarRating;

import { MdAir } from "react-icons/md";
import { FaHandsHoldingChild } from "react-icons/fa6";
import Features from "./Features";
function Hero() {
  return (
    <>
      <div className="hero">
        <h1 className="primary-heading">
          <FaHandsHoldingChild />
          רגע לנשום
        </h1>

        <p className="primary-text">
          המענה הראשוני לטיפול בלחץ נפשי בקרב ילדים
        </p>
        <Features></Features>
      </div>
    </>
  );
}

export default Hero;

import { MdAir } from "react-icons/md";
import { FaHandsHoldingChild } from "react-icons/fa6";
import Features_Lpage from "./Features_Lpage";

export default function Hero() {
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
      </div>
      <div>
        <Features_Lpage></Features_Lpage>
      </div>
    </>
  );
}
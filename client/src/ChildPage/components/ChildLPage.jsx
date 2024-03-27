import React, { useState, useEffect } from 'react';
import NavBarChildPage from "./NavBarChildPage";
import TabChildPage from "./TabChildPage";
import Music from "./Music";
import { Link } from "react-router-dom";

const tabs = [
  { name: "משחק", id: "Game", address: "/Game" },
  { name: "שליחת חיזוק", id: "send_affirmitive", address: "/send_affirmitive" },
  { name: "סיפורים מרגיעים", id: "stories", address: "/stories" },
  { name: "נשימות", id: "breath", address: "/Breath" },
];

function ChildLPage() {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     setShowPopup(true);
//   }, []);

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

  return (
    <section className="backgroundChildPage">
      <div className="ChildLPage">
        <div className="child-page">
          <NavBarChildPage />
          <Music></Music>
          <div className="tab-container">
            {tabs.map((tab) => (
              <Link key={tab.id} to={tab.address}>
                <TabChildPage tab={tab} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={handleClosePopup}>
              &times;
            </span>
            <p>אתה לא לבד צוות האתר ביחד איתך לכל אורך הדרך</p>
          </div>
        </div>
      )} */}
    </section>
  );
}

export default ChildLPage;
import NavBarChildPage from "./NavBarChildPage";
import TabChildPage from "./TabChildPage";
import Music from "./Music";
import { Link } from "react-router-dom"; // Import Link component from React Router

const tabs = [
  { name: "משחק", id: "Game", address: "/Game" },
  { name: "שליחת חיזוק", id: "send_affirmitive", address: "/send_affirmitive" },
  { name: "סיפורים מרגיעים", id: "stories", address: "/stories" },
  { name: "", id: "breath", address: "/Breath" },
];

function ChildLPage() {
  return (
    <section className="backgroundChildPage">
      <div className="ChildLPage">
        <div className="child-page">
          <NavBarChildPage />
          <Music></Music>
          <div className="tab-container">
            {tabs.map((tab) => (
              // Use Link component to create a link to the specified address
              <Link key={tab.id} to={tab.address}>
                <TabChildPage tab={tab} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChildLPage;

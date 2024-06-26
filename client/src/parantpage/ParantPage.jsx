import Navbarparant from "./Navbarparant";
import TabParantPage from "./TabParantPage";
import { Link } from "react-router-dom"; // Import Link component from React Router

const tabs = [
  { name: "הוספת ביקורות", id: "review", address: "/Review" },
  { name: "הצגת אנשי קשר", id: "contacts", address: "/Contacts" },
  { name: "מאגר מידע של עצות ", id: "advice", address: "/Advice" },
];

function ParantPage() {
  return (
    <div className="home-page-parant">
      <div className="ParantPage"></div>
      <Navbarparant />
      <div className="tab-container">
        {tabs.map((tab) => (
          // Use Link component to create a link to the specified address
          <Link key={tab.id} to={tab.address}>
            <TabParantPage tab={tab} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ParantPage;

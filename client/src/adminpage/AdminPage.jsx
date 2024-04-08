import Navbaradmin from "./Navbaradmin";
import { Link } from "react-router-dom"; // Import Link component from React Router
import TabAdminPage from "./TabAdminPage";

const tabs = [
  { name: "עריכת סיפורי ילד", id: "StoriesEdit", address: "/StoriesEdit" },
  { name: "עריכת מאגר עצות", id: "AdviceEdit", address: "/AdviceEdit" },
  {
    name: "עריכת ביקורות מדף בית",
    id: "ReviewsEdit",
    address: "/ReviewsEdit",
  },
];

function AdminPage() {
  return (
    <div className="home-page-Admin">
      <div className="AdminPage"></div>
      <Navbaradmin />
      <div className="tab-container">
        {tabs.map((tab) => (
          // Use Link component to create a link to the specified address
          <Link key={tab.id} to={tab.address}>
            <TabAdminPage tab={tab} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;

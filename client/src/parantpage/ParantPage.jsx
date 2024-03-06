import Navbarparant from "./Navbarparant";
import TabParantPage from "./TabParantPage";

const tabs = [
    { name: "קבלת דוחות אודות הילד", id: "reports" },
    { name: "שליחת הודעת חיזוק לילד", id: "message" },
    { name: "הוספת ביקורת לאתר", id: "review" },
    { name: "הצגת אנשי קשר", id: "contacts" },
    { name: "מאגר מידע של עצות ", id: "advice" },
  ];
  
  function ParantPage() {
    return (
      <div className="home-page-parant">
        <Navbarparant />
        <div className="tab-container">
          {tabs.map((tab) => (
            <TabParantPage key={tab.id} tab={tab} />
          ))}
        </div>
      </div>
    );
  }
  
  export default ParantPage;
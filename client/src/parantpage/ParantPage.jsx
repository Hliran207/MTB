import Navbarparant from "./Navbarparant";
import TabParantPage from "./TabParantPage";
import ReviewTab from '../parantpage/reviewpage/ReviewTab';

const tabs = [
  { name: "קבלת דוחות אודות הילד", id: "reports" },
  { name: "שליחת הודעת חיזוק לילד", id: "message" },
  { name: <ReviewTab />, id: "review" },
  { name: "הצגת אנשי קשר", id: "contacts" },
  { name: "מאגר מידע של עצות ", id: "advice" },
  ];
  
  function ParantPage() {
    return (
      <div className="home-page-parant">
        <div className="ParantPage"></div>
        <Navbarparant />
        <div className="tab-container">
          {tabs.map((tab) => (
            <TabParantPage key={tab.id} tab={tab}>
              {tab.id === 'review' && <ReviewTab />}
            </TabParantPage>
          ))}
        </div>
      </div>
    );
  }
  
  export default ParantPage;
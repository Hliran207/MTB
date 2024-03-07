import NavBarChildPage from "./NavBarChildPage";
import TabChildPage from "./TabChildPage";
import Music from "./Music";

const tabs = [
  { name: "משחק", id: "game" },
  { name: "שליחת חיזוק", id: "send_affirmitive" },
  { name: "סיפורים מרגיעים", id: "stories" },
  { name: "תרגילי נשימות", id: "breath" },
  // { name: "נוסף", id: "add" },
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
              <TabChildPage key={tab.id} tab={tab} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChildLPage;

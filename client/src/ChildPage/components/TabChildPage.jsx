/* eslint-disable react/prop-types */
// Tab.jsx
import "./TabChildPage.css";
function TabChildPage({ tab }) {
  return (
    <button className={`tab-panel ${tab.id === "breath" ? "breath" : ""}`}>
      <div className="tab-title">{tab.name}</div>
    </button>
  );
}

export default TabChildPage;

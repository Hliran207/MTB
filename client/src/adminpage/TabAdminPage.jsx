/* eslint-disable react/prop-types */
// Tab.jsx
function TabAdminPage({ tab }) {
  return (
    <button className="TabAdminPage-panel">
      <div className="tab-title">{tab.name}</div>
    </button>
  );
}

export default TabAdminPage;

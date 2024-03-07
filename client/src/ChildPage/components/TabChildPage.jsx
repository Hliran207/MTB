/* eslint-disable react/prop-types */
// Tab.jsx

function TabChildPage({ tab }) {
  return (
    <button className="tab-panel">
      <div className="tab-title">{tab.name}</div>
    </button>
  );
}

export default TabChildPage;

/* eslint-disable react/prop-types */
function TabParantPage({ tab }) {
    return (
      <button className="tab-panel">
        <div className="tab-title">{tab.name}</div>
      </button>
    );
  }
  
  export default TabParantPage;
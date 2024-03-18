/* eslint-disable react/prop-types */
import './TabParantPage.css';
function TabParantPage({ tab }) {
  return (
    <button className={`tab-panel ${tab.id === 'review' ? 'review' : ''}`}>
      <div className="tab-title">{tab.name}</div>
    </button>
  );
}
  
  export default TabParantPage;
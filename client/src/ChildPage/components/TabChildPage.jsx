/* eslint-disable react/prop-types */
// Tab.jsx
import BreathTab from '../Breath/BreathTab';
import './TabChildPage.css'
function TabChildPage({ tab }) {
  return (
    <button className={`tab-panel ${tab.id === 'breath' ? 'breath' : ''}`}>
      {tab.id === 'breath' && <BreathTab />}
      <div className="tab-title">{tab.name}</div>
    </button>
  );
}

export default TabChildPage;

import BreathingExercise from './BreathingExercise';
import NavBarChildPage from '../components/NavBarChildPage';

const Breath = () => {
  return (
    <div><NavBarChildPage />
      <div className="tab-container"></div>
      <h1>נשימות מרגיעות</h1>
      <BreathingExercise />
    </div>
  );
};

export default Breath;
import BreathingExercise from './BreathingExercise';
import NavBarChildPage from '../components/NavBarChildPage';

const Breath = () => {
  return (
    <div><NavBarChildPage />
      <div className="tab-container"></div>
      <BreathingExercise />
    </div>
  );
};

export default Breath;
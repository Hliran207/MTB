import NavBarChildPage from "../components/NavBarChildPage";
import GamePlay from "./GamePlay";
const Game = () => {
  return (
    <div>
      <NavBarChildPage />
      <div className="tab-container"></div>
      <GamePlay />
    </div>
  );
};

export default Game;

import NavBar from "./HomePage/components/NavBar";
import { Route, Routes } from "react-router-dom";
import Hero from "./HomePage/components/hero";
import LogIn from "./HomePage/components/LogIn";
import SignUp from "./HomePage/components/SignUp";
import ChildLPage from "./ChildPage/components/ChildLPage";
function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/ChildPage" element={<ChildLPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

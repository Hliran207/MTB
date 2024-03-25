import { Route, Routes } from "react-router-dom";
import Hero from "./HomePage/components/hero";
import LogIn from "./HomePage/components/LogIn";
import SignUp from "./HomePage/components/SignUp";
// import SignUp_child from "./HomePage/components/SignUp_child";
import ChildLPage from "./ChildPage/components/ChildLPage";
import ParantPage from "./parantpage/ParantPage";
import { Toaster } from "react-hot-toast";
import Breath from "./ChildPage/Breath/Breath";
import axios from "axios";
import Game from "./ChildPage/Game/Game";
import ReviewPage from "../src/parantpage/reviewpage/ReviewPage";
import ParentContactList from "./parantpage/ParentContactList/ParentContactList";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className="container">
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          {/* <Route path="/SignUpChild" element={<SignUp_child />}></Route> */}
          <Route path="/ChildPage" element={<ChildLPage />}></Route>
          <Route path="/ParantPage" element={<ParantPage />}></Route>
          <Route path="/Breath" element={<Breath />}></Route>
          <Route path="/Game" element={<Game />}></Route>
          <Route path="/Review" element={<ReviewPage />}></Route>
          <Route path="/Contacts" element={<ParentContactList />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

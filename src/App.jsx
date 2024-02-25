import NavBar from "./HomePage/components/NavBar"
import {Route, Routes} from 'react-router-dom'
import Hero from "./HomePage/components/hero"
import LogIn from "./HomePage/components/LogIn"
import SignUp from "./HomePage/components/SignUp"

function App() {

  return (
  <>
    <NavBar></NavBar>
    <div className="container">
      <Routes>
        <Route path="/" element = {<Hero />}></Route>
        <Route path="/LogIn" element = {<LogIn />}></Route>
        <Route path="/SignUp" element = {<SignUp />}></Route>
      </Routes>
    </div>
  </>
  )
}

export default App

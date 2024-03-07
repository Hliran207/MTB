import NavBar from "./NavBar";
import { useState } from "react";
import axios from 'axios';

export default function LogIn() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const logInUser = (e) => {
    e.preventDefault();
    axios.get('/');
  };

  return (
    <>
      <NavBar />
      <h1 className="sign-log-head">LOG IN</h1>
      <div className="sign-log-container">
        <form className="sign-log-form" onSubmit={logInUser}>
          <div className="container-input">
            <label className="sign-log-lable">Email</label>
            <input
              className="sign-log-lable"
              type="Email"
              placeholder="Enter Email..."
              value={data.email}
              onChange={(e)=> setData({...data, email:e.target.value})}
            />
          </div>
          <div className="container-input">
            <label className="sign-log-lable">Password</label>
            <input
              className="sign-log-lable"
              type="password"
              placeholder="Enter Password..."
              value={data.password}
              onChange={(e)=> setData({...data, password:e.target.value})}
            />
          </div>
          <button className="sign-log-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

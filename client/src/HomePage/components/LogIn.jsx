import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    emailParent: "",
    password: "",
  });

  const logInUser = async (e) => {
    e.preventDefault();
    const { emailParent, password } = data;
    try {
      const { data } = await axios.post("/LogIn", {
        emailParent,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/parantpage");
      }
    } catch (error) {}
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
              value={data.emailParent}
              onChange={(e) =>
                setData({ ...data, emailParent: e.target.value })
              }
            />
          </div>
          <div className="container-input">
            <label className="sign-log-lable">Password</label>
            <input
              className="sign-log-lable"
              type="password"
              placeholder="Enter Password..."
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
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

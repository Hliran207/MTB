import NavBar from "./NavBar";
import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';


export default function SignUp() {
  const navigate = useNavigate()
  const [data , setData] = useState({
      parent_name: '',
      child_name:'',
      emailParent: '',
      emailChild: '',
      password: '',
  })

  const signUpUser = async (e) => {
    e.preventDefault();
    debugger;
    const {parent_name, child_name, emailParent, emailChild, password} = data;
    try {
      const {data} = await axios.post("/SignUp", {
        parent_name, child_name, emailParent, emailChild, password
      })
      if (data.error) {
        toast.error(data.error)
      }else{
        setData({})
        toast.success('Sign Up Parent Successful!')
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <>
      <NavBar />
      <h1 className="sign-log-head">SIGN UP PARENT AND CHILD</h1>
      <div className="sign-log-container">
        <form className="sign-log-form" onSubmit={signUpUser}>
          <div className="container-input">
            <label className="sign-log-lable">Parent name</label>
            <input
              className="sign-log-lable"
              type="text"
              placeholder="Enter Name..."
              value={data.parent_name}
              onChange={(e) => setData({...data, parent_name:e.target.value})}
            />
          </div>
          <div className="container-input">
            <label className="sign-log-lable">Child name</label>
            <input
              className="sign-log-lable"
              type="text"
              placeholder="Enter Name..."
              value={data.child_name}
              onChange={(e) => setData({...data, child_name:e.target.value})}
            />
          </div>
          <div className="container-input">
            <label className="sign-log-lable">Email Parent</label>
            <input
              type="Email"
              placeholder="Enter Email..."
              className="sign-log-lable"
              value={data.emailParent}
              onChange={(e) => setData({...data, emailParent:e.target.value})}
            />
          </div>
          <div className="container-input">
            <label className="sign-log-lable">Email Child</label>
            <input
              type="Email"
              placeholder="Enter Child Email..."
              className="sign-log-lable"
              value={data.emailChild}
              onChange={(e) => setData({...data, emailChild:e.target.value})}
            />
          </div>
          <div className="container-input">
            <label className="sign-log-lable">Password</label>
            <input
              type="password"
              placeholder="Enter Password..."
              className="sign-log-lable"
              value={data.password}
              onChange={(e) => setData({...data, password:e.target.value})}
            />
          </div>
          <button className="sign-log-button" type="submit" >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

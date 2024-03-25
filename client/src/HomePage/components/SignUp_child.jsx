// import NavBar from "./NavBar";
// import { useState } from "react";
// import axios from 'axios';
// import {toast} from 'react-hot-toast';
// import {useNavigate} from 'react-router-dom';


// export default function SignUp_child() {
//   const navigate = useNavigate()
//   const [data , setData] = useState({
//       name: '',
//       emailChild: '',
//       emailParent: '',
//       password: '',
//   })

//   const signUpUser = async (e) => {
//     e.preventDefault();
//     const {name, emailChild, emailParent, password} = data;
//     try {
//       const {data} = await axios.post("/SignUpChild", {
//         name, emailChild, emailParent, password
//       })
//       if (data.error) {
//         toast.error(data.error)
//       }else{
//         setData({})
//         toast.success('Sign Up Child Successful!')
//         navigate('/')
//       }
//     } catch (error) {
//       console.log(error);
//     }

//   };

//   return (
//     <>
//       <NavBar />
//       <h1 className="sign-log-head">SIGN UP CHILD</h1>
//       <div className="sign-log-container">
//         <form className="sign-log-form" onSubmit={signUpUser}>
//           <div className="container-input">
//             <label className="sign-log-lable">Name</label>
//             <input
//               className="sign-log-lable"
//               type="text"
//               placeholder="Enter Name..."
//               value={data.name}
//               onChange={(e) => setData({...data, name:e.target.value})}
//             />
//           </div>
//           <div className="container-input">
//             <label className="sign-log-lable">Email Child</label>
//             <input
//               type="Email"
//               placeholder="Enter Child Email..."
//               className="sign-log-lable"
//               value={data.emailChild}
//               onChange={(e) => setData({...data, emailChild:e.target.value})}
//             />
//           </div>
//           <div className="container-input">
//             <label className="sign-log-lable">Email Parent</label>
//             <input
//               type="Email"
//               placeholder="Enter Parent Email..."
//               className="sign-log-lable"
//               value={data.emailParent}
//               onChange={(e) => setData({...data, emailParent:e.target.value})}
//             />
//           </div>
//           <div className="container-input">
//             <label className="sign-log-lable">Password</label>
//             <input
//               type="password"
//               placeholder="Enter Password..."
//               className="sign-log-lable"
//               value={data.password}
//               onChange={(e) => setData({...data, password:e.target.value})}
//             />
//           </div>
//           <button className="sign-log-button" type="submit" >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

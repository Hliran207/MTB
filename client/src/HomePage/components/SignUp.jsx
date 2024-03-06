import NavBar from "./NavBar";

export default function SignUp() {
  const signUpUser = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <h1 className="sign-log-head">SIGN UP</h1>
      <div className="sign-log-container">
        <form className="sign-log-form" onSubmit={signUpUser}>
          <div className="container-input">
            <label className="sign-log-lable">Name</label>
            <input
              type="text"
              placeholder="Enter Name..."
              className="sign-log-lable"
            />
          </div>
          <div className="container-input">
            <label className="sign-log-lable">Email</label>
            <input
              type="Email"
              placeholder="Enter Email..."
              className="sign-log-lable"
            />
          </div>
          <div className="container-input">
            <label className="sign-log-lable">Password</label>
            <input
              type="password"
              placeholder="Enter Password..."
              className="sign-log-lable"
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


export default function LogIn(){
    const logInUser = (e) =>{
        e.preventDefault()
    }


    return (
        <>
        <h1 className="sign-log-head">LOG IN</h1>
         <div className="sign-log-container">
            <form className ="sign-log-form" onSubmit={logInUser}>
                <div className="container-input">
                    <label className="sign-log-lable">Email</label>
                    <input type="Email" placeholder="Enter Email..."className="sign-log-lable" />
                </div>
                <div className="container-input">
                    <label className="sign-log-lable">Password</label>
                    <input type="password" placeholder="Enter Password..."className="sign-log-lable"/>
                </div>
                <button className="sign-log-button" type="submit">Submit</button>
            </form>
            </div>
        </>
    )
}

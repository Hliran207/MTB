
export default function SignUp(){

    const signUpUser = (e) =>{
        e.preventDefault()
    }

    return (
        <>
        <h1 className="sign-up-head">SIGN UP</h1>
         <div className="sign-up-container">
            <form className ="sign-up-form" onSubmit={signUpUser}>
                <label className="sign-up-lable">Name</label>
                <input type="text" placeholder="Enter Name..." />
                <label className="sign-up-lable">Email</label>
                <input type="Email" placeholder="Enter Email..." />
                <label className="sign-up-lable">Password</label>
                <input type="password" placeholder="Enter Password..." />
                <button className="sign-up-button" type="submit">Submit</button>
            </form>
            </div>
        </>
    )
}

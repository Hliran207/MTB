

export default function NavBar(){
    return(
        <>
            <nav className="nav">
                <a href="/" className="nav-logo">MTB</a>
                <ul className="nav-links">
                    <li>
                        <a href="/LogIn">Log In</a>
                    </li>
                    <li>
                        <a href="/SignUp">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
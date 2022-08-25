import React, {useContext} from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"

function Login({loginIsVisible, setLoginIsVisible}) {
    const { setLoggedIn } = useContext(SportsbookContext)
    
    const loginVisibleStyle = {
        visibility: loginIsVisible ? "visible" : "hidden",
        height: loginIsVisible ? "70vh" : "0%",
        opacity: loginIsVisible ? "1" : "0"
    }

    let fakeAccounts = [{username: "mike", password: "nasir"}, 
                        {username: "cameron", password: "football"}];

    function handleSubmit(event) {
        event.preventDefault();
        let username = event.target[0].value
        let password = event.target[1].value
        if (fakeAccounts.length > 0) {
            for (let account of fakeAccounts ) {
                if (username === account.username && password === account.password) {
                    setLoggedIn(true)
                    hideLogin()
                }
            }
        }
        else    
            console.log("incorrect username and/or password")
    }
    
    function hideLogin() {
        setLoginIsVisible(false);
    }

    return (
        <div className="login" style={loginVisibleStyle}>
            <div className="container--wide">
                <button className="btn btn--exit" onClick={hideLogin}>X</button>
                <div className="container--widest">
                <h2 className="login__title">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input 
                            type="text"
                            name="username"
                            className="login__input"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input 
                            type="password"
                            name="pword"
                            className="login__input"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn login__button"
                    >
                        Login
                    </button>
                </form>
                <a className="join-link"href="#">Don't have an account? JOIN NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Login;
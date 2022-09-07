import React, {useContext} from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"

function Login({loginIsVisible, setLoginIsVisible}) {
    const { loggedIn, setLoggedIn, accounts, setJoinIsVisible } = useContext(SportsbookContext);
    const [errorMessage, setErrorMessage] = React.useState(false);
    
    const loginVisibleStyle = {
        visibility: loginIsVisible ? "visible" : "hidden",
        transform: loginIsVisible ? "scale(1)" : "scale(0.1)"
    }

    function handleSubmit(event) {
        event.preventDefault();
        let username = event.target[0].value
        let password = event.target[1].value
        if (accounts.length > 0) {
            for (let account of accounts ) {
                if (username === account.username && password === account.password) {
                    let correctAccountIndex = accounts.findIndex(item => item.username === username);
                    setLoggedIn(accounts[correctAccountIndex]);
                    hideLogin();
                }
            }
            {!loggedIn && setErrorMessage(true)}
        }
        else    
            setErrorMessage(true);
    }

    function hideLogin() {
        setLoginIsVisible(false);
    }

    function inputChange(event) {
        setErrorMessage(false)
    }

    function joinDisplay() {
        setJoinIsVisible(true)
    }

    return (
        <div className="popup" style={loginVisibleStyle}>
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
                            onChange={inputChange}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input 
                            type="password"
                            name="pword"
                            className="login__input"
                            onChange={inputChange}
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
                <a className="join-link" onClick={joinDisplay}>Don't have an account? JOIN NOW</a>
                {errorMessage && <p className="login__error">Incorrect username and/or password</p>}
                </div>
            </div>
        </div>
    )
}

export default Login;
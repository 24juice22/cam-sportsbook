import React, { useState, useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"

function Login({loginIsVisible, setLoginIsVisible}) {
    const { setLoggedIn, accounts, setJoinIsVisible, setPopup } = useContext(SportsbookContext);
    const [errorMessage, setErrorMessage] = useState(false);
    
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
                    hideLogin(event);
                    return
                }
            }
            setErrorMessage(true)
        }
        else    
            setErrorMessage(true);
    }

    function hideLogin(event) {
        setLoginIsVisible(false);
        clearInputs(event);
        setErrorMessage(false);
        setPopup(false)
    }

    function clearInputs(event) {
        for (let i = 0; i < 2; i++) {
            if (event.type === "submit") 
                event.target[i].value = "";
            else 
                event.target.nextSibling.childNodes[1][i].value = ""; 
        }
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
                <h2 className="title">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input 
                            type="text"
                            name="username"
                            className="login__input"
                            onChange={inputChange}
                            required
                            autoComplete="off"
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
                            autoComplete="off"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn btn--popup"
                    >
                        Login
                    </button>
                </form>
                <a className="join-link" onClick={joinDisplay}>Don't have an account? JOIN NOW</a>
                {errorMessage && <p className="error-message">Incorrect username and/or password</p>}
                </div>
            </div>
        </div>
    )
}

export default Login;
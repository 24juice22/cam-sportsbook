import React from "react"

function Login({loginIsVisible}) {
    
    const loginVisibleStyle = {
        visibility: loginIsVisible ? "visible" : "hidden",
        height: loginIsVisible ? "70vh" : "0%",
        opacity: loginIsVisible ? "1" : "0"
    }

    const poop = {
        visibility: loginIsVisible ? "visible" : "hidden"
    }

    return (
        <div className="login" style={loginVisibleStyle}>
            <div className="container--wide">
                <button className="btn btn--exit">X</button>
                <h2 className="login__title">Sign In</h2>
                <div className="input-container" style={poop}>
                    <label>Username </label>
                    <input 
                        type="text"
                        name="username"
                        className="login__input"
                        required
                    />
                </div>
                <div className="input-container" style={poop}>
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
                <a className="join-link"href="#">Don't have an account? JOIN NOW</a>
            </div>
        </div>
    )
}

export default Login;
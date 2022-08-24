import React from "react"

function Login({loginIsVisible, setLoginIsVisible}) {
    
    const loginVisibleStyle = {
        visibility: loginIsVisible ? "visible" : "hidden",
        height: loginIsVisible ? "70vh" : "0%",
        opacity: loginIsVisible ? "1" : "0"
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
                <a className="join-link"href="#">Don't have an account? JOIN NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Login;
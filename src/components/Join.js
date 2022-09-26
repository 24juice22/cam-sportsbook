import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"

function Join() {
    const [joinError, setJoinError] = React.useState(false);
    const { joinIsVisible, setJoinIsVisible, accounts, setAccounts, setPopup } = useContext(SportsbookContext);
    
    const joinVisibleStyle = {
        visibility: joinIsVisible ? "visible" : "hidden",
        transform: joinIsVisible ? "scale(1)" : "scale(0.1)"
    }

    function handleSubmit(event) {
        event.preventDefault();
        let username = event.target[2].value;
        let accountsUsernames = accounts.map(account => account.username)
        if (accountsUsernames.includes(username))
            setJoinError(true)
        else {
            let newAccount = {
                first: event.target[0].value,
                last: event.target[1].value,
                username: username,
                password: event.target[3].value,
                bankroll: 0,
                bets: []
            };
            setAccounts([...accounts, newAccount]);
            hideJoin(event);
        }
    }

    function hideJoin(event) {
        setJoinIsVisible(false);
        clearInputs(event);
        setPopup(false);
        setJoinError(false);
    }

    function clearInputs(event) {
        for (let i = 0; i < 4; i++) {
            if (event.type === "submit") 
                event.target[i].value = "";
            else 
                event.target.nextSibling.childNodes[1][i].value = "";
        } 
    }

    function inputChange() {
        setJoinError(false);
    }

    React.useEffect(() => {
        localStorage.setItem("accounts", JSON.stringify(accounts))
      }, [accounts])

    return (
        <div className="popup" style={joinVisibleStyle}>
            <div className="container--wide">
                <button className="btn btn--exit" onClick={hideJoin}>X</button>
                <div className="container--widest">
                <h2 className="title">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>First Name </label>
                        <input 
                            type="text"
                            name="first"
                            className="join__input"
                            required
                            autoComplete="off"
                            pattern="[A-Za-z]+"
                            title="First name must contain only upper and lowercase letters"
                        />
                    </div>
                    <div className="input-container">
                        <label>Last Name </label>
                        <input 
                            type="text"
                            name="last"
                            className="join__input"
                            required
                            autoComplete="off"
                            pattern="[A-Za-z]+"
                            title="Last name must contain only upper and lowercase letters"
                        />
                    </div>
                    <div className="input-container">
                        <label>Username </label>
                        <input 
                            type="text"
                            name="username"
                            className="join__input"
                            required
                            autoComplete="off"
                            pattern="[A-Za-z0-9]{1,15}"
                            title="Username can only contain upper and lower case letters and numbers"
                            onChange={inputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input 
                            type="password"
                            name="pword"
                            className="join__input"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn btn--popup"
                    >
                        Create Account
                    </button>
                </form>
                {joinError && <p className="error-message">The username is unavailable. Please try a different username.</p>}
                </div>
            </div>
        </div>
    )
}

export default Join;
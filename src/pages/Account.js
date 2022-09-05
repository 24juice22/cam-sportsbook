import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import BetConfirmBox from "../components/BetConfirmBox"

function Account() {
    const { loggedIn, setLoginIsVisible } = useContext(SportsbookContext);

    function loginDisplay() {
        setLoginIsVisible(true)
    }

    if (!loggedIn)
        return (
            <div className="account">
                <div className="container--wide">
                    <h1 className="account__title">Account</h1>
                    <p className="account__message">You are not currently logged in. Please log in to access your account.</p>
                    <button className="btn account__btn" onClick={loginDisplay}>Login</button>
                </div>
            </div>
        )

    let previousBets = loggedIn.bets;
    let confirmedBetElements = previousBets.map(item => {
            return <BetConfirmBox item={item} />
    });

    return (
        <div className="account">
            <div className="container--wide">
                <h1 className="account__title">Account</h1>
                <p className="account__name">{loggedIn.first} {loggedIn.last}</p>
                <p className="account__bankroll">Bankroll: {loggedIn.bankroll}</p>
                <div className="account__bets">
                    <h2 className="bets__title">My Bets</h2>
                    {confirmedBetElements}
                </div>
            </div>
        </div>
    )
}

export default Account;
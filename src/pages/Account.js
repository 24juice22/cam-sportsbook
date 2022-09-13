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
                    <h1 className="title title--page">Account</h1>
                    <p className="account__message">You are not currently logged in. Please log in to access your account.</p>
                    <button className="btn btn--outline account__btn" onClick={loginDisplay}>Login</button>
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
                <h1 className="title title--page">Account</h1>
                <p className="account__name">{loggedIn.first.toUpperCase()} {loggedIn.last.toUpperCase()}</p>
                <p className="account__bankroll">Bankroll: ${loggedIn.bankroll.toFixed(2)}</p>
                <div className="account__bets">
                    <h2 className="bets__title">MY BETS</h2>
                    {loggedIn.bets.length > 0 ? confirmedBetElements : <p>You have not made any bets.</p>}
                </div>
            </div>
        </div>
    )
}

export default Account;
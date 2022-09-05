import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import BetConfirmBox from "../components/BetConfirmBox"

function Account() {
    const { loggedIn, confirmedBets } = useContext(SportsbookContext);

    let confirmedBetElements = confirmedBets.map(item => {
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
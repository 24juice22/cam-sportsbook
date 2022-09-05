import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import BetConfirmBox from "../components/BetConfirmBox"

function MyBets() {
    const { confirmedBets } = useContext(SportsbookContext);
    console.log(confirmedBets)

    let confirmedBetElements = confirmedBets.map(item => {
            return <BetConfirmBox item={item} />
    });

    return (
        <div className="bets">
            <div className="container--wide">
                <h1 className="bets__title">My Bets</h1>
                {confirmedBetElements}
            </div>
        </div>
    )
}

export default MyBets;
import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import BetConfirmBox from "./BetConfirmBox"

function BetConfirm() {
    const {betbarActive} = useContext(SportsbookContext)

    let betElements = betbarActive.map(item => {
        if (item.betAmount > 0)
            return <BetConfirmBox item={item} />
    });

    let betTotal = betbarActive.reduce((a, b) => a.betAmount + b.betAmount);
    let winTotal = betbarActive.reduce((a, b) => a.winAmount + b.winAmount)

    return (
        <div className="bet-confirm">

            <h2 className="bet-confirm__title">Confirm Wager</h2>
            {betElements}
            <div className="bet-confirm__totals">
                <p className="bet-confirm__total">Total Bet Amount: <span>${betTotal}</span></p>
                <p className="bet-confirm__total">Total Payout: <span>${winTotal}</span></p>
            </div>
            <div className="flex">
                <button className="btn bet-confirm__button">Confirm</button>
            </div>
        </div>
    )
}

export default BetConfirm;
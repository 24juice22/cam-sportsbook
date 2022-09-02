import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import BetConfirmBox from "./BetConfirmBox"

function BetConfirm({betConfirmVisible, setBetConfirmVisible}) {
    const {betbarActive} = useContext(SportsbookContext);

    const betConfirmStyles = {
        visibility: betConfirmVisible ? "visible" : "hidden",
        transform: betConfirmVisible ? "scale(1)" : "scale(0.1)"
    }

    let betElements = betbarActive.map(item => {
        if (item.betAmount > 0)
            return <BetConfirmBox item={item} />
    });

    let betTotal = betbarActive.reduce((a, b) => a.betAmount + b.betAmount);
    let winTotal = betbarActive.reduce((a, b) => a.winAmount + b.winAmount)

    function hideBetConfirm() {
        setBetConfirmVisible(false);
    }

    return (
        <div className="bet-confirm" style={betConfirmStyles}>
            <button className="btn--exit" onClick={hideBetConfirm}>X</button>
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
import React from "react"

function BetConfirm({bets}) {
    console.log("wahhhhhhhh")
    return (
        <div className="bet-confirm">
            <h2>Confirm Wager</h2>
            <p>{bets[0].id}</p>
        </div>
    )
}

export default BetConfirm;
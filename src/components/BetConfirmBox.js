import React from "react"
import GameDate from "./GameDate"

function BetConfirmBox({item}) {
    console.log(item)
    return (
        <div className="bet-confirm__box">
            <div className="slip__line-numbers">
                <p className="slip__point">{item.team} {item.point}</p>
                <p className="slip__price">{item.price}</p>
            </div>
            <p className="slip__line-type">{item.indexType}</p>
            <div className="slip__matchup-info">
                <p className="slip__matchup">{item.matchupInfo}</p>
                <GameDate matchup={item.matchup}/>
            </div>
            <div className="wager">
                <p className="wager__amount">Bet Amount: ${item.betAmount}</p>
                <p className="wager__amount">Payout: ${item.winAmount}</p>
            </div>
        </div>
    )
}

export default BetConfirmBox;
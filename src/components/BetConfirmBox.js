import React from "react"
import GameDate from "./GameDate"

function BetConfirmBox({item}) {
    
    // Fix point Issue with index of type total //
    let point = item.point;
    if (item.indexType === "Total") {
        point = point.split(" ")[1];
    }

    return (
        <div className="bet-confirm__box">
            <div className="slip__line-numbers">
                <p className="slip__point">{item.team} {point}</p>
                <p className="slip__price">{item.price}</p>
            </div>
            <p className="slip__line-type">{item.indexType}</p>
            <div className="slip__matchup-info">
                <p className="slip__matchup">{item.matchupInfo}</p>
                <GameDate matchup={item.matchup}/>
            </div>
            <div className="wager">
                <p className="wager__amount">Bet Amount: <span>${item.betAmount}</span></p>
                <p className="wager__amount">Payout: <span>${item.winAmount}</span></p>
            </div>
        </div>
    )
}

export default BetConfirmBox;
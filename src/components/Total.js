import React from "react"

function Total({betMarkets, indexSpread, indexTotal, indexMoneyline, awayTeam, team}) {
    let totalExists = null;

    if (indexTotal >= 0) totalExists = true;
    if (indexTotal < 0) {
        indexTotal = indexMoneyline;
        team = awayTeam;
    }
    if (indexTotal < 0) indexTotal = indexSpread;

    let indexTotalTeam= betMarkets[indexTotal].outcomes.findIndex(item => item.name === team);
    let totalPoint = betMarkets[indexTotal].outcomes[indexTotalTeam].point;
    let totalPrice = betMarkets[indexTotal].outcomes[indexTotalTeam].price;
    if (totalPrice > 0)
        totalPrice = `+${totalPrice}`;

    return (
        <div className="line line__total">
            {totalExists ? <p className="line__total-point">{`O ${totalPoint}`}</p> : <p className="line__total-point"></p>}  
            {totalExists ? <p className="price line__total-price">{totalPrice}</p> : <p className="line__total-price"></p>}
        </div>
    )
}

export default Total;
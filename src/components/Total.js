import React from "react"

function Total({betMarkets, indexTotal, team}) {
    if (indexTotal < 0) {
        return (
            <div className="line line__total">
                <p className="line__total-point"></p>  
                <p className="line__total-price"></p>
            </div>
        )
    }

    let indexTotalTeam= betMarkets[indexTotal].outcomes.findIndex(item => item.name === team);
    let totalPoint = betMarkets[indexTotal].outcomes[indexTotalTeam].point;
    let totalPrice = betMarkets[indexTotal].outcomes[indexTotalTeam].price;
    if (totalPrice >= 0)
        totalPrice = `+${totalPrice}`;

    return (
        <div className="line line__total">
            <p className="line__total-point">{team === 'Over' ? `O ${totalPoint}` : `U ${totalPoint}`}</p>
            <p className="price line__total-price">{totalPrice}</p>
        </div>
    )
}

export default Total;
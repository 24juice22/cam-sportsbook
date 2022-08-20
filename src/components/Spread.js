import React from "react"

function Spread({betMarkets, indexSpread, team}) {
    if (indexSpread < 0) {
        return (
            <div className="line line__spread">
                <p className="line__spread-point"></p>
                <p className="line__spread-price"></p>
            </div>
        )
    }
    
    let indexSpreadTeam = betMarkets[indexSpread].outcomes.findIndex(item => item.name === team)
    let spreadPoint = betMarkets[indexSpread].outcomes[indexSpreadTeam].point;
    if (spreadPoint > 0)
        spreadPoint = `+${spreadPoint}`;
    let spreadPrice = betMarkets[indexSpread].outcomes[indexSpreadTeam].price;
    if (spreadPrice > 0)
        spreadPrice = `+${spreadPrice}`;
    
    return (
        <div className="line line__spread">
            <p className="line__spread-point">{spreadPoint}</p>
            <p className="price line__spread-price">{spreadPrice}</p>
        </div>
    )
}

export default Spread;
import React from "react"

function Spread({betMarkets, indexSpread, indexTotal, indexMoneyline, team}) {
    let spreadExists = null;
    if (indexSpread >= 0) spreadExists = true;
    if (indexSpread < 0) indexSpread = indexMoneyline;
    if (indexSpread < 0) {
        indexSpread = indexTotal;
        team = "Over";
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
            {spreadExists ? <p className="line__spread-point">{spreadPoint}</p> : <p className="line__spread-point"></p>}
            {spreadExists ? <p className="price line__spread-price">{spreadPrice}</p> : <p className="line__spread-price"></p>}
        </div>
    )
}

export default Spread;
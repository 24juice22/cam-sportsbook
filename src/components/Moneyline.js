import React from "react"

function Moneyline({betMarkets, indexMoneyline, team}) {
    if (indexMoneyline < 0) {
        return (
            <p className="line line__moneyline"></p>
        )
    }
        
    let indexMoneylineTeam = betMarkets[indexMoneyline].outcomes.findIndex(item => item.name === team);
    let moneylinePrice = betMarkets[indexMoneyline].outcomes[indexMoneylineTeam].price;
    if (moneylinePrice > 0)
        moneylinePrice = `+${moneylinePrice}`;
 
    return (
            <p className="price line line__moneyline">{moneylinePrice}</p>
    )
}

export default Moneyline;

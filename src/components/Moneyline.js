import React from "react"

function Moneyline({betMarkets, indexSpread, indexTotal, indexMoneyline, team}) {
    let moneylineExists = null;

    if (indexMoneyline >= 0) moneylineExists = true;
    if (indexMoneyline < 0) indexMoneyline = indexSpread;
    if (indexMoneyline < 0) indexMoneyline = indexTotal;
        
    let indexMoneylineTeam = betMarkets[indexMoneyline].outcomes.findIndex(item => item.name === team);
    let moneylinePrice = betMarkets[indexMoneyline].outcomes[indexMoneylineTeam].price;
    if (moneylinePrice > 0)
        moneylinePrice = `+${moneylinePrice}`;
 
    return (
        <>
            {moneylineExists ? <p className="price line line__moneyline">{moneylinePrice}</p> : <p className="line line__moneyline"></p>}
        </>
    )
}

export default Moneyline;

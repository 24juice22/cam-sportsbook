import React from "react"

function Lines({index, betMarkets, wasClicked, isClicked, team, id}) {
    if (index < 0) {
        return (
            <div className="line">
                <p className="line__point"></p>
                <p className="price line__price"></p>
            </div>
        )
    }

    const styles = {
        backgroundColor: isClicked ? "var(--color-secondary)" : "white"
    }
    
    let indexTeam = betMarkets[index].outcomes.findIndex(item => item.name === team)
    
    let point = "";
    if (id !== `moneyline-${team}`)
        point = betMarkets[index].outcomes[indexTeam].point;
    if (team === 'Over')
        point = `O ${point}`
    else if (team === "Under")
        point = `U ${point}`
    else
        if (point > 0) point = `+${point}`;

    let price = betMarkets[index].outcomes[indexTeam].price;
    if (price > 0)
        price = `+${price}`;

    return (
        <div className="line" onClick={() => wasClicked(id, point, price)} style={styles}>
            <p className="line__point">{point}</p>
            <p className="price line__price">{price}</p>
        </div>
    )
}

export default Lines;

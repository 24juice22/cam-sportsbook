import React from "react"
import Box from "../components/Box"

function Nba({games, sport}) {
    return (
        <div>
            <h1 className="title">{`${sport} Odds`}</h1>
            <ul className="container__line-descriptions list line-descriptions">
                <li className="line-descriptions__item">Spread</li>
                <li className="line-descriptions__item">Total</li>
                <li className="line-descriptions__item">Money</li>
            </ul>
            {games.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
        </ div> 
    )
}

export default Nba;
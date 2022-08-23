import React from "react"
import Box from "../components/Box"

function Ncaaf({games, sport}) {
    return (
        <>
            <h1 className="title">{`${sport} Odds`}</h1>
            <ul className="container--wide list line-descriptions">
                <li className="line-descriptions__item">Spread</li>
                <li className="line-descriptions__item">Total</li>
                <li className="line-descriptions__item">Money</li>
            </ul>
            {games.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
        </> 
    )
}

export default Ncaaf;
import React from "react"
import Box from "../components/Box"

function Mlb({games, sport}) {
    return (
        <div className="idk">
            <h1 className="title">{`${sport} Odds`}</h1>
            <ul className="container--wide list line-descriptions">
                <li className="line-descriptions__item">Spread</li>
                <li className="line-descriptions__item">Total</li>
                <li className="line-descriptions__item">Money</li>
            </ul>
            {games.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
        </ div>
    )
}  


export default Mlb;
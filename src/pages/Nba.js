import React from "react"
import Box from "../components/Box"

function Nba({games}) {
    return (
        <>
            {games.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
        </> 
    )
}

export default Nba;
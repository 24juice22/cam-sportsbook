import React from "react"
import Box from "../components/Box"

function Nfl({games}) {
    return (
        <>
            {games.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
        </>
    )
}

export default Nfl;
import React, { useState, useEffect } from "react"
import Box from "../components/Box"

function Nfl({setSport, homeClassName}) {
    const [footballNfl, setFootballNfl] = useState(null);

    useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setFootballNfl(data)
          setSport("NFL")
        }) 
    }, [])

    if (footballNfl) return (
        <div className={`${homeClassName}`}>
            {footballNfl.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
        </div>
    )
}

export default Nfl;
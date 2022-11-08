import React, { useState, useEffect } from "react"
import Box from "../components/Box"

function Nhl({setSport}) {
    const [hockey, setHockey] = useState(null)

    useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setHockey(data);
          setSport("NHL")
        }) 
      }, [])

    if (hockey) return (
      <>
        {hockey.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
      </>
    )
}

export default Nhl;
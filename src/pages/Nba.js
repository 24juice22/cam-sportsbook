import React, { useState, useEffect } from "react"
import Box from "../components/Box"

function Nba({setSport}) {
    const [basketball, setBasketball] = useState(null)

    useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setBasketball(data);
          setSport("NBA")
        }) 
      }, [])

    if (basketball) return (
        <div className="page">
            {basketball.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
        </div> 
    )
}

export default Nba;
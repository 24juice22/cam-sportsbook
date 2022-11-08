import React, { useState, useEffect } from "react"
import Box from "../components/Box"

function Ncaab({setSport}) {
    const [basketballNcaa, setBasketballNcaa] = useState(null);

    useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/basketball_ncaab/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setBasketballNcaa(data);
          setSport("NCAAB")
        }) 
    }, [])

    if (basketballNcaa) return (
        <>
            {basketballNcaa.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
        </> 
    )
}

export default Ncaab;
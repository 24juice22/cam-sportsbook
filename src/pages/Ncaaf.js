import React, { useState, useEffect } from "react";
import Box from "../components/Box";
import OddsError from "../components/OddsError";

function Ncaaf({setSport}) {
    const [footballNcaa, setFootballNcaa] = useState(null);

    useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/americanfootball_ncaaf/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setFootballNcaa(data);
          setSport("NCAAF")
        }) 
    }, [])

    if (footballNcaa) return (
        <>
            {footballNcaa.length === 0 ? 
                <OddsError /> : 
                footballNcaa.map(matchup => <Box matchup={matchup} key={matchup.id}/>)
            }
        </> 
    )
}

export default Ncaaf;
import React, { useState, useEffect } from "react";
import Box from "../components/Box";
import OddsError from "../components/OddsError";

function Nfl({ setSport }) {
    const [footballNfl, setFootballNfl] = useState(null);

    useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setFootballNfl(data);
          setSport("NFL");
          console.log(data)
        }) 
    }, [])

    if (footballNfl) return (
        <>
            {footballNfl.length === 0 ? 
                <OddsError /> : 
                footballNfl.map(matchup => <Box matchup={matchup} key={matchup.id}/>)
            }
        </>
    )
}

export default Nfl;
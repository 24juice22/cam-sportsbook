import React, { useState, useEffect } from "react";
import Box from "../components/Box";
import OddsError from "../components/OddsError";

function Nhl({setSport}) {
    const [hockey, setHockey] = useState(null)

    useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setHockey(data);
          setSport("NHL");
        }) 
      }, [])

    if (hockey) return (
      <>
        {hockey.length === 0 ? 
            <OddsError /> : 
            hockey.map(matchup => <Box matchup={matchup} key={matchup.id}/>)
        }
      </>
    )
}

export default Nhl;
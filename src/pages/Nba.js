import React, { useState, useEffect } from "react";
import Box from "../components/Box";
import OddsError from "../components/OddsError";

function Nba({setSport, homeClassName}) {
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
      <div className={`${homeClassName}`}>
        {basketball.length === 0 ? 
          <OddsError /> : 
          basketball.map(matchup => <Box matchup={matchup} key={matchup.id}/>)
        }
      </div>
    )
}

export default Nba;
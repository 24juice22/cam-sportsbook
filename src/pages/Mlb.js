import React, { useState, useEffect } from "react";
import Box from "../components/Box";
import OddsError from "../components/OddsError";

function Mlb({setSport}) {
    const [baseball, setBaseball] = useState(null);
   
    useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setBaseball(data);
          setSport("MLB");
          console.log(data)
        }) 
    }, [])

    if (baseball) return (
        <>   
            {baseball.length === 0 ? 
                <OddsError /> : 
                baseball.map(matchup => <Box matchup={matchup} key={matchup.id}/>)
            }
        </>
    )
}  

export default Mlb;
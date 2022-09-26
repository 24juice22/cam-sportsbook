import React from "react"
import Box from "../components/Box"

function Mlb({setSport}) {
    const [baseball, setBaseball] = React.useState(null);
   
    React.useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setBaseball(data);
          setSport("MLB");
        }) 
    }, [])

    if (baseball) return (
        <div className="page page--home">
            {baseball.map(matchup => <Box matchup={matchup} key={matchup.id}/>)}
        </div>
    )
}  

export default Mlb;
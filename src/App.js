import React from "react";
import Navbar from "./components/Navbar";
import Betbar from "./components/Betbar";
import Box from "./components/Box";

function App() {
  const [games, setGames] = React.useState(null)
  const content = null;

  React.useEffect(() => {
    fetch("https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setGames(data);
    }) 
  }, [])

  if(games) {
    return (
      <div className="body">
        <Navbar />
        <h1 className="title">{`${games[0].sport_title} Odds`}</h1>
        {games.map(matchup => <Box matchup={matchup}/>)}
        <Betbar />
      </div>
    )
  }

  return (
    <div>{content}</div>
  )
}

export default App;

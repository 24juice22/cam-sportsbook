import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mlb from "./pages/Mlb"
import Nfl from "./pages/Nfl"
import Nba from "./pages/Nba"
import Ncaaf from "./pages/Ncaaf"
import Navbar from "./components/Navbar"
import Betbar from "./components/Betbar"
import Home from "./pages/Home"
import Betslip from "./pages/Betslip"
import { SportsbookContext } from "./contexts/SportsbookContexts"

function App() {
  const [games, setGames] = React.useState(null);
  const [sport, setSport] = React.useState("MLB");
  const [betbarActive, setBetbarActive] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setGames(data)
    }) 
  }, [])


  if(games) return (
    <Router>
      <div className="body">
        <SportsbookContext.Provider value={{betbarActive, setBetbarActive}}>
          <Navbar setGames={setGames} setSport={setSport} />
          <Routes>
              <Route path="/" element={<Home games={games} sport={sport} />} />
              <Route path="mlb" element={<Mlb games={games} setGames={setGames} sport={sport} setSport={setSport} />} />
              <Route path="nfl" element={<Nfl games={games} sport={sport}/>} />
              <Route path="nba" element={<Nba games={games} sport={sport}/>} />
              <Route path="ncaaf" element={<Ncaaf games={games} sport={sport}/>} />
              <Route path="betslip" element={<Betslip />} />
          </Routes>
          <Betbar />
        </SportsbookContext.Provider>
      </div>
    </Router>
  );
}

export default App;



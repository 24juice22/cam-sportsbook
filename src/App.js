import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mlb from "./pages/Mlb"
import Nfl from "./pages/Nfl"
import Nba from "./pages/Nba"
import Ncaaf from "./pages/Ncaaf"
import Navbar from "./components/Navbar"
import Betbar from "./components/Betbar"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Betslip from "./pages/Betslip"
import Account from "./pages/Account"
import Login from "./components/Login"
import Join from "./components/Join"
import Deposit from "./components/Deposit"
import ScrollToTop from "./components/ScrollToTop"
import { SportsbookContext } from "./contexts/SportsbookContexts"

function App() {
  const [sport, setSport] = React.useState(null);
  const [betbarActive, setBetbarActive] = React.useState([])
  const [loggedIn, setLoggedIn] = React.useState(null)
  const [loginIsVisible, setLoginIsVisible] = React.useState(false)
  const [joinIsVisible, setJoinIsVisible] = React.useState(false)
  const [depositIsVisible, setDepositIsVisible] = React.useState(false)
  const [accounts, setAccounts] = React.useState(
    JSON.parse(localStorage.getItem("accounts")) || []
  )

  return (
    <Router>
      <ScrollToTop />
        <SportsbookContext.Provider value={{ betbarActive, setBetbarActive, loggedIn, setLoggedIn, loginIsVisible, setLoginIsVisible, joinIsVisible, setJoinIsVisible, accounts, setAccounts, depositIsVisible, setDepositIsVisible, setSport}}>
          <Navbar setSport={setSport} />
          <Routes>
              <Route index path="/" element={<Home sport={sport}/>}/>
              <Route path="" element={<Layout sport={sport} />}>
                <Route path="mlb"  element={<Mlb setSport={setSport}/>} />
                <Route path="nfl" element={<Nfl setSport={setSport} />} />
                <Route path="nba" element={<Nba setSport={setSport} />} />
                <Route path="ncaaf" element={<Ncaaf setSport={setSport}/>} />
              </Route>
              <Route path="betslip" element={<Betslip />} />
              <Route path="account" element={<Account />} />
          </Routes>
          <Login loginIsVisible={loginIsVisible} setLoginIsVisible={setLoginIsVisible}/>
          <Join />
          <Deposit />
          <Betbar setSport={setSport} />
        </SportsbookContext.Provider>
    </Router>
  );
}

export default App;



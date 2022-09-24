import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
  const [sport, setSport] = React.useState("MLB");
  const [betbarActive, setBetbarActive] = React.useState([])
  const [loggedIn, setLoggedIn] = React.useState(null)
  const [loginIsVisible, setLoginIsVisible] = React.useState(false)
  const [joinIsVisible, setJoinIsVisible] = React.useState(false)
  const [depositIsVisible, setDepositIsVisible] = React.useState(false)
  const [popup, setPopup] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  const [betslipRemoved, setBetslipRemoved] = React.useState({id: null, count: 0})
  const [accounts, setAccounts] = React.useState(
    JSON.parse(localStorage.getItem("accounts")) || []
  )
  
  React.useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }
    else
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
  }, [popup])

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", watchWidth)
    return () => {
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
        <SportsbookContext.Provider value={{ windowWidth, betslipRemoved, setBetslipRemoved, betbarActive, setBetbarActive, loggedIn, setLoggedIn, loginIsVisible, setLoginIsVisible, joinIsVisible, setJoinIsVisible, accounts, setAccounts, depositIsVisible, setDepositIsVisible, setSport, setPopup}}>
          <Navbar setSport={setSport} />
          <Routes>
              <Route index path="/cam-sportsbook/" element={<Home sport={sport} setSport={setSport}/>}/>
              <Route element={<Layout sport={sport} />}>
                <Route path="/cam-sportsbook/mlb"  element={<Mlb setSport={setSport}/>} />
                <Route path="/cam-sportsbook/nfl" element={<Nfl setSport={setSport} />} />
                <Route path="/cam-sportsbook/nba" element={<Nba setSport={setSport} />} />
                <Route path="/cam-sportsbook/ncaaf" element={<Ncaaf setSport={setSport}/>} />
              </Route>
              <Route path="/cam-sportsbook/betslip" element={windowWidth < 1024 ? <Betslip /> : <Navigate to="/cam-sportsbook/" />} />
              <Route path="/cam-sportsbook/account" element={<Account />} />
          </Routes>
          <Login loginIsVisible={loginIsVisible} setLoginIsVisible={setLoginIsVisible}/>
          <Join />
          <Deposit />
          {windowWidth >= 1024 && <Betslip />}
          <Betbar setSport={setSport} />
        </SportsbookContext.Provider>
    </Router>
  );
}

export default App;


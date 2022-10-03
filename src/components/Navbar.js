import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SportsbookContext } from "../contexts/SportsbookContexts"
import mlb from "../images/mlb/mlb.png";
import nfl from "../images/nfl/nfl.png";
import nba from "../images/nba/nba.png";

export default function Navbar({setSport}) {
    const { setLoginIsVisible, setJoinIsVisible, setDepositIsVisible, loggedIn, setLoggedIn,  setPopup } = useContext(SportsbookContext)

    function homeClick() {
        setSport("MLB");
    }

    function nflClick() {
        setSport("NFL");
    }

    function mlbClick() {
        setSport("MLB")
    }

    function nbaClick() {
        setSport("NBA");
    }

    function ncaafClick() {
        setSport("NCAAF");
    }

    function loginDisplay() {
        setLoginIsVisible(true)
        setPopup(true)
    }

    function joinDisplay() {
        setJoinIsVisible(true)
        setPopup(true)
    }

    function depositDisplay() {
        setDepositIsVisible(true)
        setPopup(true)
    }

    function logoff() {
        setLoggedIn(null)
    }
    
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__top">
                    <Link to="/cam-sportsbook/" className="navbar__brand" onClick={homeClick}>
                        <h3 className="navbar__logo">CAM</h3>
                        <span>Sportsbook</span>
                    </Link>
                    <div className="navbar__buttons">
                        {!loggedIn && <button className="btn btn--outline navbar__btn navbar__btn--login" onClick={loginDisplay}>Login</button>}
                        {!loggedIn && <button className="btn navbar__btn navbar__btn--join" onClick={joinDisplay}>JOIN NOW</button>}
                        {loggedIn && <button className="btn navbar__btn navbar__btn--logoff" onClick={logoff}>Log Off</button>}
                        {loggedIn && <button className="btn navbar__btn navbar__btn--deposit" onClick={depositDisplay}>Deposit</button>}
                    </div>
                </div>
            </div>
            <div className="navbar__bottom">
                <div className="container--widest">
                    <ul className="list navbar__list">
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--baseball" src={mlb}></img>
                            <Link className="navbar__link" to="/cam-sportsbook/mlb" onClick={mlbClick}>MLB</Link>
                        </li>
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--nfl" src={nfl}></img>
                            <Link className="navbar__link" to="/cam-sportsbook/nfl" onClick={nflClick}>NFL</Link>
                        </li>
                        <li className="navbar__list-item">
                            <i class="fa-solid fa-football navbar__icon navbar__icon--ncaaf"></i>
                            <Link className="navbar__link nav__link-baseball" to="/cam-sportsbook/ncaaf" onClick={ncaafClick}>NCAAF</Link>
                        </li>
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--nba" src={nba}></img>
                            <Link className="navbar__link" to="/cam-sportsbook/nba" onClick={nbaClick}>NBA</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SportsbookContext } from "../contexts/SportsbookContexts"
import mlb from "../images/mlb/mlb.png";
import nfl from "../images/nfl/nfl.png";
import nba from "../images/nba/nba.png";
import nhl from "../images/nhl/nhl.png";

export default function Navbar({setSport}) {
    const { setLoginIsVisible, setJoinIsVisible, setDepositIsVisible, loggedIn, setLoggedIn,  setPopup } = useContext(SportsbookContext)

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
                    <Link to="/cam-sportsbook/" className="navbar__brand">
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
                            <Link className="navbar__link" to="/cam-sportsbook/mlb">
                                <img className="navbar__icon navbar__icon--baseball" src={mlb} alt="Major League Baseball Logo"/>
                                <span>MLB</span>
                            </Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link className="navbar__link" to="/cam-sportsbook/nfl">
                                <img className="navbar__icon navbar__icon--nfl" src={nfl} alt="National Football League Logo"/>
                                <span>NFL</span>
                            </Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link className="navbar__link" to="/cam-sportsbook/nba">
                                <img className="navbar__icon navbar__icon--nba" src={nba} alt="National Basketball Association Logo"/>
                                <span>NBA</span>
                            </Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link className="navbar__link" to="/cam-sportsbook/nhl">
                                <img className="navbar__icon navbar__icon--nhl" src={nhl} alt="National Basketball Association Logo"/> 
                                <span>NHL</span>
                            </Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link className="navbar__link" to="/cam-sportsbook/ncaaf">
                                <i class="fa-solid fa-football navbar__icon navbar__icon--ncaaf"></i>
                                <span>NCAAF</span>
                            </Link>
                        </li>
                        <li className="navbar__list-item">
                            <Link className="navbar__link" to="/cam-sportsbook/ncaab">
                                <i class="fa-solid fa-basketball navbar__icon navbar__icon--ncaaf"></i>
                                <span>NCAAB</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

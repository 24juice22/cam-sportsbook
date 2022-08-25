import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SportsbookContext } from "../contexts/SportsbookContexts"
import mlb from "../images/mlb/mlb.png";
import nfl from "../images/nfl/nfl.png";
import nba from "../images/nba/nba.png";

export default function Navbar({setGames, setSport}) {
    const [footballNfl, setFootballNfl] = React.useState(null);
    const [basketball, setBasketball] = React.useState(null);
    const [footballNcaa, setFootballNcaa] = React.useState(null);
    const [baseball, setBaseball] = React.useState(null);

    const {setLoginIsVisible} = useContext(SportsbookContext)

    React.useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setBaseball(data);
        }) 
    }, [])

    React.useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setFootballNfl(data)
        }) 
    }, [])

    React.useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setBasketball(data);
        }) 
      }, [])
    
    React.useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/americanfootball_ncaaf/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setFootballNcaa(data);
        }) 
    }, [])
    

    function nflClick() {
        setGames(footballNfl);
        setSport("NFL");
        console.log("footballclicked");
    }

    function mlbClick() {
        setGames(baseball);
        setSport("MLB");
    }

    function nbaClick() {
        setGames(basketball);
        setSport("NBA");
    }

    function ncaafClick() {
        setGames(footballNcaa);
        setSport("NCAAF");
    }

    function loginDisplay() {
        setLoginIsVisible(true)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__top">
                    <a href="#" className="navbar__brand">
                        <h3 className="navbar__logo">CAM</h3>
                        <span>Sportsbook</span>
                    </a>
                    <div className="navbar__buttons">
                        <button className="btn navbar__btn navbar__btn--login" onClick={loginDisplay}>Log In</button>
                        <button className="btn navbar__btn navbar__btn--join">JOIN NOW</button>
                    </div>
                </div>
                <div className="navbar__bottom">
                    <ul className="list navbar__list">
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--baseball" src={mlb}></img>
                            <Link className="navbar__link" to="/mlb" onClick={mlbClick}>MLB</Link>
                        </li>
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--nfl" src={nfl}></img>
                            <Link className="navbar__link" to="/nfl" onClick={nflClick}>NFL</Link>
                        </li>
                        <li className="navbar__list-item">
                            <i class="fa-solid fa-football navbar__icon navbar__icon--ncaaf"></i>
                            <Link className="navbar__link nav__link-baseball" to="/ncaaf" onClick={ncaafClick}>NCAAF</Link>
                        </li>
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--nba" src={nba}></img>
                            <Link className="navbar__link" to="/nba" onClick={nbaClick}>NBA</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

import React from "react"
import mlb from "../images/mlb/mlb.png"
import nfl from "../images/nfl/nfl.png"
import nba from "../images/nba/nba.png"

export default function Navbar({setGames, setSport, baseball}) {
    const [football, setFootball] = React.useState(null);
    const [basketball, setBasketball] = React.useState(null);

    React.useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setFootball(data)
        }) 
    }, [])

    React.useEffect(() => {
        fetch("https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&markets=spreads,totals,h2h&oddsFormat=american&apiKey=7e633aea1cc34e3ceec88cb2bb5d135d")
        .then(res => res.json())
        .then(data => {
          setBasketball(data);
        }) 
      }, [])
    
    function nflClick() {
        setGames(football);
        setSport("NFL");
    }

    function mlbClick() {
        setGames(baseball);
        setSport("MLB");
    }

    function nbaClick() {
        setGames(basketball);
        setSport("NBA")
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
                        <button className="btn navbar__btn navbar__btn--login">Log In</button>
                        <button className="btn navbar__btn navbar__btn--join">JOIN NOW</button>
                    </div>
                </div>
                <div className="navbar__bottom">
                    <ul className="list navbar__list">
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--baseball" src={mlb}></img>
                            <a className="navbar__link" href="#" onClick={mlbClick}>MLB</a>
                        </li>
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--nfl" src={nfl}></img>
                            <a className="navbar__link" href="#" onClick={nflClick}>NFL</a>
                        </li>
                        <li className="navbar__list-item">
                            <i class="fa-solid fa-football navbar__icon navbar__icon--ncaaf"></i>
                            <a className="navbar__link nav__link-baseball" href="#">NCAAF</a>
                        </li>
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--nba" src={nba}></img>
                            <a className="navbar__link" href="#" onClick={nbaClick}>NBA</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

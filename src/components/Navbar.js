import React from "react"
import mlb from "../images/mlb.png"
import nfl from "../images/nfl.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container container-navbar">
                <div className="navbar__top">
                    <a href="#" className="navbar__brand">
                        <h3 className="navbar__logo">CAM</h3>
                        Sportsbook
                    </a>
                    <div className="buttons">
                        <button className="btn navbar__button navbar__button-login">Log In</button>
                        <button className="btn navbar__button navbar__button-join">JOIN NOW</button>
                    </div>
                </div>
                <div className="navbar__bottom">
                    <ul className="navbar__bottom-nav">
                        <li className="nav__item">
                            <img className="nav__icon nav__icon-baseball" src={mlb}></img>
                            <a className="nav__link" href="">MLB</a>
                        </li>
                        <li className="nav__item">
                            <img className="nav__icon nav__icon-nfl" src={nfl}></img>
                            <a className="nav__link" href="">NFL</a>
                        </li>
                        <li className="nav__item">
                            <i class="fa-solid fa-football nav__icon nav__icon-ncaaf"></i>
                            <a className="nav__link nav__link-baseball" href="">NCAAF</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

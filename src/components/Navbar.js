import React from "react"
import mlb from "../images/mlb.png"
import nfl from "../images/nfl.png"

export default function Navbar() {
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
                            <a className="navbar__link" href="">MLB</a>
                        </li>
                        <li className="navbar__list-item">
                            <img className="navbar__icon navbar__icon--nfl" src={nfl}></img>
                            <a className="navbar__link" href="">NFL</a>
                        </li>
                        <li className="navbar__list-item">
                            <i class="fa-solid fa-football navbar__icon navbar__icon--ncaaf"></i>
                            <a className="navbar__link nav__link-baseball" href="">NCAAF</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__top">
                    <a href="#" className="navbar__brand">
                        <h3 className="navbar__logo">CAM</h3>
                        Sportsbook
                    </a>
                    <div className="buttons">
                        <button className="btn navbar__button">Log In</button>
                        <button className="btn navbar__button">JOIN NOW</button>
                    </div>
                </div>
                <div className="navbar__bottom">
                    <ul className="nav">
                        <li className="nav__item">MLB</li>
                        <li className="nav__item">NFL</li>
                        <li className="nav__item">NCAAF</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

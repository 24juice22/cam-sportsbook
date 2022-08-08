import React from "react"

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
                        <li className="nav__item"><a className="nav-link" href="">MLB</a></li>
                        <li className="nav__item"><a className="nav-link" href="">NFL</a></li>
                        <li className="nav__item"><a className="nav-link" href="">NCAAF</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

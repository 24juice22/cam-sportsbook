import React from "react"

export default function NavbarBottom() {
    return (
        <nav className="betbar">
            <div className="container">
                <ul className="list betbar__list">
                    <li className="betbar__list-item"><a className="betbar__link" href="">Top</a></li>
                    <li className="betbar__list-item"><a className="betbar__link" href="">Betslip</a></li>
                    <li className="betbar__list-item"><a className="betbar__link" href="">My Bets</a></li>
                </ul>
            </div>
        </nav>
    )
}
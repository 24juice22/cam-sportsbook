import React from "react"
import { Link } from "react-router-dom";

export default function NavbarBottom() {
    return (
        <nav className="betbar">
            <div className="container">
                <ul className="list betbar__list">
                    <li className="betbar__list-item"><a className="betbar__link" href="#">Top</a></li>
                    <Link className="betbar__list-item" to="/betslip">Betslip</Link>
                    <li className="betbar__list-item"><a className="betbar__link" href="#">My Bets</a></li>
                </ul>
            </div>
        </nav>
    )
}
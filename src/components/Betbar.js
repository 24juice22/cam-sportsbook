import React from "react"
import { Link } from "react-router-dom"

export default function Betbar() {
    return (
        <nav className="betbar">
            <div className="container">
                <ul className="list betbar__list">
                    <li className="betbar__list-item"><a className="betbar__link" href="#">Top</a></li>
                    <li className="betbar__list-item">
                        <Link className="betbar__link betslip__link" to="/betslip">Betslip</Link>
                    </li>
                    <li className="betbar__list-item"><a className="betbar__link" href="#">My Bets</a></li>
                </ul>
            </div>
        </nav>
    )
}
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { SportsbookContext } from "../contexts/SportsbookContexts"

export default function Betbar() {
    const {betbarActive, loggedIn} = useContext(SportsbookContext)

    const betbarStyles = {
        backgroundColor: betbarActive.length ? "var(--color-secondary)" : "var(--color-primary)",
        color: betbarActive.length ? "var(--color-primary)" : "white"
    }

    const slipCountStyles = {
        visibility: betbarActive.length ? "visible" : "hidden"
    }

    return (
        <nav className="betbar">
            <div className="container--widest">
                <ul className="list betbar__list">
                    <li className="betbar__list-item">
                        <a className="betbar__link" href="#">Top</a>
                    </li>
                    <li className="betbar__list-item" style={betbarStyles}>
                        <p className="betslip__count" style={slipCountStyles}>{betbarActive.length}</p>
                        <Link className="betbar__link betslip__link" to="/betslip" style={betbarStyles}>Betslip</Link>
                    </li>
                    <li className="betbar__list-item">
                        {loggedIn && <p>${(loggedIn.bankroll)}</p>}
                        <Link className="betbar__link" to="/Account">Account</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
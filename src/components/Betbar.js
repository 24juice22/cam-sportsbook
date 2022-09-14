import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { SportsbookContext } from "../contexts/SportsbookContexts"

export default function Betbar({setSport}) {
    const {betbarActive, loggedIn} = useContext(SportsbookContext);

    const slipCountStyles = {
        visibility: betbarActive.length ? "visible" : "hidden"
    }

    function homeClick() {
        setSport("MLB")
    }

    return (
        <nav className="betbar">
            <div className="container--widest">
                <ul className="list betbar__list">
                    <li className="betbar__list-item">
                        <Link className="betbar__link" to="/" onClick={homeClick}><i class="fa-solid fa-house-chimney"></i></Link>
                    </li>
                    <li className="betbar__list-item">
                        <a className="betbar__link" href="#">Top</a>
                    </li>
                    <li className="betbar__list-item">
                        <Link className="betbar__link betslip__link" to="/betslip">
                            <p className="betslip__count" style={slipCountStyles}>{betbarActive.length}</p>
                            <p>Betslip</p>
                        </Link>
                    </li>
                    <li className="betbar__list-item">
                        <Link className="betbar__link" to="/Account">
                            {loggedIn && <p className="betbar__bankroll" >${(loggedIn.bankroll)}</p>}
                            <p>Account</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
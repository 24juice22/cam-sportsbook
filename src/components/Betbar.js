import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { SportsbookContext } from "../contexts/SportsbookContexts"

export default function Betbar({setSport}) {
    const {betbarActive, loggedIn, windowWidth} = useContext(SportsbookContext);

    const slipCountStyles = {
        visibility: betbarActive.length ? "visible" : "hidden"
    }

    function homeClick() {
        setSport("NFL")
    }

    return (
        <nav className="betbar">
            <div className="container--widest">
                <ul className="list betbar__list">
                    <li className="betbar__list-item">
                        <Link className="betbar__link" to="/cam-sportsbook/" onClick={homeClick}><i class="fa-solid fa-house-chimney"></i></Link>
                    </li>
                    <li className="betbar__list-item">
                        <a className="betbar__link" href="#">Top</a>
                    </li>
                    {windowWidth < 1024 && <li className="betbar__list-item">
                        <Link className="betbar__link betslip__link" to="/cam-sportsbook/betslip">
                            <p className="betslip__count" style={slipCountStyles}>{betbarActive.length}</p>
                            <p>Betslip</p>
                        </Link>
                    </li>}
                    <li className="betbar__list-item">
                        <Link className="betbar__link" to="/cam-sportsbook/Account">
                            {loggedIn && <p className="betbar__bankroll" >${loggedIn.bankroll.toFixed(2)}</p>}
                            <p>Account</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
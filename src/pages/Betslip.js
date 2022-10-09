import React, { useState, useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import Slip from "../components/Slip"
import BetConfirm from "../components/BetConfirm"

function Betslip() {
    const [betConfirmVisible, setBetConfirmVisible] = useState(false);
    const {setBetslipRemoved, betbarActive, setBetbarActive, loggedIn, setLoginIsVisible, setPopup} = useContext(SportsbookContext)

    const slipElements = betbarActive.map(matchup => <Slip matchup={matchup} exitClicked={exitClicked}/>);

    function exitClicked(id) {
        setBetbarActive(prevValues => {
            let filteredBets = prevValues.filter(value => value.id !== id)
            return filteredBets
        })
        setBetslipRemoved(prevValue => {
            let betID = [id];
            return {id: betID, count: prevValue.count + 1}
        })
    }

    function loginDisplay() {
        setLoginIsVisible(true)
    }

    function betDisplay() {
        setBetConfirmVisible(true);
        setPopup(true)
    }

    return (
        <div className="page betslip">
            <h1 className="title title--page">Betslip</h1>
            {!betbarActive.length && <p className="betslip__message">The betslip is empty! Please add selections to make a bet.</p>}
            {!betbarActive.length && <h3 className="betslip__logo">CAM</h3>}
            {slipElements}
            {betbarActive.length > 0 && !loggedIn && <button className="btn betslip__button" onClick={loginDisplay}>Login to Bet</button>}
            {betbarActive.length > 0 && loggedIn && <button className="btn betslip__button" onClick={betDisplay}>Bet</button>}
            {betConfirmVisible && <BetConfirm bets={betbarActive} betConfirmVisible={betConfirmVisible} setBetConfirmVisible={setBetConfirmVisible}/>}
        </div>
    )
}

export default Betslip;

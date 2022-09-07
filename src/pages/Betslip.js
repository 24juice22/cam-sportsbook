import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import Slip from "../components/Slip"
import BetConfirm from "../components/BetConfirm"

function Betslip() {
    const [betConfirmVisible, setBetConfirmVisible] = React.useState(false);
    const {betbarActive, setBetbarActive, loggedIn, loginIsVisible, setLoginIsVisible} = useContext(SportsbookContext)

    const slipElements = betbarActive.map(matchup => <Slip matchup={matchup} exitClicked={exitClicked}/>);

    function exitClicked(id) {
        setBetbarActive(prevValues => {
            if (prevValues.length) {
                let something = prevValues.filter(value => value.id !== id)
                if (something.length < prevValues.length) return something
            }
        })
    }

    function loginDisplay() {
        setLoginIsVisible(true)
    }

    function betDisplay() {
        setBetConfirmVisible(true);
    }

    return (
        <div className="betslip">
            <h1 className="title title--page">Betslip</h1>
            {!betbarActive.length && <p className="betslip__message">The betslip is empty! Please add selections to make a bet.</p>}
            {slipElements}
            {betbarActive.length > 0 && !loggedIn && <button className="btn betslip__button" onClick={loginDisplay}>Login to Bet</button>}
            {betbarActive.length > 0 && loggedIn && <button className="btn betslip__button" onClick={betDisplay}>Bet</button>}
            {betConfirmVisible && <BetConfirm bets={betbarActive} betConfirmVisible={betConfirmVisible} setBetConfirmVisible={setBetConfirmVisible}/>}
        </div>
    )
}

export default Betslip;

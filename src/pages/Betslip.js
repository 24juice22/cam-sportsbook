import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import Slip from "../components/Slip"
import Login from "../components/Login"

function Betslip() {
    const {betbarActive, setBetbarActive} = useContext(SportsbookContext)
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [loginIsVisible, setLoginIsVisible] = React.useState(false)

    const slipElements = betbarActive.map(matchup => <Slip matchup={matchup} exitClicked={exitClicked}/>);

    function exitClicked(id) {
        setBetbarActive(prevValues => {
            console.log("This was clicked")
            if (prevValues.length) {
                let something = prevValues.filter(value => value.id !== id)
                if (something.length < prevValues.length) return something
            }
        })
    }

    function loginDisplay() {
        setLoginIsVisible(true)
    }
  

    return (
        <div className="betslip">
            <h1 className="betslip__title">Betslip</h1>
            {!betbarActive.length && <p className="betslip__message">The betslip is empty! Please add selections to make a bet.</p>}
            {slipElements}
            {betbarActive.length > 0 && !loggedIn && <button className="btn betslip__button" onClick={loginDisplay}>Login to Bet</button>}
            {betbarActive.length > 0 && loggedIn && <button className="btn betslip__button">Make Bet</button>}
            <Login loginIsVisible={loginIsVisible}/>
        </div>
        
    )
}

export default Betslip;

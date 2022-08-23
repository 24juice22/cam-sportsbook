import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import Slip from "../components/Slip"

function Betslip() {
    const {betbarActive, setBetbarActive} = useContext(SportsbookContext)

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
  

    return (
        <div className="betslip">
            <h1 className="betslip__title">Betslip</h1>
            {!betbarActive.length && <p className="betslip__message">The betslip is empty! Please add selections to make a bet.</p>}
            {slipElements}
        </div>
        
    )
}

export default Betslip;

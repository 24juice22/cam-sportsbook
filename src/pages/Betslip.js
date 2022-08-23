import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import Slip from "../components/Slip"

function Betslip() {
    const {betbarActive} = useContext(SportsbookContext)

    const slipElements = betbarActive.map(matchup => <Slip matchup={matchup}/>);

    return (
        <div className="betslip">
            <h1 className="betslip__title">Betslip</h1>
            {slipElements}
        </div>
        
    )
}

export default Betslip;

import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import Slip from "../components/Slip"

function Betslip() {
    const {betbarActive} = useContext(SportsbookContext)
    let stuff = [...betbarActive]

    return (
        <div className="betslip">
            <h1 className="betslip__title">Betslip</h1>
            <Slip betbarActive={betbarActive}/>
        </div>
        
    )
}

export default Betslip;

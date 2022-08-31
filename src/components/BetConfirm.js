import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import BetConfirmBox from "./BetConfirmBox"

function BetConfirm() {
    const {betbarActive} = useContext(SportsbookContext)

    let betElements = betbarActive.map(item => <BetConfirmBox item={item} />);

    return (
        <div className="bet-confirm">
            <h2>Confirm Wager</h2>
            {betElements}
            <button className="btn">Confirm</button>
        </div>
    )
}

export default BetConfirm;
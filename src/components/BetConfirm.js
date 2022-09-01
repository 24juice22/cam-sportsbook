import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import BetConfirmBox from "./BetConfirmBox"

function BetConfirm() {
    const {betbarActive} = useContext(SportsbookContext)

    let betElements = betbarActive.map(item => {
        if (item.betAmount > 0)
            return <BetConfirmBox item={item} />
});

    return (
        <div className="bet-confirm">
            <h2 className="bet-confirm__title">Confirm Wager</h2>
            {betElements}
            <div className="flex">
                <button className="btn bet-confirm__button">Confirm</button>
            </div>
        </div>
    )
}

export default BetConfirm;
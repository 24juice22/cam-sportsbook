import React, { useState, useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"


function SlipForm({price, id}) {
    const [wagerAmount, setWagerAmount] = useState("")
    const {setBetbarActive} = useContext(SportsbookContext)

    function winAmount(bet) {
        return price < 0 ? 
           (Math.round(((bet / Math.abs(price)) * 100) * 100) / 100).toFixed(2) : 
           (Math.round(((bet/100) * price) * 100) / 100).toFixed(2);
    }

    function handleChange(event) {
        setWagerAmount(event.target.value)
        setBetbarActive(prevValue => prevValue.map(value => {
            return value.id === event.target.id ?
                {...value, betAmount: Number(event.target.value), winAmount: Number(winAmount(event.target.value))} :
                value
        }))
    }

    return (
        <>
            <form className="slip__form">
                <label className="wager-label">Bet Amount $ </label>
                <input 
                    className="wager-input"
                    type="text"
                    name="wager"
                    placeholder="Amount"
                    required
                    value={wagerAmount}
                    onChange={handleChange}
                    autoComplete="off"
                    id={id}
                />
            </form>
            <p className="wager-output">You Will Win <span className="wager-output__amount">${winAmount(Number(wagerAmount))}</span></p>
        </>
    )
}

export default SlipForm;
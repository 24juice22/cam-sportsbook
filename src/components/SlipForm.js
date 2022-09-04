import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"


function SlipForm({price, id}) {
    const [wagerAmount, setWagerAmount] = React.useState("")
    const {setBetbarActive} = useContext(SportsbookContext)

    function winAmount(bet) {
        console.log(bet)
        return price < 0 ? 
           (Math.round(((bet / Math.abs(price)) * 100) * 100) / 100).toFixed(2) : 
           (Math.round(((bet/100) * price) * 100) / 100).toFixed(2);
    }

    function handleChange(event) {
        setWagerAmount(Number(event.target.value))
        setBetbarActive(prevValue => prevValue.map(value => {
            return value.id === event.target.attributes.id.nodeValue ?
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
                    id={id}
                />
            </form>
            <p className="wager-output">You Will Win <span className="wager-output__amount">${winAmount(wagerAmount)}</span></p>

        </>
    )
}

export default SlipForm;
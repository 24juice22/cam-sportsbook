import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"


function SlipForm({price, id}) {
    const [wagerAmount, setWagerAmount, team] = React.useState("")
    const {betbarActive, setBetbarActive} = useContext(SportsbookContext)

    function winAmount(bet) {
        return price < 0 ? 
            parseInt((Math.round(((bet / Math.abs(price)) * 100) * 100) / 100).toFixed(2)) : 
            parseInt((Math.round(((bet/100) * price) * 100) / 100).toFixed(2));
    }

    function handleChange(event) {
        setWagerAmount(event.target.value)
        setBetbarActive(prevValue => prevValue.map(value =>{
            return value.id === event.target.attributes.id.nodeValue ?
                {...value, betAmount: parseInt(event.target.value), winAmount: winAmount(event.target.value)} :
                value
        }))
    }

    
    
    console.log(betbarActive)
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
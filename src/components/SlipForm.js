import React from "react"

function SlipForm({price}) {
    const [wagerAmount, setWagerAmount] = React.useState("")

    function handleChange(event) {
        setWagerAmount(event.target.value)
    }

    let winAmount = price < 0 ? Math.round((wagerAmount / Math.abs(price)) * 100) : Math.round(((wagerAmount/100) * price));
    
    return(
        <>
            <form className="slip__form">
                <label className="wager-label">Bet Amount $ </label>
                <input className="wager-input"
                    type="text"
                    name="wager"
                    placeholder="Amount"
                    value={wagerAmount}
                    onChange={handleChange}
                />
            </form>
            <p className="wager-output">You Will Win <span className="wager-output__amount">${winAmount}</span></p>
        </>
    )
}

export default SlipForm;
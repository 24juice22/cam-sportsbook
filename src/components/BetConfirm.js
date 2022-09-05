import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import BetConfirmBox from "./BetConfirmBox"

function BetConfirm({betConfirmVisible, setBetConfirmVisible}) {
    const {betbarActive, setBetbarActive, accounts, setAccounts, loggedIn, setLoggedIn} = useContext(SportsbookContext);

    const betConfirmStyles = {
        visibility: betConfirmVisible ? "visible" : "hidden",
        transform: betConfirmVisible ? "scale(1)" : "scale(0.1)"
    }

    let betElements = betbarActive.map(item => {
        if (item.betAmount > 0)
            return <BetConfirmBox item={item} />
    });

    function betTotal() {
        let betTotal = 0;
        for (let bets of betbarActive)
            if (bets.betAmount > 0)
                betTotal += bets.betAmount
        return betTotal.toFixed(2)
    }

    function winTotal() {
        let winTotal = 0;
        for (let bets of betbarActive)
            if (bets.winAmount > 0) {
                console.log(bets)
                winTotal += bets.winAmount
            }
        return winTotal.toFixed(2)
    }

    function hideBetConfirm() {
        setBetConfirmVisible(false);
    }

    function betConfirmed() {
        setAccounts(prevValue => prevValue.map(value =>{
            return value.username === loggedIn.username ?
                {...value, bankroll: value.bankroll - betTotal()} :
                value
        }))
        setLoggedIn(prevValue => {
            return {...prevValue, bankroll: prevValue.bankroll - betTotal()}
        })
        hideBetConfirm()
        setBetbarActive(prevValues => {
            return prevValues.filter(value => !value.betAmount)
        })
    }

    React.useEffect(() => {
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }, [accounts])

    return (
        <div className="bet-confirm" style={betConfirmStyles}>
            <button className="btn--exit" onClick={hideBetConfirm}>X</button>
            <h2 className="bet-confirm__title">Confirm Wager</h2>
            {betElements}
            <div className="bet-confirm__totals">
                <p className="bet-confirm__total">Total Bet Amount: <span>${betTotal()}</span></p>
                <p className="bet-confirm__total">Total Payout: <span>${winTotal()}</span></p>
            </div>
            <div className="flex">
                <button className="btn bet-confirm__button" onClick={betConfirmed}>Confirm</button>
            </div>
        </div>
    )
}

export default BetConfirm;
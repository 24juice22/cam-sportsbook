import React, { useEffect, useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import BetConfirmBox from "./BetConfirmBox"

function BetConfirm({betConfirmVisible, setBetConfirmVisible}) {
    const {betbarActive, setBetbarActive, accounts, setAccounts, loggedIn, setLoggedIn, setPopup} = useContext(SportsbookContext);

    const betConfirmStyles = {
        visibility: betConfirmVisible ? "visible" : "hidden",
        transform: betConfirmVisible ? "scale(1)" : "scale(0.1)"
    }

    let betElements = betbarActive.map(item => {
        if (item.betAmount > 0)
            return <BetConfirmBox item={item} key={item.id} />
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
            if (bets.winAmount > 0) 
                winTotal += bets.winAmount
        return winTotal.toFixed(2)
    }

    function hideBetConfirm() {
        setBetConfirmVisible(false);
        setPopup(false)
    }

    function betConfirmed() {
        let newBets = []
        for (let bet of betbarActive)
            if (bet.betAmount > 0) 
                newBets.push(bet)
        setAccounts(prevValue => prevValue.map(value =>{
            return value.username === loggedIn.username ?
                {...value, bankroll: value.bankroll - betTotal(), bets: value.bets.concat(newBets)} :
                value
        }))
        setLoggedIn(prevValue => {
            return {
                ...prevValue, 
                bankroll: prevValue.bankroll - betTotal(), 
                bets: prevValue.bets.concat(newBets)
            }
        })
        hideBetConfirm()
        setBetbarActive(prevValues => {
            return prevValues.filter(value => !value.betAmount)
        })
    }

    useEffect(() => {
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }, [accounts])

    if (betTotal() > loggedIn.bankroll || betTotal() === "0.00")
        return (
            <div className="popup bet-confirm" style={betConfirmStyles}>
                <button className="btn btn--exit" onClick={hideBetConfirm}>X</button>
                <h2 className="bet-confirm__error">Error</h2>
                {betTotal() === "0.00" ? 
                    <p>You have not made any bets. Please input a wager amount.</p> : 
                    <p>Your total bet amount exceeds your bankroll. Please adjust your bets.</p>
                }
            </div>
        )

    return (
        <div className="popup" style={betConfirmStyles}>
            <button className="btn btn--exit" onClick={hideBetConfirm}>X</button>
            <h2 className="title bet-confirm__title">Confirm Wager</h2>
            {betElements}
            <div className="bet-confirm__totals">
                <p className="bet-confirm__total">Total Bet Amount: <span>${betTotal()}</span></p>
                <p className="bet-confirm__total">Total Payout: <span>${winTotal()}</span></p>
            </div>
            <div className="bet-confirm__button">
                <button className="btn btn--popup" onClick={betConfirmed}>Confirm</button>
            </div>
        </div>
    )
}

export default BetConfirm;
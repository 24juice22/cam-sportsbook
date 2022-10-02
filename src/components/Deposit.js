import React, { useEffect, useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"

function Deposit() {
    const { depositIsVisible, setDepositIsVisible, accounts, setAccounts, loggedIn, setLoggedIn, setPopup } = useContext(SportsbookContext);

    const depositVisibleStyle = {
        visibility: depositIsVisible ? "visible" : "hidden",
        transform: depositIsVisible ? "scale(1)" : "scale(0.1)"
    }

    function handleDeposit(event) {
        event.preventDefault();
        setAccounts(prevValue => prevValue.map(value =>{
            return value.username === loggedIn.username ?
                {...value, bankroll: value.bankroll + Number(event.target[0].value)} :
                value
        }))
        setLoggedIn(prevValue => {
            return {...prevValue, bankroll: prevValue.bankroll + Number(event.target[0].value)}
        })
        hideDeposit();
    }

    useEffect(() => {
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }, [accounts])

    function hideDeposit() {
        setDepositIsVisible(false);
        setPopup(false)
    }
    
    return (
        <div className="popup" style={depositVisibleStyle}>
            <div className="container--wide">
            <h2 className="title">Deposit Money</h2>
            <button className="btn btn--exit" onClick={hideDeposit}>X</button>
            <p classname="deposit__instructions">Please deposit a valid dollar amount. Must be at least $1.00 and less than $10,000.00</p>
            <p>You must type your amount to 2 decimal places. Ex (13.00)</p>
            <form className="deposit__form" onSubmit={handleDeposit}>
                <div className="deposit-container">
                <label className="deposit-label">Deposit Amount $ </label>
                <input 
                    className="deposit__input"
                    type="text"
                    name="deposit"
                    placeholder="Amount"
                    required
                    autoComplete="off"
                    pattern="[1-9][0-9]{0,3}\.[0-9]{2}"
                />
                </div>
                <button 
                    type="submit"
                    className="btn btn--popup"
                >
                    Add Money
                </button>
            </form>
            </div>
        </div>
    )
}

export default Deposit;
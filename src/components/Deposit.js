import React, {useContext} from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"

function Deposit() {
    const { depositIsVisible, setDepositIsVisible, accounts, setAccounts, loggedIn, setLoggedIn } = useContext(SportsbookContext);

    const depositVisibleStyle = {
        visibility: depositIsVisible ? "visible" : "hidden",
        transform: depositIsVisible ? "scale(1)" : "scale(0.1)"
    }

    function handleDeposit(event) {
        event.preventDefault();
        setAccounts(prevValue => prevValue.map(value =>{
            return value.username === loggedIn.username ?
                {...value, bankroll: value.bankroll + parseInt(event.target[0].value)} :
                value
        }))
        setLoggedIn(prevValue => {
            return {...prevValue, bankroll: prevValue.bankroll + parseInt(event.target[0].value)}
        })
        hideDeposit();
    }

    React.useEffect(() => {
        localStorage.setItem("accounts", JSON.stringify(accounts))
    }, [accounts])

    function hideDeposit() {
        setDepositIsVisible(false);
    }
    
    return (
        <div className="popup" style={depositVisibleStyle}>
            <div className="container--wide">
            <h2 className="title">Deposit Money</h2>
            <button className="btn btn--exit" onClick={hideDeposit}>X</button>
            <p classname="deposit__instructions">Please deposit a valid dollar amount.</p>
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
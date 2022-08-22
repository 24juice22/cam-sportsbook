import React from "react"

function Slip() {
    return (
        <div className="box slip">
            <p className="slip__exit">X</p>
            <div className="container">
                <div className="slip__line-numbers">
                    <p className="slip__team">Miami Marlins</p>
                    <p className="slip__point">+3.5</p>
                    <p className="slip__price">-104</p>
                </div>
                <p className="slip__line-type">Point Spread</p>
                <div className="slip__game-info">
                    <p className="slip__matchup">Miami Marlins @ Pittsburgh Pirates</p>
                    <p className="slip__date">7:30PM</p>
                </div>
                <form className="form wager-form">dsfsdf</form>
            </div>
        </div>
    )
}

export default Slip;
import React from "react"
import GameDate from "./GameDate"

function Slip({matchup}) {
    return (
        <div className="box slip">
            <p className="slip__exit">X</p>
            <div className="container--wide">
                <div className="slip__line-numbers">
                    <p className="slip__team">{matchup.team}</p>
                    <p className="slip__point">{matchup.point}</p>
                    <p className="slip__price">{matchup.price}</p>
                </div>
                <p className="slip__line-type">{matchup.indexType}</p>
                <div className="slip__matchup-info">
                    <p className="slip__matchup">{matchup.matchupInfo}</p>
                    <GameDate matchup={matchup.matchup}/>
                </div>
                <form className="form wager-form">dsfsdf</form>
            </div>
        </div>
    )
}

export default Slip;
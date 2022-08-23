import React from "react"
import GameDate from "./GameDate"
import SlipForm from "./SlipForm"

function Slip({matchup, exitClicked}) {

    return (
        <div className="box slip">
            <button className="btn slip__btn--exit" onClick={() => exitClicked(matchup.id)}>X</button>
            <div className="container--wide">
                <div className="slip__line-numbers">
                    <p className="slip__point">{matchup.team} {matchup.point}</p>
                    <p className="slip__price">{matchup.price}</p>
                </div>
                <p className="slip__line-type">{matchup.indexType}</p>
                <div className="slip__matchup-info">
                    <p className="slip__matchup">{matchup.matchupInfo}</p>
                    <GameDate matchup={matchup.matchup}/>
                </div>
                <SlipForm price={matchup.price}/>
            </div>
        </div>
    )
}

export default Slip;
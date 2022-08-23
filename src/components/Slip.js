import React, { useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import GameDate from "./GameDate"

function Slip() {
    const {betbarActive} = useContext(SportsbookContext)
    console.log(betbarActive)
    return (
        <div className="box slip">
            <p className="slip__exit">X</p>
            <div className="container">
                <div className="slip__line-numbers">
                    <p className="slip__team">{betbarActive[0].team}</p>
                    <p className="slip__point">{betbarActive[0].point}</p>
                    <p className="slip__price">{betbarActive[0].price}</p>
                </div>
                <p className="slip__line-type">{betbarActive[0].indexType}</p>
                <div className="slip__matchup-info">
                    <p className="slip__matchup">{betbarActive[0].matchupInfo}</p>
                    <GameDate matchup={betbarActive[0].matchup}/>
                </div>
                <form className="form wager-form">dsfsdf</form>
            </div>
        </div>
    )
}

export default Slip;
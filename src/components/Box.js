import React from "react"
import BoxTeam from "./BoxTeam"
import GameDate from "./GameDate"

export default function Box({matchup}) {
    let awayTeam = matchup.away_team;
    let homeTeam = matchup.home_team
    let awayTeamImageName = awayTeam.split(" ").join("-");
    let homeTeamImageName = homeTeam.split(" ").join("-");

    return (
        <div className="box" >
            <BoxTeam team={awayTeam} awayTeam={awayTeam} teamImageName={awayTeamImageName} matchup={matchup}/>
            <p className="box__at-symbol">@--</p>
            <BoxTeam team={homeTeam} awayTeam={awayTeam} teamImageName={homeTeamImageName} matchup={matchup}/>
            <GameDate matchup={matchup}/>
        </div>
    )
}
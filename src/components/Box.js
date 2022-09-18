import React from "react"
import BoxTeam from "./BoxTeam"
import GameDate from "./GameDate"

export default function Box({matchup}) {
    let awayTeam = matchup.away_team;
    let homeTeam = matchup.home_team;
    let awayTeamImageName = awayTeam.split(" ").join("-");
    let homeTeamImageName = homeTeam.split(" ").join("-");
    let overTeam = 'Over';
    let underTeam = 'Under';

    return (
        <div className="box" >
            <div className="container--widest">
                <BoxTeam 
                    team={awayTeam} 
                    awayTeam={awayTeam} 
                    homeTeam={homeTeam} 
                    totalTeam={overTeam} 
                    teamImageName={awayTeamImageName} 
                    matchup={matchup}
                />
                <p className="box__at-symbol">@--</p>
                <BoxTeam 
                    team={homeTeam} 
                    awayTeam={awayTeam} 
                    homeTeam={homeTeam} 
                    totalTeam={underTeam} 
                    teamImageName={homeTeamImageName} 
                    matchup={matchup}
                /> 
                <GameDate matchup={matchup}/>
            </div>
        </div>
    )
}
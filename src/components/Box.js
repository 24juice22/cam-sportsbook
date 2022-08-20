import React from "react"
import BoxTeam from "./BoxTeam"

export default function Box({matchup}) {
    let awayTeam = matchup.away_team;
    let homeTeam = matchup.home_team
    let awayTeamImageName = awayTeam.split(" ").join("-");
    let homeTeamImageName = homeTeam.split(" ").join("-");

/* Date and Time */
    let date = new Date(matchup.commence_time).toLocaleString('en-US').split(":00 ").join("").split(",").join("");
    let dateToCompare = date.split(" ")
    let currentDate = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    if (dateToCompare[0] === currentDate)
        date = `Today ${dateToCompare[1]}`;

    return (
        <div className="box" >
            <BoxTeam team={awayTeam} awayTeam={awayTeam} teamImageName={awayTeamImageName} matchup={matchup}/>
            <p className="box__at-symbol">@--</p>
            <BoxTeam team={homeTeam} awayTeam={awayTeam} teamImageName={homeTeamImageName} matchup={matchup}/>
            <p className="date">{date}</p>
        </div>
    )
}
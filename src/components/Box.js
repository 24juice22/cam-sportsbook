import React from "react"
import Spread from "./Spread"
import Total from "./Total"
import Moneyline from "./Moneyline"

export default function Box({matchup}) {

    let unibetIndex = matchup.bookmakers.findIndex(item => item.key === 'unibet');
    if (unibetIndex < 0) unibetIndex = 0;
    let betMarkets = matchup.bookmakers[unibetIndex].markets; /* Shorthand */
    let indexSpread = betMarkets.findIndex(item => item.key === 'spreads');
    let indexTotal = betMarkets.findIndex(item => item.key === 'totals');
    let indexMoneyline = betMarkets.findIndex(item => item.key === 'h2h');

/* Point Spreads */
    let awayTeam = matchup.away_team;
    let homeTeam = matchup.home_team
    let awayTeamImageName = awayTeam.split(" ").join("-");
    let homeTeamImageName = homeTeam.split(" ").join("-");

/* Totals */
    let over = 'Over';
    let under = 'Under';

/* Moneyline */
    
/* Date and Time */
    let date = new Date(matchup.commence_time).toLocaleString('en-US').split(":00 ").join("").split(",").join("");
    let dateToCompare = date.split(" ")
    let currentDate = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    if (dateToCompare[0] === currentDate)
        date = `Today ${dateToCompare[1]}`;


    return (
        <div className="box" >
            <div className="box__team box__away">
                {matchup.sport_title !== 'NCAAF' ? <img className="team-logo" src={require(`../images/${matchup.sport_title.toLowerCase()}/${awayTeamImageName}.png`)}></img> : <img className="team-logo" src=""></img>}
                <p className="box__team-name">{awayTeam}</p>
                <div className="box__lines">
                    <Spread team={awayTeam} matchup={matchup} betMarkets={betMarkets} indexSpread={indexSpread} indexTotal={indexTotal} indexMoneyline={indexMoneyline}/>
                    <Total team={over} awayTeam={awayTeam} matchup={matchup} betMarkets={betMarkets} indexSpread={indexSpread} indexTotal={indexTotal} indexMoneyline={indexMoneyline}/>
                    <Moneyline team={awayTeam} matchup={matchup} betMarkets={betMarkets} indexSpread={indexSpread} indexTotal={indexTotal} indexMoneyline={indexMoneyline}/>
                </div>
            </div>
            <p className="box__at-symbol">@--</p>
            <div className="box__team box__home">
                {matchup.sport_title !== 'NCAAF' ? <img className="team-logo" src={require(`../images/${matchup.sport_title.toLowerCase()}/${homeTeamImageName}.png`)}></img> : <img className="team-logo" src=""></img>}
                <p className="box__team-name">{homeTeam}</p>
                <div className="box__lines">
                    <Spread team={homeTeam} matchup={matchup} betMarkets={betMarkets} indexSpread={indexSpread} indexTotal={indexTotal} indexMoneyline={indexMoneyline}/>
                    <Total team={under} awayTeam={awayTeam} matchup={matchup} betMarkets={betMarkets} indexSpread={indexSpread} indexTotal={indexTotal} indexMoneyline={indexMoneyline}/>
                    <Moneyline team={homeTeam} matchup={matchup} betMarkets={betMarkets} indexSpread={indexSpread} indexTotal={indexTotal} indexMoneyline={indexMoneyline}/>
                </div>
            </div>
            <p className="date">{date}</p>
        </div>
    )
}
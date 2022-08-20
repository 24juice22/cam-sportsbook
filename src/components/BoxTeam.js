import React from "react"
import Spread from "./Spread"
import Total from "./Total"
import Moneyline from "./Moneyline"

function BoxTeam({team, teamImageName, matchup, totalTeam}) {
    let unibetIndex = matchup.bookmakers.findIndex(item => item.key === 'unibet');
    if (unibetIndex < 0) unibetIndex = 0;
    let betMarkets = matchup.bookmakers[unibetIndex].markets; /* Shorthand */
    let indexSpread = betMarkets.findIndex(item => item.key === 'spreads');
    let indexTotal = betMarkets.findIndex(item => item.key === 'totals');
    let indexMoneyline = betMarkets.findIndex(item => item.key === 'h2h');

    let over = 'Over';
    let under = 'Under';

    return (
    <div className="box__team">
        {matchup.sport_title !== 'NCAAF' ? <img className="team-logo" src={require(`../images/${matchup.sport_title.toLowerCase()}/${teamImageName}.png`)}></img> : <img className="team-logo" src=""></img>}
        <p className="box__team-name">{team}</p>
        <div className="box__lines">
            <Spread team={team} betMarkets={betMarkets} indexSpread={indexSpread} />
            <Total team={totalTeam} betMarkets={betMarkets} indexTotal={indexTotal}/>
            <Moneyline team={team} betMarkets={betMarkets} indexMoneyline={indexMoneyline}/>
        </div>
    </div> 
    )
}

export default BoxTeam;
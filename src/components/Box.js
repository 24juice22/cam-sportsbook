import React from "react"

export default function Box({matchup}) {
    let spreadExists = null;
    let totalExists = null;
    let moneylineExists = null;

    let unibetIndex = matchup.bookmakers.findIndex(item => item.key === 'unibet');
    if (unibetIndex < 0) unibetIndex = 0;
    let indexSpread = matchup.bookmakers[unibetIndex].markets.findIndex(item => item.key === 'spreads');
    let indexTotal = matchup.bookmakers[unibetIndex].markets.findIndex(item => item.key === 'totals');
    let indexMoneyline = matchup.bookmakers[unibetIndex].markets.findIndex(item => item.key === 'h2h');

/* Point Spreads */
    if (indexSpread >= 0) spreadExists = true;
    if (indexSpread < 0) indexSpread = indexMoneyline;
    if (indexSpread < 0) indexSpread = indexTotal;
    
    let awayTeam = matchup.away_team;
    let awayTeamImageName = awayTeam.split(" ").join("-");
    let indexSpreadAwayTeam = matchup.bookmakers[unibetIndex].markets[indexSpread].outcomes.findIndex(item => item.name === awayTeam)
    let spreadPointAway = matchup.bookmakers[unibetIndex].markets[indexSpread].outcomes[indexSpreadAwayTeam].point;
    if (spreadPointAway > 0)
        spreadPointAway = `+${spreadPointAway}`;

    console.log(awayTeamImageName);
    let homeTeam = matchup.home_team;
    let homeTeamImageName = homeTeam.split(" ").join("-");
    let indexSpreadHomeTeam = matchup.bookmakers[unibetIndex].markets[indexSpread].outcomes.findIndex(item => item.name === homeTeam);
    let spreadPointHome = matchup.bookmakers[unibetIndex].markets[indexSpread].outcomes[indexSpreadHomeTeam].point;
    if (spreadPointHome > 0)
        spreadPointHome = `+${spreadPointHome}`;

/* Totals */
    if (indexTotal >= 0) totalExists = true;
    if (indexTotal < 0) indexTotal = indexMoneyline;
    if (indexTotal < 0) indexTotal = indexSpread;

    let indexTotalOver = matchup.bookmakers[unibetIndex].markets[indexTotal].outcomes.findIndex(item => item.name === 'Over')
    let totalPoint = matchup.bookmakers[unibetIndex].markets[indexTotal].outcomes[indexTotalOver].point;

/* Moneyline */
    if (indexMoneyline >= 0) moneylineExists = true;
    if (indexMoneyline < 0) indexMoneyline = indexTotal;
    if (indexMoneyline < 0) indexMoneyline = indexSpread;

    let indexMoneylineAway = matchup.bookmakers[unibetIndex].markets[indexMoneyline].outcomes.findIndex(item => item.name === awayTeam)
    let moneylinePriceAway = matchup.bookmakers[unibetIndex].markets[indexMoneyline].outcomes[indexMoneylineAway].price;
    if (moneylinePriceAway > 0)
        moneylinePriceAway = `+${moneylinePriceAway}`;
    
    let indexMoneylineHome = matchup.bookmakers[unibetIndex].markets[indexMoneyline].outcomes.findIndex(item => item.name === homeTeam)
    let moneylinePriceHome = matchup.bookmakers[unibetIndex].markets[indexMoneyline].outcomes[indexMoneylineHome].price;
    if (moneylinePriceHome > 0)
        moneylinePriceHome = `+${moneylinePriceHome}`;

    return (
        <div className="box">
            <div className="box__team box__away">
                <img className="team-logo" src={require(`../images/mlb/${awayTeamImageName}.png`)}></img>
                <p className="box__team-name">{awayTeam}</p>
                <div className="box__lines">
                    {spreadExists ? <p className="line line__spread">{spreadPointAway}</p> : <p className="line line__spread"></p>}
                    {totalExists ? <p className="line line__total">{`O ${totalPoint}`}</p> : <p className="line line__total"></p>}
                    {moneylineExists ? <p className="line line__moneyline">{moneylinePriceAway}</p> : <p className="line line__moneyline"></p>}
                    
                </div>
            </div>
            <div className="box__team box__home">
                <img className="team-logo" src={require(`../images/mlb/${homeTeamImageName}.png`)}></img>
                <p className="box__team-name">{homeTeam}</p>
                <div className="box__lines">
                    {spreadExists ? <p className="line line__spread">{spreadPointHome}</p> : <p className="line line__spread"></p>}
                    {totalExists ? <p className="line line__total">{`U ${totalPoint}`}</p> : <p className="line line__total"></p>}  
                    {moneylineExists ? <p className="line line__moneyline">{moneylinePriceHome}</p> : <p className="line line__moneyline"></p>}
                </div>
            </div>
        </div>
    )
}
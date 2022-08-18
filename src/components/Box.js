import React from "react"

export default function Box({matchup}) {
    let spreadExists = null;
    let totalExists = null;
    let moneylineExists = null;

    let unibetIndex = matchup.bookmakers.findIndex(item => item.key === 'unibet');
    if (unibetIndex < 0) unibetIndex = 0;
    let betMarkets = matchup.bookmakers[unibetIndex].markets; /* Shorthand */
    let indexSpread = betMarkets.findIndex(item => item.key === 'spreads');
    let indexTotal = betMarkets.findIndex(item => item.key === 'totals');
    let indexMoneyline = betMarkets.findIndex(item => item.key === 'h2h');

/* Point Spreads */
    let awayTeam = matchup.away_team;
    let homeTeam = matchup.home_team;
    if (indexSpread >= 0) spreadExists = true;
    if (indexSpread < 0) indexSpread = indexMoneyline;
    if (indexSpread < 0) {
        indexSpread = indexTotal;
        awayTeam = "Over";
        homeTeam = "Under";
    }
    
    let awayTeamImageName = awayTeam.split(" ").join("-");
    let indexSpreadAwayTeam = betMarkets[indexSpread].outcomes.findIndex(item => item.name === awayTeam)
    let spreadPointAway = betMarkets[indexSpread].outcomes[indexSpreadAwayTeam].point;
    if (spreadPointAway > 0)
        spreadPointAway = `+${spreadPointAway}`;
    let spreadPriceAway = betMarkets[indexSpread].outcomes[indexSpreadAwayTeam].price;

    console.log(awayTeamImageName);
    
    let homeTeamImageName = homeTeam.split(" ").join("-");
    let indexSpreadHomeTeam = betMarkets[indexSpread].outcomes.findIndex(item => item.name === homeTeam);
    let spreadPointHome = betMarkets[indexSpread].outcomes[indexSpreadHomeTeam].point;
    if (spreadPointHome > 0)
        spreadPointHome = `+${spreadPointHome}`;
    let spreadPriceHome = betMarkets[indexSpread].outcomes[indexSpreadHomeTeam].price;

/* Totals */
let over = 'Over';
let under = 'Under';
    if (indexTotal >= 0) totalExists = true;
    if (indexTotal < 0) {
        indexTotal = indexMoneyline;
        over = matchup.away_team;
        under = matchup.away_team;
    }
    if (indexTotal < 0) indexTotal = indexSpread;

    let indexTotalOver = betMarkets[indexTotal].outcomes.findIndex(item => item.name === over);
    let indexTotalUnder = betMarkets[indexTotal].outcomes.findIndex(item => item.name === under);
    let totalPoint = betMarkets[indexTotal].outcomes[indexTotalOver].point;
    let totalPriceOver = betMarkets[indexTotal].outcomes[indexTotalOver].price;
    if (totalPriceOver > 0)
        totalPriceOver = `+${totalPriceOver}`;
    let totalPriceUnder = betMarkets[indexTotal].outcomes[indexTotalUnder].price;
    if (totalPriceUnder > 0)
        totalPriceUnder = `+${totalPriceUnder}`;

/* Moneyline */
    if (indexMoneyline >= 0) moneylineExists = true;
    if (indexMoneyline < 0) indexMoneyline = indexSpread;
    if (indexMoneyline < 0) indexMoneyline = indexTotal;

    let indexMoneylineAway = betMarkets[indexMoneyline].outcomes.findIndex(item => item.name === awayTeam);
    let moneylinePriceAway = betMarkets[indexMoneyline].outcomes[indexMoneylineAway].price;
    if (moneylinePriceAway > 0)
        moneylinePriceAway = `+${moneylinePriceAway}`;
    
    let indexMoneylineHome = betMarkets[indexMoneyline].outcomes.findIndex(item => item.name === homeTeam)
    let moneylinePriceHome = betMarkets[indexMoneyline].outcomes[indexMoneylineHome].price;
    if (moneylinePriceHome > 0)
        moneylinePriceHome = `+${moneylinePriceHome}`;

    /* Date and Time */
    let date = new Date(matchup.commence_time).toLocaleString('en-US').split(":00 ").join("").split(",").join("");
    let dateToCompare = date.split(" ")
    let currentDate = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    if (dateToCompare[0] === currentDate)
        date = `Today ${dateToCompare[1]}`;
    console.log(currentDate + " hi");

    return (
        <div className="box">
            <div className="box__team box__away">
                <img className="team-logo" src={require(`../images/${matchup.sport_title.toLowerCase()}/${awayTeamImageName}.png`)}></img>
                <p className="box__team-name">{awayTeam}</p>
                <div className="box__lines">
                    <div className="line line__spread">
                        {spreadExists ? <p className="line__spread-point">{spreadPointAway}</p> : <p className="line__spread-point"></p>}
                        {spreadExists ? <p className="price line__spread-price">{spreadPriceAway}</p> : <p className="line__spread-price"></p>}
                    </div>
                    <div className="line line__total">
                        {totalExists ? <p className="line__total-point">{`O ${totalPoint}`}</p> : <p className="line__total-point"></p>}  
                        {totalExists ? <p className="price line__total-price">{totalPriceOver}</p> : <p className="line__total-price"></p>}
                    </div>
                    {moneylineExists ? <p className="price line line__moneyline">{moneylinePriceAway}</p> : <p className="line line__moneyline"></p>}
                    
                </div>
            </div>
            <p className="box__at-symbol">@--</p>
            <div className="box__team box__home">
                <img className="team-logo" src={require(`../images/${matchup.sport_title.toLowerCase()}/${homeTeamImageName}.png`)}></img>
                <p className="box__team-name">{homeTeam}</p>
                <div className="box__lines">
                    <div className="line line__spread">
                        {spreadExists ? <p className="line__spread-point">{spreadPointHome}</p> : <p className="line__spread-point"></p>}
                        {spreadExists ? <p className="price line__spread-price">{spreadPriceHome}</p> : <p className="line__spread-price"></p>}
                    </div>
                    <div className="line line__total">
                        {totalExists ? <p className="line__total-point">{`U ${totalPoint}`}</p> : <p className="line__total-point"></p>}  
                        {totalExists ? <p className="price line__total-price">{totalPriceUnder}</p> : <p className="line__total-price"></p>}
                    </div>
                    {moneylineExists ? <p className="price line line__moneyline">{moneylinePriceHome}</p> : <p className="line line__moneyline"></p>}
                </div>
            </div>
            <p className="date">{date}</p>
        </div>
    )
}
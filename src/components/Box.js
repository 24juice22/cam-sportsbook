import React from "react"

export default function Box({matchup}) {
    let awayTeam = matchup.away_team;
    let homeTeam = matchup.home_team;
    let index = matchup.bookmakers.findIndex(item => item.key === 'unibet');

    return (
        <div className="box">
            <div className="box__away">
                <p>{awayTeam}</p>
                <div className="box__lines">
                    <p className="lines__spread">{matchup.bookmakers[index].markets[1].outcomes[0].point}</p>
                    <p className="lines__total">{matchup.bookmakers[index].markets[2].outcomes[0].point}</p>
                    <p className="lines__moneyline">{matchup.bookmakers[index].markets[0].outcomes[0].price}</p>
                </div>
            </div>
            <div className="box__home">
                <p>{homeTeam}</p>
                <div className="box__lines">
                    <p className="lines__spread">{matchup.bookmakers[index].markets[1].outcomes[1].point}</p>
                    <p className="lines__total">{matchup.bookmakers[index].markets[2].outcomes[1].point}</p>
                    <p className="lines__moneyline">{matchup.bookmakers[index].markets[0].outcomes[1].price}</p>
                </div>
            </div>
        </div>
    )
}
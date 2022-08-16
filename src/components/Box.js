import React from "react"

export default function Box({matchup}) {
    let awayTeam = matchup.away_team;
    let homeTeam = matchup.home_team;
    let index = matchup.bookmakers.findIndex(item => item.key === 'unibet');

    return (
        <div className="box">
            <div className="box__team box__away">
                <p className="box__team-name">{awayTeam}</p>
                <div className="box__lines">
                    <p className="line line__spread">{matchup.bookmakers[index].markets[1].outcomes[0].point}</p>
                    <p className="line line__total">{matchup.bookmakers[index].markets[2].outcomes[0].point}</p>
                    <p className="line line__moneyline">{matchup.bookmakers[index].markets[0].outcomes[0].price}</p>
                </div>
            </div>
            <div className="box__team box__home">
                <p className="box__team-name">{homeTeam}</p>
                <div className="box__lines">
                    <p className="line line__spread">{matchup.bookmakers[index].markets[1].outcomes[1].point}</p>
                    <p className="line line__total">{matchup.bookmakers[index].markets[2].outcomes[1].point}</p>
                    <p className="line line__moneyline">{matchup.bookmakers[index].markets[0].outcomes[1].price}</p>
                </div>
            </div>
        </div>
    )
}
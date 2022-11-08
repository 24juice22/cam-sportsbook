import React, { useEffect, useContext } from "react"
import Lines from "./Lines"
import { SportsbookContext } from "../contexts/SportsbookContexts"


function BoxTeam({team, teamImageName, matchup, totalTeam, awayTeam, homeTeam}) {
    const { betbarActive, setBetbarActive, betslipRemoved } = useContext(SportsbookContext)

    let unibetIndex = matchup.bookmakers.findIndex(item => item.key === 'unibet');
    if (unibetIndex < 0) unibetIndex = 0;
    let betMarkets = matchup.bookmakers[unibetIndex].markets; 
    let indexSpread = betMarkets.findIndex(item => item.key === 'spreads');
    let indexTotal = betMarkets.findIndex(item => item.key === 'totals');
    let indexMoneyline = betMarkets.findIndex(item => item.key === 'h2h');
    
    const [bettingLines, setBettingLines] = React.useState(allNewLines())
    
    function lineClicked(id, point, price, team, indexType, matchupInfo) {
        setBettingLines(oldLines => oldLines.map(line => {
            return line.id === id ?
                {...line, isClicked: !line.isClicked} :
                line
        }))
        setBetbarActive(prevValues => {
            if (prevValues.length) {
                let filteredBets = prevValues.filter(value => value.id !== id)
                if (filteredBets.length < prevValues.length) return filteredBets;
            }
            return [...prevValues, {id: id, point: point, price: price, team: team, indexType: indexType, matchupInfo: matchupInfo, matchup: matchup}]
        })
    }

    useEffect(() => {
        if (betslipRemoved.count > 0) {
            setBettingLines(oldLines => oldLines.map(line => {
                return betslipRemoved.id.includes(line.id) ?
                    {...line, isClicked: false} :
                    line
            })) 
        }
    }, [betslipRemoved])

    function allNewLines() {
        let betID = betbarActive.map(item => item.id)
        const newLines = [   
            {
                index: indexSpread,
                indexType: "Point Spread",
                team: team,
                matchupInfo: `${awayTeam} @ ${homeTeam}`,
                isClicked:  betID.includes(`spread-${team}`) ? true : false,
                id: `spread-${team}`
            },
            {
                index: indexTotal,
                indexType: "Total",
                team: totalTeam,
                matchupInfo: `${awayTeam} @ ${homeTeam}`,
                isClicked: betID.includes(`total-${team}`) ? true : false,
                id: `total-${team}`
            },
            {
                index: indexMoneyline,
                indexType: "Moneyline",
                team: team,
                matchupInfo: `${awayTeam} @ ${homeTeam}`,
                isClicked: betID.includes(`moneyline-${team}`) ? true : false,
                id: `moneyline-${team}`
            }
        ];
        return newLines
    }

    const lineElements = bettingLines.map(line => (
        <Lines 
            key={line.id}
            index={line.index}
            isClicked={line.isClicked}
            betMarkets={betMarkets}
            team={line.team}
            matchupInfo={line.matchupInfo}
            id={line.id}
            lineClicked={lineClicked}
            indexType={line.indexType}
            matchup={matchup}
        />
    ))


    return (
        <div className="box__team">
            {(matchup.sport_title !== 'NCAAF' && matchup.sport_title !== 'NCAAB') && <img className="team-logo" src={require(`../images/${matchup.sport_title.toLowerCase()}/${teamImageName}.png`)} alt={`${teamImageName} Logo`}></img>}
            <p className="box__team-name">{team}</p>
            <div className="box__lines">
                {lineElements}
            </div>
        </div> 
    )
}

export default BoxTeam;
import React, { useContext } from "react"
import Lines from "./Lines"
import { SportsbookContext } from "../contexts/SportsbookContexts"


function BoxTeam({team, teamImageName, matchup, totalTeam}) {
    const {setBetbarActive} = useContext(SportsbookContext)

    let unibetIndex = matchup.bookmakers.findIndex(item => item.key === 'unibet');
    if (unibetIndex < 0) unibetIndex = 0;
    let betMarkets = matchup.bookmakers[unibetIndex].markets; /* Shorthand */
    let indexSpread = betMarkets.findIndex(item => item.key === 'spreads');
    let indexTotal = betMarkets.findIndex(item => item.key === 'totals');
    let indexMoneyline = betMarkets.findIndex(item => item.key === 'h2h');
    
    const [bettingLines, setBettingLines] = React.useState(allNewLines())
    
    function wasClicked(id, point, price) {
        setBettingLines(oldLines => oldLines.map(line => {
            return line.id === id ?
                {...line, isClicked: !line.isClicked} :
                line
        }))
        setBetbarActive(prevValues => {
            if (prevValues.length) {
                let something = prevValues.filter(value => value.id !== id)
                if (something.length < prevValues.length) return something
            }
            return [...prevValues, {id: id, point: point, price: price}]
        })
    }

    function allNewLines() {
        const newLines = [   
            {
                index: indexSpread,
                team: team,
                isClicked: false,
                id: `spread-${team}`
            },
            {
                index: indexTotal,
                team: totalTeam,
                isClicked: false,
                id: `total-${team}`
            },
            {
                index: indexMoneyline,
                team: team,
                isClicked: false,
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
            id={line.id}
            wasClicked={wasClicked}
        />
    ))


    return (
        <div className="box__team">
            {matchup.sport_title !== 'NCAAF' ? <img className="team-logo" src={require(`../images/${matchup.sport_title.toLowerCase()}/${teamImageName}.png`)}></img> : <img className="team-logo" src=""></img>}
            <p className="box__team-name">{team}</p>
            <div className="box__lines">
                {lineElements}
            </div>
        </div> 
    )
}

export default BoxTeam;
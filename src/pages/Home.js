import React from "react" 
import Box from "../components/Box"


function Home({games, sport}) {
    const boxElements = games.map(matchup => <Box matchup={matchup} key={matchup.id}/>);
    
    return (
        <div>
            <h1 className="odds__title">{`${sport} Odds`}</h1>
            <ul className="container--wide list line-descriptions">
                <li className="line-descriptions__item">Spread</li>
                <li className="line-descriptions__item">Total</li>
                <li className="line-descriptions__item">Money</li>
            </ul>
            {boxElements}
        </ div>
    )
}  


export default Home;
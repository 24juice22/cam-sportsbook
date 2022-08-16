import React from "react"
import ArizonaDiamondbacks from "../images/mlb/Arizona-Diamondbacks.png"
import AtlantaBraves from "../images/mlb/Atlanta-Braves.png"
import BaltimoreOrioles from "../images/mlb/Baltimore-Orioles.png"
import BostonRedSox from "../images/mlb/Boston-Red-Sox.png"
import ChicagoCubs from "../images/mlb/Chicago-Cubs.png"
import ChicagoWhiteSox from "../images/mlb/Chicago-White-Sox.png"
import CincinnatiReds from "../images/mlb/Cincinnati-Reds.png"
import ClevelandGuardians from "../images/mlb/Cleveland-Guardians.png"
import ColoradoRockies from "../images/mlb/Colorado-Rockies.png"
import DetroitTigers from "../images/mlb/Detroit-Tigers.png"
import HoustonAstros from "../images/mlb/Houston-Astros.png"
import KansasCityRoyals from "../images/mlb/Kansas-City-Royals.png"
import LosAngelesAngels from "../images/mlb/Los-Angeles-Angels.png"
import MiamiMarlins from "../images/mlb/Miami-Marlins.png"
import MilwaukeeBrewers from "../images/mlb/Milwaukee-Brewers.png"
import MinnesotaTwins from "../images/mlb/Minnesota-Twins.png"
import NewYorkMets from "../images/mlb/New-York-Mets.png"
import NewYorkYankees from "../images/mlb/New-York-Yankees.png"
import OaklandAthletics from "../images/mlb/Oakland-Athletics.png"
import PhiladelphiaPhillies from "../images/mlb/Philadelphia-Phillies.png"
import PittsburghPirates from "../images/mlb/Pittsburgh-Pirates.png"
import SanDiegoPadres from "../images/mlb/San-Diego-Padres.png"
import SanFranciscoGiants from "../images/mlb/San-Francisco-Giants.png"
import SeattleMariners from "../images/mlb/Seattle-Mariners.png"
import StLouisCardinals from "../images/mlb/St.-Louis-Cardinals.png"
import TampaBayRays from "../images/mlb/Tampa-Bay-Rays.png"
import TexasRangers from "../images/mlb/Texas-Rangers.png"
import TorontoBlueJays from "../images/mlb/Toronto-Blue-Jays.png"
import WashingtonNationals from "../images/mlb/Washington-Nationals.png"


export default function Box({matchup}) {
    let awayTeam = matchup.away_team;
    let awayTeamImageName = awayTeam.split(" ").join("-");
    console.log(awayTeamImageName);
    let homeTeam = matchup.home_team;
    let homeTeamImageName = homeTeam.split(" ").join("-");
    let index = matchup.bookmakers.findIndex(item => item.key === 'unibet');

    return (
        <div className="box">
            <div className="box__team box__away">
                <img className="team-logo" src={require(`../images/mlb/${awayTeamImageName}.png`)}></img>
                <p className="box__team-name">{awayTeam}</p>
                <div className="box__lines">
                    <p className="line line__spread">{matchup.bookmakers[index].markets[1].outcomes[0].point}</p>
                    <p className="line line__total">{matchup.bookmakers[index].markets[2].outcomes[0].point}</p>
                    <p className="line line__moneyline">{matchup.bookmakers[index].markets[0].outcomes[0].price}</p>
                </div>
            </div>
            <div className="box__team box__home">
                <img className="team-logo" src={require(`../images/mlb/${homeTeamImageName}.png`)}></img>
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
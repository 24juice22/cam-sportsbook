import React from "react" 
import Layout from "./Layout"
import PromoSlider from "../components/PromoSlider"
import Nba from "./Nba";

function Home({sport, setSport}) {
    const homeClassName = "homepage";

    return (
        <>
            <PromoSlider />
            <Layout sport={sport} />
            <Nba setSport={setSport} homeClassName={homeClassName}/>
        </>
    )
}  


export default Home;
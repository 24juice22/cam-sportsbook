import React from "react" 
import Layout from "./Layout"
import PromoSlider from "../components/PromoSlider"
import Nfl from "./Nfl";

function Home({sport, setSport}) {
    const homeClassName = "homepage";

    return (
        <>
            <PromoSlider />
            <Layout sport={sport} />
            <Nfl setSport={setSport} homeClassName={homeClassName}/>
        </>
    )
}  


export default Home;
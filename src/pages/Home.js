import React from "react" 
import Layout from "./Layout"
import Mlb from "./Mlb"
import PromoSlider from "../components/PromoSlider"

function Home({sport, setSport}) {
    const homeClassName = "homepage";

    return (
        <>
            <PromoSlider />
            <Layout sport={sport} />
            <Mlb setSport={setSport} homeClassName={homeClassName}/>
        </>
    )
}  


export default Home;
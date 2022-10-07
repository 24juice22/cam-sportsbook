import React from "react" 
import Layout from "./Layout"
import Mlb from "./Mlb"
import PromoSlider from "../components/PromoSlider"

function Home({sport, setSport}) {
    setSport("MLB");

    const homeClassName = "homepage";

    return (
        <>
            <PromoSlider />
            <Layout sport={sport} />
            <Mlb homeClassName={homeClassName}/>
        </>
    )
}  


export default Home;
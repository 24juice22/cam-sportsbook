import React from "react" 
import Layout from "./Layout"
import Mlb from "./Mlb"

function Home({sport}) {
    return (
        <>
            <div className="thing flex">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Layout sport={sport}/>
            <Mlb />
        </>
    )
}  


export default Home;
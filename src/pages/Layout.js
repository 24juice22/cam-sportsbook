import React from "react" 
import { Outlet } from "react-router-dom"

function Layout({sport}) {
    return (
        <div className="body">
            {sport && <h1 className="odds__title">{`${sport} Odds`}</h1>}
            <ul className="container--wide list line-descriptions">
                <li className="line-descriptions__item">Spread</li>
                <li className="line-descriptions__item">Total</li>
                <li className="line-descriptions__item">Money</li>
            </ul>
            <Outlet />
        </div>
    )
}  


export default Layout;
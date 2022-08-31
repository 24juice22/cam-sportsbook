import React from "react"

function BetConfirmBox({item}) {
    console.log(item)
    return (
        <div>
            <p>{item.id}</p>
            <p>{item.betAmount}</p>
            <p>{item.winAmount}</p>
        </div>
    )
}

export default BetConfirmBox;
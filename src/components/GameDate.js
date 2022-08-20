import React from "react"

function GameDate({matchup}) {
    let date = new Date(matchup.commence_time).toLocaleString('en-US').split(":00 ").join("").split(",").join("");
    let dateToCompare = date.split(" ")
    let currentDate = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    if (dateToCompare[0] === currentDate)
        date = `Today ${dateToCompare[1]}`;

    return (
        <p className="date">{date}</p>
    )

}

export default GameDate;
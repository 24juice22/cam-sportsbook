import React from "react"

function GameDate({matchup}) {
    let date = new Date(matchup.commence_time).toLocaleString('en-US').split("");
    date.splice(date.length - 6, 4);
    let formattedDate = date.join("").split(",").join("");
    let dateToCompare = formattedDate.split(" ");
    let currentDate = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    if (dateToCompare[0] === currentDate)
        formattedDate = `Today ${dateToCompare[1]}`;

    return (
        <p className="date">{formattedDate}</p>
    )

}

export default GameDate;
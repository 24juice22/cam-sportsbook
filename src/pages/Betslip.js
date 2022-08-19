import React from "react"

function Betslip() {
    let line = document.querySelectorAll(".line");
    for (let i = 0; i < line.length; i++) {
        line[i].addEventListener("click", () => {
            line[i].style.backgroundColor = "var(--color-secondary)";
        })
    }

    return (
        <h1>Betslip</h1>
    )
}

export default Betslip;
import React, { useState, useContext } from "react"
import { SportsbookContext } from "../contexts/SportsbookContexts"
import sports from "../images/promos/sports.png"
import money from "../images/promos/money.jpg"
import stadium from "../images/promos/stadium.jpg"

function PromoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { setJoinIsVisible, setPopup } = useContext(SportsbookContext);

    const slides = [
        {
            url: sports,
            id: "newCustomer", 
            title: "New Customer Promo", 
            description: "Sign Up Now and receive a RISK-FREE bet up to $500"
        },
        {
            url: money, 
            id: "refer",
            title: "Refer A Friend", 
            description: "And receive $50 on us"
        },
        {
            url: stadium, 
            id: "noSweat",
            title: "No Sweat Bet", 
            description: "All Customers Invited"
        },
    ];

    const dots = slides.map((slide, slideIndex) => {
        return <div 
            className="dot"
            key={slideIndex} 
            onClick={() => chooseSlide(slideIndex)}
            style = {currentIndex === slideIndex ? 
                {color: "var(--color-secondary)"} : 
                {color: "white"}
            }
        >
        ●   
        </div>
    })

    function chooseSlide(slideIndex) {
        setCurrentIndex(slideIndex);
    }

    function previousPromo() {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    function nextPromo() {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    function joinDisplay() {
        setJoinIsVisible(true);
        setPopup(true);
    }

    const backgroundImage = {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    return (
        <div className="slider">
            <div>
                <div onClick={previousPromo} className="slider__arrow slider__arrow--left">
                    <i class="fa-solid fa-angle-left"></i>
                </div>
                <div onClick={nextPromo} className="slider__arrow slider__arrow--right">
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <div style={backgroundImage}></div>
            <h1 className={`slider__title slider__title--${slides[currentIndex].id}`}>{slides[currentIndex].title}</h1> 
            <p className={`slider__tagline slider__tagline--${slides[currentIndex].id}`}>{slides[currentIndex].description}</p>
            {currentIndex === 0 && <button className="btn slider__btn" onClick={joinDisplay}>JOIN NOW</button>}
            <div className="slider__dots">
                {dots}
            </div>  
        </div>
    )
}

export default PromoSlider;
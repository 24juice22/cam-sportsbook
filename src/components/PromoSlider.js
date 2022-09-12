import React from "react"

function PromoSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const slides = [
        {
            url: "dfvdfvdfvfdv", 
            title: "New Customer Promo", 
            description: "Sign Up Now and receive a RISK-FREE bet up to $500"
        },
        {
            url: "dfvdfvdfvfdv", 
            title: "Refer A Friend", 
            description: "Refer a friend and receive $50"
        },
        {
            url: "dfvdfvdfvfdv", 
            title: "No Sweat Bet", 
            description: "All Customers Invited"
        },
    ]

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

    return (
        <div className="thing">
            <div>
                <div onClick={previousPromo}>
                    <i class="fa-solid fa-angle-left"></i>
                </div>
                <div onClick={nextPromo}>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
             <h1>{slides[currentIndex].title}</h1> 
             <p>{slides[currentIndex].description}</p>  
        </div>
    )
}

export default PromoSlider;
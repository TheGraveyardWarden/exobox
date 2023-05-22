import React, { useEffect } from "react";

function Carousel({margin, element, width, size, cKey}) {
    useEffect(() => {
        let carousel = document.querySelectorAll('.carousel')[cKey];
        let leftArrow = document.querySelectorAll('.arrow_left')[cKey];
        let rightArrow = document.querySelectorAll('.arrow_right')[cKey];

        let limitR = (margin + width) * (size - 2) * -1;
        let x = 0;

        rightArrow.addEventListener('click', () => {
            if(x < limitR) return;
            x -= width+margin;
            carousel.style.transform = `translate(${x}px, 0)`;
        })

        leftArrow.addEventListener('click', () => {
            if(x > 0) return;
            x += width+margin;
            carousel.style.transform = `translate(${x}px, 0)`;
        })
    }, [margin, width, size, cKey])

    return <div className="carousel_con">
        <div className="carousel_arrow arrow_left">
            
            <svg width="15" height="29" viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3584 1L3.03091 10.6866C2.49619 11.1677 2.06868 11.7558 1.77599 12.4129C1.4833 13.0699 1.33208 13.7807 1.33208 14.5C1.33208 15.2193 1.4833 15.9309 1.77599 16.588C2.06868 17.245 2.49619 17.8331 3.03091 18.3142L13.3584 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </div>
        <div className="carousel_arrow arrow_right">

            <svg className="rotate180" width="15" height="29" viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3584 1L3.03091 10.6866C2.49619 11.1677 2.06868 11.7558 1.77599 12.4129C1.4833 13.0699 1.33208 13.7807 1.33208 14.5C1.33208 15.2193 1.4833 15.9309 1.77599 16.588C2.06868 17.245 2.49619 17.8331 3.03091 18.3142L13.3584 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </div>
        <div className="carousel">
            {element}
        </div>
    </div>
}

export default Carousel;
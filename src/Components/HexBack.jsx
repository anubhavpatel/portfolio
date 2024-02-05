import React, { useEffect } from 'react'
import '../Style/HexBack.css'
const HexBack = () => {
    useEffect(() => {
        const curser = document.querySelector(".curser");

        document.addEventListener('mousemove', function (e) {
            let X = e.clientX;
            let Y = e.clientY;

            if (curser) { // Check if curser element exists
                curser.style.left = X + "px";
                curser.style.top = Y + "px";
            }
        });

        return () => {
            document.removeEventListener('mousemove', function (e) {
                // Remove the event listener when the component unmounts
            });
        };
    }, []);
    return (
        <div class="container">

            <div class="curser"></div>
            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>

            </div>
            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>
            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>
            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>
            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>
            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>
            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>

            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>
            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>
            <div class="row">
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
                <div class="hexagon"></div>
            </div>


        </div>

    )
}

export default HexBack
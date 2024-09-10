"use client";
import { useEffect, useRef } from 'react';
import style from "./RollingText.module.css"; // Import CSS module for scoped styling
import gsap from 'gsap'; // Import GSAP for animations

const RollingText = () => {

    // Create an array of refs to store references to multiple DOM elements (each "cyberchord" div)
    const leftToRight = useRef([]);
    const rightToLeft = useRef([]);

    // This useEffect hook runs after the component mounts

    useEffect(() => {

        // Apply a GSAP animation to all elements in the textRefs array (multiple elements)
        gsap.to(leftToRight.current, {
            x: window.innerWidth,
            duration: 8,
            repeat: -1,
            yoyo: false
        });
       

         // Animate elements moving from right to left
         gsap.fromTo(
            rightToLeft.current,
            { x: window.innerWidth }, // Start from the right end of the viewport
            { x: -window.innerWidth, // Animate to the left end of the viewport
              duration: 9,
              repeat: -1,
              yoyo: false }
        );

    }, []); // Empty dependency array ensures this effect runs only once after the component is mounted

    // Function to add each div element to the leftToRight array
    // This ensures we can target multiple elements with the same animation
    const addToLeftToRight = (el) => {
        // Check if the element exists and isn't already in the array
        if (el && !leftToRight.current.includes(el)) {
            leftToRight.current.push(el); // Add the element to the array of refs
        }
    };

    const addToRightToLeft = (el) => {
        // Check if the element exists and isn't already in the array
        if (el && ! rightToLeft.current.includes(el)) {
            rightToLeft.current.push(el); // Add the element to the array of refs
        }
    };

    return (
        <>
            {/* Each div gets a ref that adds it to the textRefs array */}
            <div ref={addToLeftToRight} className={style.rollingText}>cyberchord cyberchord cyberchord cyberchord</div>
            <div ref={addToRightToLeft} className={style.rollingText}>cyberchord cyberchord cyberchord cyberchord</div>
            <div ref={addToLeftToRight} className={style.rollingText}>cyberchord cyberchord cyberchord cyberchord </div>
            <div ref={addToRightToLeft} className={style.rollingText}>cyberchord cyberchord cyberchord cyberchord</div>

        </>
    );
}

export default RollingText;

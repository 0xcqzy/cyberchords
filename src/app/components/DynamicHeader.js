"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function DynamicHeader({ text, color = 'var(--brown)' }) {
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(0); // Initialize font size to 0
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  // Function to resize text based on parent width
  const resizeText = () => {
    const textElement = textRef.current;
    const parent = textElement.parentElement;
    const parentWidth = parent.offsetWidth - parseFloat(getComputedStyle(parent).paddingLeft) - parseFloat(getComputedStyle(parent).paddingRight); // Account for left and right padding

    let fontSize = 200; // Start with a large font size
    textElement.style.fontSize = `${fontSize}px`; // Initialize font size

    // Adjust font size to fit text within the parent width
    while (textElement.scrollWidth > parentWidth && fontSize > 0) {
      fontSize -= 1; // Decrease font size by 1 pixel until it fits
      textElement.style.fontSize = `${fontSize}px`;
    }

    // Ensure that short words fill the parent width
    if (textElement.scrollWidth < parentWidth) {
      while (textElement.scrollWidth < parentWidth && fontSize < 200) {
        fontSize += 1; // Increase font size by 1 pixel until it fills the space
        textElement.style.fontSize = `${fontSize}px`;
      }
    }

    setIsLoading(false); // Set loading to false once resizing is complete
  };

  useEffect(() => {
    resizeText(); // Call the resize function on mount
    window.addEventListener('resize', resizeText); // Update on window resize

    return () => {
      window.removeEventListener('resize', resizeText); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        display: 'block',
        whiteSpace: 'nowrap',
        width: '100%',
        fontSize: 'inherit', // Allow dynamic font sizing
        color: color, // Set your desired color
        fontFamily: 'var(--primary-font)', // Set your desired font family
        textAlign: 'center',
        overflow: 'hidden', // Hide overflow
        display: isLoading ? 'none' : 'block', // Hide text from layout until resizing is complete
      }}
    >
      {text}
    </div>
  );
}

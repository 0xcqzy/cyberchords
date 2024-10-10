"use client";

import React, { useEffect, useRef } from "react";

const DynamicHeader = ({ text ,color}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  let resizeObserver = useRef(null); // Using ResizeObserver for more accurate resize detection

  const scaleText = () => {
    if (containerRef.current && textRef.current) {
      const scalable = textRef.current;
      const scalableContainer = containerRef.current;

      // Reset scaling to 1 for accurate width measurement
      scalable.style.transform = "scale(1)";

      // Get the container and text widths
      const scalableContainerWidth = scalableContainer.offsetWidth;
      const scalableWidth = scalable.offsetWidth;

      // Scale the text to fit the container width
      const scaleFactor = scalableContainerWidth / scalableWidth;
      scalable.style.transform = `scale(${scaleFactor})`;

      // Adjust the container height based on the scaled text height
      scalableContainer.style.height = `${scalable.getBoundingClientRect().height}px`;
    }
  };

  useEffect(() => {
    // Initial scaling when the component mounts
    scaleText();

    // ResizeObserver to detect any changes to the size of the container
    resizeObserver.current = new ResizeObserver(() => {
      // Use requestAnimationFrame to handle smooth scaling during resize
      requestAnimationFrame(scaleText);
    });

    if (containerRef.current) {
      resizeObserver.current.observe(containerRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (resizeObserver.current && containerRef.current) {
        resizeObserver.current.unobserve(containerRef.current);
      }
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      style={{
        textAlign: "center",
        width: "100%",
      }}
      className="scale__container--js"
    >
      <h1
        ref={textRef}
        className="scale--js"
        style={{
          display: "inline-block",
          transformOrigin: "50% 0",
          WebkitFontSmoothing: "antialiased",
          transform: "translate3d(0, 0, 0)",
          fontFamily: "var(--primary-font)",
          lineHeight: 0.9,
          color:color,
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default DynamicHeader;

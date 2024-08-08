"use client";
import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Nav from './components/Nav';
import gsap from 'gsap';
import Image from 'next/image';

// Custom ImageKit loader function
const imageKitLoader = ({ src, width, quality }) => {
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  var urlEndpoint = "https://ik.imagekit.io/0xcqzy";
  if (urlEndpoint[urlEndpoint.length - 1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/tr:${paramsString}/${src}`;
};

// Array of image paths (not full URLs)
const imageUrls = [
  "Cyberchords/3.jpg",
  "Cyberchords/2.jpg"
  // Add more image paths here as needed
];

const Home = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1.5 }
    );
    gsap.fromTo(aboutRef.current, { opacity: 0 }, { opacity: 1, delay: 1.5 });
  }, []);

  return (
    <>
      <Nav />
      <header ref={headerRef} className={styles.header}>cyberchords</header>
      <div ref={aboutRef} className={styles.about}>
        Cyberchords is all about that electric connection between the digital world and nature, blending a techy, futuristic feel with raw, natural beauty. Their art feels like a glitchy dream, where sleek sophistication meets a wild, unpolished edge. With a style that feels like a digital meditation, they&rsquo;re in sync, exploring the spaces where reality blurs into a digital daydream. Cyberchords pulls you into a world that&rsquo;s both real and surreal. It&rsquo;s a call to live a life full of tech love and natural respect.
      </div>

      <div className={styles.imageWrapperContainer}>
        {imageUrls.map((url, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
            loader={imageKitLoader}
            src={url}
            alt={`Image ${index + 1}`}
            layout="fill" // Fills the container while maintaining aspect ratio
            objectFit="contain" // Ensures the image covers the container
          />
          </div>
        ))}
      </div>

    </>
  );
};

export default Home;
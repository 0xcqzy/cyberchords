"use client";
import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Nav from './components/Nav';
import gsap from 'gsap';
import Image from 'next/image';

const imageUrls = [
  "https://ik.imagekit.io/0xcqzy/cyberchords/polarbear.jpg?updatedAt=1723233021899",
  "https://ik.imagekit.io/0xcqzy/cyberchords/Adolescence%20is%20a%20particular....jpg?updatedAt=1723261667112",
  "https://ik.imagekit.io/0xcqzy/cyberchords/monochrome%20surfer%20on%20wave.jpg?updatedAt=1723262042339",
  "https://ik.imagekit.io/0xcqzy/cyberchords/It%20has%20always%20been%20a%20dream%20....jpg?updatedAt=1723261774025",
  "https://ik.imagekit.io/0xcqzy/cyberchords/My%20name%20is%20Tanya,%20I%20am%20Ukra....jpg?updatedAt=1723287722312",
  "https://ik.imagekit.io/0xcqzy/cyberchords/birds%20flying%20over%20ice%20and%20s....jpg?updatedAt=1723287852288",

  // Add more full URLs here as needed

];



const Home = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const imageWrapperContainerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1.5 }
    );

    gsap.fromTo(aboutRef.current, { opacity: 0 }, { opacity: 1, delay: 1.5 });

    gsap.fromTo(imageWrapperContainerRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2, delay: 1 });

  }, []);

  return (
    <>
      <Nav />
      <div className={styles.contentContainer}>
        <header ref={headerRef} className={styles.header}>cyberchords</header>
        <div ref={aboutRef} className={styles.about}>
          Cyberchords is all about that electric connection between the digital world and nature, blending a techy, futuristic feel with raw, natural beauty. Their art feels like a glitchy dream, where sleek sophistication meets a wild, unpolished edge. With a style that feels like a digital meditation, they&rsquo;re in sync, exploring the spaces where reality blurs into a digital daydream. Cyberchords pulls you into a world that&rsquo;s both real and surreal. It&rsquo;s a call to live a life full of love and respect.
        </div>

        <div ref={imageWrapperContainerRef} className={styles.imageWrapperContainer}>
          {imageUrls.map((url, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image
                src={url}
                alt={`Image ${index + 1}`}
                layout="fill" 
              />
            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default Home;
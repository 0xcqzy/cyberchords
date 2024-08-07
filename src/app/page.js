"use client";
import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Nav from './components/Nav';
import gsap from 'gsap';

const Home = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity:0 , y: -100,},{opacity:1,y:0,delay:0.5,duration:1.5,});
    gsap.fromTo(aboutRef.current, { opacity:0 },{opacity:1, duration:3,delay:1.5});
  }, []);

  /*note --
    GSAP timeline didn't work effectively here (as of today, 7/8/2024) with Next.js hence opted for basic gsap . all the tweens would run at the same time despite of aligning them with timeline . */

  return (
    <>
      <Nav />
      <header ref={headerRef} className={styles.header}>cyberchords</header>
      <div ref={aboutRef} className={styles.about}>
  Cyberchords is all about that electric connection between the digital world and nature, blending a techy, futuristic feel with raw, natural beauty. Their art feels like a glitchy dream, where sleek sophistication meets a wild, unpolished edge. With a style that feels like a digital meditation, they&rsquo;re in sync, exploring the spaces where reality blurs into a digital daydream. Cyberchords pulls you into a world that&rsquo;s both real and surreal. It&rsquo;s a call to live a life full of tech love and natural respect.
</div>

    </>
  );
};

export default Home;


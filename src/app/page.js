"use client";
import { useState, useEffect } from 'react';
import styles from './page.module.css'
import Nav from './components/Nav';
import Image from 'next/image';



const Home = () => {

    return (
        <>
            <Nav></Nav>
            <div className={styles.imageWrapper}>
                <Image
                    src="/1.jpg"
                    layout="fill"
                    className={styles.image} // Apply the CSS class for the image
                    alt="Description of the image" // Always provide alt text for accessibility
                />
            </div>


        </>

    )
}

export default Home;
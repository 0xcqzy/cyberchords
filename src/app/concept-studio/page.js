"use client";
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styles from "./page.module.css";
import Web3 from "../components/Web3";
import Direction from "../components/Direction";
import Licensing from "../components/Licensing";

const ConceptStudio = () => {
    const [activeSection, setActiveSection] = useState("web3");

    // Function to handle section change
    const handleClick = (section) => {
        setActiveSection(section);
    };


    return (
        <>
            <Nav />
            <div className={styles.mainContainer}>

                <div className={styles.threeSection} >
                    {/* "direction" section */}
                    <div
                        className={styles.primeText}
                        onClick={() => handleClick("direction")}
                        style={{ color: activeSection === "direction" ?"var(--yellow)" : "var(--gray)" }}
                    >
                        direction
                    </div>

                    {/* "web3" section */}
                    <div
                        className={styles.primeText}
                        onClick={() => handleClick("web3")}
                        style={{ color: activeSection === "web3" ?"var(--yellow)" : "var(--gray)" }}
                    >
                        web3
                    </div>

                    {/* "licensing" section */}
                    <div
                        className={styles.primeText}
                        onClick={() => handleClick("licensing")}
                        style={{ color: activeSection === "licensing" ?"var(--yellow)" : "var(--gray)" }}
                    >
                        licensing
                    </div>

                </div>

                {/* Conditional component rendering */}
                <div className={styles.componentContainer}>
                    {activeSection === "web3" && <Web3 />}
                    {activeSection === "direction" && <Direction />}
                    {activeSection === "licensing" && <Licensing />}
                </div>
            </div>
        </>
    );
};

export default ConceptStudio;

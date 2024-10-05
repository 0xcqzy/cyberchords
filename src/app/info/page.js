import Nav from "../components/Nav";
import styles from "./page.module.css";
import Image from "next/image";
import DynamicHeader from "../components/DynamicHeader";

const exhibitions = [
    { year: "2024", theme: "BURNING DESIRE", place: "ROME, ITALY" },
    { year: "2023", theme: "RENAISSANCE REBORN", place: "FLORENCE, ITALY" },
    { year: "2022", theme: "FUTURE VISION", place: "TOKYO, JAPAN" },
    { year: "2021", theme: "TIMELESS ECHOES", place: "PARIS, FRANCE" },
    { year: "2020", theme: "MODERN MYTHS", place: "BERLIN, GERMANY" },
    { year: "2019", theme: "URBAN TALES", place: "NEW YORK, USA" },
    { year: "2018", theme: "ANCIENT WHISPERS", place: "ATHENS, GREECE" },
    { year: "2017", theme: "COSMIC DREAMS", place: "LONDON, UK" },
    { year: "2016", theme: "MYSTIC JOURNEYS", place: "CAIRO, EGYPT" },
    { year: "2015", theme: "FROZEN MOMENTS", place: "MOSCOW, RUSSIA" },
    { year: "2014", theme: "WILD SERENITY", place: "SYDNEY, AUSTRALIA" },
    { year: "2013", theme: "EPHEMERAL BEAUTY", place: "BARCELONA, SPAIN" },
];


const awards = [
    { year: "2023", contest: "International Design Awards", result: "First Place" },
    { year: "2022", contest: "Global Art Competition", result: "Honorable Mention" },
    { year: "2021", contest: "Creative Excellence Awards", result: "Winner" },
    { year: "2020", contest: "World Photography Contest", result: "Finalist" },
    { year: "2019", contest: "Innovative Design Challenge", result: "Runner-Up" },
    { year: "2018", contest: "National Art Exhibition", result: "Best in Show" },
    { year: "2017", contest: "Visual Arts Awards", result: "Gold Medal" },
    { year: "2016", contest: "Contemporary Art Festival", result: "Grand Prize" },
];


const Info = () => {
    return (
        <>
            <Nav></Nav>
            <div className={styles.contentContainer}>
                <DynamicHeader text="cyberchords" color="var(--yellow)" />
                <div className={styles.secondaryText}>
                    Cyberchords is all about that electric connection between the digital world and nature, blending a techy, futuristic feel with raw, natural beauty. Their art feels like a glitchy dream, where sleek sophistication meets a wild, unpolished edge. With a style that feels like a digital meditation, they are in sync, exploring the spaces where reality blurs into a digital daydream. Cyberchords pulls you into a world that is both real and surreal. It is a call to live a life full of love and respect.
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="https://ik.imagekit.io/0xcqzy/cyberchords/glacier-cave-man-iceland.jpg?updatedAt=1725276252842"
                        layout="fill" alt="promotional picture"
                    />
                </div>

                <div className={styles.contact}>
                    contact
                    <div>cyberchords@gmail.com</div>
                    <div>+123 8x930M9320</div>
                    <div>+981 3i90232w37</div>
                    <div className={styles.rep} >represented by cyberchords studio since 2009</div>
                    <div>instagram</div>
                    <div>facebook</div>
                    <div>twitter</div>
                </div>
                <div className={styles.corp}>
                    <div className={styles.corpLink}>
                        <div>linkedIn</div>
                        <div>superrare</div>
                        <div>foundation</div>
                    </div>
                </div>

                <div className={styles.exhibition}>
                    <DynamicHeader text="exhibitions" color="var(--yellow)" />
                    {exhibitions.map((exhibition, index) => (
                        <div key={index}>
                            <div className={styles.row}>

                                <div className={styles.col1}>{exhibition.year}</div>
                                <div>
                                    <div className={styles.col2}>{exhibition.theme}</div>
                                    <div className={styles.col3}>{exhibition.place}</div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    ))}

                </div>

                <div className={styles.fullImg} >
                    <Image
                        src=" https://ik.imagekit.io/0xcqzy/cyberchords/man%20and%20woman%20walking%20on%20th....jpg?updatedAt=1725290539305"
                        layout="fill" alt="promotional picture"
                    />
                </div>

                <div>
                <DynamicHeader text="awards" color="white" />
                    {awards.map((awards, index) => (
                        <div key={index}>
                            <div className={styles.row}>
                                <div className={styles.col1}>{awards.year}</div>
                                <div>
                                    <div className={styles.col2}>{awards.contest}</div>
                                    <div className={styles.col3}>{awards.result}</div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    ))}

                </div>
                <footer>
                    <div className={styles.secondaryText}>all rights reserved</div>
                    <div className={styles.secondaryText}>short portfolio in pdf format</div>
                </footer>
            </div>


        </>
    )
}

export default Info;
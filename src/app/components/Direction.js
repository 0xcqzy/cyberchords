import style from "./Direction.module.css";
import React from 'react';
import ReactPlayer from 'react-player';
import RollingtText from "./rollingText";

const Direction = () => {
    return (
        <>
            <div className="style.main">
                <div className={style.secondaryText}>At cyberchords Studio, we dance between the worlds of art and tech, weaving dreams into reality. Through fluid collaboration with the unseen, we craft soulful experiences for brands, blending creativity with cutting-edge technology. From the whispers of neural networks to the magic of virtual spaces, we harness the power of innovation in its purest form. Our journey flows through the realms of art, science, and the human spirit, all while embracing the ethereal energy of growth and expansion.</div>
           


            <div className={style.videoWrapper}>
                <ReactPlayer
                    url="https://ik.imagekit.io/0xcqzy/cyberchords/5639717-uhd_4096_2160_25fps.mp4?updatedAt=1725911527016"
                    playing
                    muted
                    loop
                    width="100%"
                    height="100%" // Make ReactPlayer take up 100% of the wrapper's height
                />
            </div>

            <RollingtText></RollingtText>
            </div>
        </>
    )
}

export default Direction; 

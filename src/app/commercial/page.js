import Nav from "../components/Nav";
import Styles from "../commercial/page.module.css";
import Image from "next/image";

const campaign = [
    {
        name: "lake side",
        primaryImage: "https://ik.imagekit.io/0xcqzy/cyberchords/person%20riding%20on%20white%20moto....jpg?updatedAt=1725013920807 ",
        secondaryImage: "https://ik.imagekit.io/0xcqzy/cyberchords/At%20the%20foot%20of%20a%20mountain,_....jpg?updatedAt=1725013921054",
        type: "ad campaign",
        about: "creative vision for lake side",
    },

    {
        name: "oceanX coverstory",
        primaryImage: "https://ik.imagekit.io/0xcqzy/cyberchords/woman%20on%20body%20of%20water.jpg?updatedAt=1724936070726 ",
        secondaryImage: "https://ik.imagekit.io/0xcqzy/cyberchords/Instagram%20@Sotti.maldives.jpg?updatedAt=1724935952296",
        type: "ad campaign",
        about: "creative photoshoot",
    },

    {
        name: "swan lake",
        primaryImage: "https://ik.imagekit.io/0xcqzy/cyberchords/Dance%20of%20soul.jpg?updatedAt=1725014314891",
        secondaryImage: "https://ik.imagekit.io/0xcqzy/cyberchords/woman%20in%20white%20dress%20and%20bl....jpg?updatedAt=1725014758388",
        type: "collaboration",
        about: "creative vision for oceanX",
    },



]

const commercial = () => {
    return (
        <>
            <Nav></Nav>
            <main className={Styles.mainContainer}>
                <div className={Styles.secText}>Cyberchords is all about that electric connection between the digital world and nature, blending a techy, futuristic feel with raw, natural beauty.</div>
                <div className={Styles.heroText}>commercial</div>

                <div className={Styles.campaigns}>
                    {campaign.map((item, index) => (
                        <div key={index} className={Styles.campaignContainer}>
                            <div className={Styles.campaignLeft}>
                                <div className={Styles.primaryImageWrapper}>
                                    <Image
                                        src={item.primaryImage}
                                        layout="fill"
                                    />
                                </div>
                            </div>

                            <div className={Styles.campaignRight}>
                                <div className={Styles.secondaryImageWrapper}>
                                    <Image
                                        src={item.secondaryImage}
                                        layout="responsive"
                                        width={500} // Adjust according to your design needs
                                        height={500} // Adjust according to your design needs
                                        objectFit="cover"
                                        quality={100}
                                        alt= "campaign image"
                                    />
                                </div>

                                <div className={Styles.campaignDetails}>
                                    <div className={Styles.campaignName}>{item.name}</div>
                                    <div className={Styles.campaignType}>{item.type}</div>
                                    <div className={Styles.campaignAbout}>{item.about}</div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </main>

        </>
    )
}

export default commercial;
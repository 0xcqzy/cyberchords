import style from "./Licensing.module.css";
import Image from "next/image";

const Licensing = () => {
    return (
        <>
            <div className={style.main}>
                <div className={style.secondaryText}>All works by Cyberchords are available for licensing across various platforms, including online and printed media, album covers, advertising campaigns, and design projects. Whether you're looking to enhance your digital presence or elevate your brand through striking visuals, these pieces are suitable for use in websites, social media, publications, and more. Additionally, select artworks are available as limited edition prints for collectors. For inquiries about licensing or to purchase a print, please contact <span className={style.mail}>cyberchords@gmail.com</span>
                </div>


                <div className={style.imageWrapper}>
                    <Image
                        src="https://ik.imagekit.io/0xcqzy/cyberchords/Genius%20is%20one%20percent%20inspi....jpg?updatedAt=1725908211237"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

            </div>
        </>
    )
}

export default Licensing; 
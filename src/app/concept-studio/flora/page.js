import Image from "next/image";
import style from "./flora.module.css";

const imgUrl = [
    "https://ik.imagekit.io/0xcqzy/cyberchords/a%20close%20up%20of%20a%20green%20and%20w....jpg?updatedAt=1725824295576",
    "https://ik.imagekit.io/0xcqzy/cyberchords/a%20computer%20generated%20image%20....jpg?updatedAt=1725824297660",
    "https://ik.imagekit.io/0xcqzy/cyberchords/orchid%20phalaenopsis%203d%20Real....jpg?updatedAt=1725824296797",
    "https://ik.imagekit.io/0xcqzy/cyberchords/A%20wallpaper%20inspired%20fish%20f....jpg?updatedAt=1725824299150",
]

const flora = () => {
    return ( 
    <>
     <div className={style.imageWrapperContainer}>
          {imgUrl.map((url, index) => (
            <div key={index} className={style.imageWrapper}>
              <Image
                src={url}
                alt={`Image ${index + 1}`}
                layout="fill" 
              />
            </div>
          ))}
        </div>
    </>
    )
}

export default flora ; 
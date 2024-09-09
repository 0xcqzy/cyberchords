import Image from "next/image";
import style from "./intergalactic.module.css"
const imgUrl =[
    "https://ik.imagekit.io/0xcqzy/cyberchords/NGC%207714%20Caption:%20This%20NASA....jpg?updatedAt=1725819890616",
    "https://ik.imagekit.io/0xcqzy/cyberchords/Galaxy%20NGC%201427A%20Plunges%20To....jpg?updatedAt=1725819891976",
    "https://ik.imagekit.io/0xcqzy/cyberchords/My%20photo%20of%20the%20Orion%20Nebul....jpg?updatedAt=1725819892493",
    "https://ik.imagekit.io/0xcqzy/cyberchords/UGC%205340%20Credits%20NASA,%20ESA,....jpg?updatedAt=1725819893696",
    "https://ik.imagekit.io/0xcqzy/cyberchords/NGC%203627%20Credits%20NASA,%20ESA,....jpg?updatedAt=1725819894810",


]

const intergalactic = () => {
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

export default intergalactic ; 
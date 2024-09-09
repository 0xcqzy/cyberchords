import Image from "next/image";
import style from "./sculpture.module.css"
const imgUrl =[
    "https://ik.imagekit.io/0xcqzy/cyberchords/_History%20Pixelates%20Us_%20Prod....jpg?updatedAt=1725823629398",
    "https://ik.imagekit.io/0xcqzy/cyberchords/A%20blender%20made%20hand..jpg?updatedAt=1725823627684",
    "https://ik.imagekit.io/0xcqzy/cyberchords/A%20blender%20made%20statue.Thank....jpg?updatedAt=1725823626628",
    "https://ik.imagekit.io/0xcqzy/cyberchords/A%20blender%20made%20scene.%20Thank....jpg?updatedAt=1725823627300",
]
const sculpture = () => {
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

export default sculpture ; 

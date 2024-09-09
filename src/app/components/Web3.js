import Link from "next/link";
import Image from "next/image";
import style from "../components/web3.module.css";

const projects = [
    {
        name: "sculpture",
        coverImg: "https://ik.imagekit.io/0xcqzy/cyberchords/A%20blender%20made%20scene.%20Thank....jpg?updatedAt=1725823627300",
        link: "/concept-studio/sculpture", // Add a unique link for each project
    },
    {
        name: "intergalactic",
        coverImg: "https://ik.imagekit.io/0xcqzy/cyberchords/My%20photo%20of%20the%20Orion%20Nebul....jpg?updatedAt=1725819892493",
        link: "concept-studio/intergalactic", // Add a unique link for each project
    },
    {
        name: "flora",
        coverImg: "https://ik.imagekit.io/0xcqzy/cyberchords/A%20wallpaper%20inspired%20fish%20f....jpg?updatedAt=1725824299150",
        link: "concept-studio/flora", // Add a unique link for each project
    }
];

const Web3 = () => {
    return (
        <div className={style.main}>
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className={style.projectLink}>
              <div key={index} className={style.imageWrapper}>
                <Image
                  src={project.coverImg}
                  alt={project.name}
                  className={style.img}
                  layout="fill" 
                />
              </div>
              <div className={style.projectName}>{project.name}</div>
            </Link>
          ))}
        </div>
    );
};


export default Web3; 

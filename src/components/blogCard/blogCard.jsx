import Image from "next/image";
import styles from "./blogCard.module.css"


const BlogCard = ({blogImage})=>{
    return(
        <div className={styles.container}>
            <Image src={blogImage} width="500" height="250"/>
            <div className={styles.date}></div>
            <div className={styles.title}></div>
            <div className={styles.text}>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum animi delectus debitis, consequatur, iusto suscipit laborum autem minima nemo temporibus, libero iste? Iste natus eum ratione provident deserunt odio laudantium?
            </div>
            <div className={styles.link}>Read now</div>
        </div>
    )
};


export default BlogCard;
import Image from "next/image";
import styles from "./blogCard.module.css"


const BlogCard = ({blogImage})=>{
    return(
        <div className={styles.container}>
            <Image src={blogImage} width="500" height="250"/>
            <div className={styles.date}></div>
            <div className={styles.title}></div>
            <div className={styles.text}></div>
            <div className={styles.link}>Read now</div>
        </div>
    )
};


export default BlogCard;
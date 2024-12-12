import Image from "next/image";
import styles from "./blogCard.module.css"


const BlogCard = ({blogImage, blogDate, blogLink, blogTitle, blogDesc})=>{
    return(
        <div className={styles.container}>
            <Image src={blogImage} className={styles.img} width="450" height="250"/>
            <div className={styles.date}>
                <p>{blogDate}</p>
            </div>
            <div className={styles.title}>
                <p>{blogTitle}</p>
            </div>
            <div className={styles.text}>
                <p>{blogDesc}</p>
            </div>
            <div className={styles.link}>
                <a href={blogLink}>Read now {'>'}</a>
            </div>
        </div>
    )
};


export default BlogCard;
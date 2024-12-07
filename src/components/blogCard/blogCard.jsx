import Image from "next/image";
import styles from "./blogCard.module.css"


const BlogCard = ({blogImage})=>{
    return(
        <div className={styles.container}>
            <Image src={blogImage} width="500" height="250"/>
        </div>
    )
};


export default BlogCard;
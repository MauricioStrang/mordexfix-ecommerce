import BlogCard from "@/components/blogCard/blogCard";
import styles from "./blog.module.css"

const BlogPage = () =>{
    return(
        <div className={styles.container}>
            <BlogCard blogImage = "/steve.png"/>
        </div>

    )
}

export default BlogPage;
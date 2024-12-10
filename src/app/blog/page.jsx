import BlogCard from "@/components/blogCard/blogCard";
import styles from "./blog.module.css"

const BlogPage = () =>{
    return(
        <div className={styles.container}>
            <h1>MordexFix Blog</h1>
            <div className={styles.blogsContainer}>
                <BlogCard blogImage = "/steve.png" blogDate = "November 30, 2024" blogTitle = "Best Microscopes for Electronic Repair" blogDesc = "Whether you’re trying to replace the HDMI port on a PS4 or you’re reballing a BGA chip on a Macbook Pro, one thing you’ll need for sure is a good microscope."/>
                
            </div>
        </div>

    )
}

export default BlogPage;
import BlogCard from "@/components/blogCard/blogCard";
import styles from "./blog.module.css"

const BlogPage = () =>{
    return(
        <div className={styles.container}>
            <h1>MordexFix Blog</h1>

            <div className={styles.blogsContainer}>
                <BlogCard blogImage = "/steve.png" blogDate = "November 30, 2024" blogLink = "/blog/best-microscopes" blogTitle = "Best Microscopes for Electronic Repair" blogDesc = "Whether you’re trying to replace the HDMI port on a PS4 or you’re reballing a BGA chip on a Macbook Pro, one thing you’ll need for sure is a good microscope."/>
                <BlogCard blogImage = "/psdisc.png" blogDate = "July 25, 2024" blogLink = "/blog/ps5-optical-drives" blogTitle = "PS5 Optical Disc Drive Problems" blogDesc = "There are several problems that can occur with the disc drive on a PS5, including your disc not reading correctly or not spinning or working in general. Here we will tackle common issues and outline DIY fixes you can try at home."/>
                <BlogCard blogImage = "/gifts.png" blogDate = "July 20, 2024" blogLink = "/blog/gifts" blogTitle = "Gifts for Gamers Who Like to Fix" blogDesc = "Finding a great gift for a gamer who likes to work on and fix their electronics can be really difficult. I've got your back! Here's my list of favorite products and I guarantee you'll find something the DIYer in your life will LOVE."/>
                <BlogCard blogImage = "/solder.png" blogDate = "July 15, 2024" blogLink = "/blog/how-to-solder" blogTitle = "Best Microscopes for Electronic Repair" blogDesc = "Whether you’re trying to replace the HDMI port on a PS4 or you’re reballing a BGA chip on a Macbook Pro, one thing you’ll need for sure is a good microscope."/>
                <BlogCard blogImage = "/retro.png" blogDate = "June 3, 2024" blogLink = "/blog/best-microscopes" blogTitle = "Best Microscopes for Electronic Repair" blogDesc = "Whether you’re trying to replace the HDMI port on a PS4 or you’re reballing a BGA chip on a Macbook Pro, one thing you’ll need for sure is a good microscope."/>
                <BlogCard blogImage = "/ps5slim.png" blogDate = "May 1, 2024" blogLink = "/blog/best-microscopes" blogTitle = "Best Microscopes for Electronic Repair" blogDesc = "Whether you’re trying to replace the HDMI port on a PS4 or you’re reballing a BGA chip on a Macbook Pro, one thing you’ll need for sure is a good microscope."/>
                <BlogCard blogImage = "/nes.png" blogDate = "April 1, 2024" blogLink = "/blog/best-microscopes" blogTitle = "Best Microscopes for Electronic Repair" blogDesc = "Whether you’re trying to replace the HDMI port on a PS4 or you’re reballing a BGA chip on a Macbook Pro, one thing you’ll need for sure is a good microscope."/>
                <BlogCard blogImage = "/xbox.png" blogDate = "February 15, 2024" blogLink = "/blog/best-microscopes" blogTitle = "Best Microscopes for Electronic Repair" blogDesc = "Whether you’re trying to replace the HDMI port on a PS4 or you’re reballing a BGA chip on a Macbook Pro, one thing you’ll need for sure is a good microscope."/>
                <BlogCard blogImage = "/overheat.png" blogDate = "January 3, 2024" blogLink = "/blog/best-microscopes" blogTitle = "Best Microscopes for Electronic Repair" blogDesc = "Whether you’re trying to replace the HDMI port on a PS4 or you’re reballing a BGA chip on a Macbook Pro, one thing you’ll need for sure is a good microscope."/>
            </div>

            <div className={styles.navigatorContainer}>
                <div className={styles.numberContainer}>
                    <a href="/blog">1</a>
                    <a href="/blog/page2">2</a>
                    <a href="/blog/page3">3</a>
                    <a href="/blog/page4">4</a>
                    <a href="/blog/page4">{'>'}</a>
                </div>
            </div>
        </div>

    )
}

export default BlogPage;
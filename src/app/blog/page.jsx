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
                <BlogCard blogImage = "/solder.png" blogDate = "July 15, 2024" blogLink = "/blog/how-to-solder" blogTitle = "How To Solder On Fan and Power Supply Connectors" blogDesc = "If you've accidentally broken the fan or power supply connector off the motherboard of your game console this is the post for you. Well get your started with your repair with tool recommendations and an explanation of each step of the process."/>
                <BlogCard blogImage = "/retro.png" blogDate = "June 3, 2024" blogLink = "/blog/how-to-clean" blogTitle = "How to Clean Retro Game Cartridges" blogDesc = "Most retro game cartridges are between 20-40 years old, and you may have noticed that they don’t work the way they used to anymore. Luckily, a simple cleaning is often the only thing needed to fix them."/>
                <BlogCard blogImage = "/ps5slim.png" blogDate = "May 1, 2024" blogLink = "/blog/ps5-slim" blogTitle = "PS5 Slim Disc Drive" blogDesc = "The PS5 Slim allows you to swap disc drives between both the digital and the disc versions. Learn how this new disc drive swapping feature works as well as how to get your disc drive working."/>
                <BlogCard blogImage = "/nes.png" blogDate = "April 1, 2024" blogLink = "/blog/fix-nes" blogTitle = "How to Fix NES Blinking Red Light" blogDesc = "If your NES is giving you a blinking red light on the console or a glitchy/static screen we're here to help. Keep on reading if you want to learn why this happens and how to fix it."/>
                <BlogCard blogImage = "/xbox.png" blogDate = "February 15, 2024" blogLink = "/blog/xbox-disc" blogTitle = "Xbox Series X Disc Drive Problems" blogDesc = "It's frustrating trying to start a game only to find that your Xbox won’t read your game disc. If your Xbox Series X is not reading discs, we're here to help you figure out what might be wrong and how to fix it."/>
                <BlogCard blogImage = "/overheat.png" blogDate = "January 3, 2024" blogLink = "/blog/ps5-overheating" blogTitle = "How to Fix PS5 Overheating Issues" blogDesc = "If you're in the middle of a game and see the message pop up on the screen, “Your PS5 is too hot...” this post can help you know what to do to solve your PS5's overheating issue."/>
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
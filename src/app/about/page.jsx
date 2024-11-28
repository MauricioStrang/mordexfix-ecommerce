import Image from "next/image";
import styles from "./about.module.css" 

const AboutPage =()=> {
  return (

    <div className={styles.container}>

        <div className={styles.header}>
          <h1 className={styles.pageTitle}>About us</h1>
        </div>

        <div className={styles.pageContent}>
          <h2 className={styles.subHeader}>Meet the MordexFix Team</h2>

          <div className={styles.protrait}>
            <Image className={styles.photo} src="/1.jpg" width={180} height={240} alt="Mauricio Strang photo" />
            <h3 className={styles.profile}>Mauricio Strang</h3>
            <p className={styles.subTitles}>
            <strong>Video Creator </strong>
            <br />
            <strong>Business Strategist </strong>
            </p>
            <p>Mauricio's passion for DIY repair started a few weeks ago while watching videos xdd. He's always loved repair and business so starting his own electronics repair business, then YouTube channel, has been a fun, yet challenging, journey. Some of his favorite parts of his job include telling interesting stories around electronics repair, hearing from people that have been inspired by our work, and building the business into something bigger than himself. When not at work for the business, enjoys hiking, working on his property, and hanging out with his bros.</p>
            <p className={styles.subTitles}>
              <strong>3 Fun Facts About Mauricio: </strong>
            </p>
            <ul className={styles.list}>
              <li>Former gooner</li>
              <li>Loves anime even if he doesn't watch any</li>
              <li>Loves Narela</li>
            </ul>
          </div>


          <div className={styles.protrait}>
            <Image className={styles.photo} src="/marcelo.jpg" width={180} height={240} alt="Marcelo Hernandez photo" />
            <h3 className={styles.profile}>Marcelo Hernandez</h3>
            <p className={styles.subTitles}>
            <strong>Content Creator </strong>
            <br />
            <strong>Video Editor for Restorish </strong>
            </p>
            <p>Whether it is rearranging the furniture in his house, detailing his car, or cleaning behind the case on his phone, Marcelo has always had a passion with rejuvenating the loved and familiar. Perfection is not his goal (see the “ish” in Restorish); he just loves bringing new life to the stagnant, cast out and under-appreciated.</p>
            <p className={styles.subTitles}>
              <strong>3 Fun Facts About Marcelo: </strong>
            </p>
            <ul className={styles.list}>
              <li>Gooner</li>
              <li>Rich as fuck and facha</li>
              <li>Loves his ex</li>
            </ul>
          </div>
          

          <div className={styles.protrait}>
            <Image className={styles.photo} src="/narela.jpg" width={180} height={240} alt="Narela Spila photo" />
            <h3 className={styles.profile}>Narela Spila</h3>
            <p className={styles.subTitles}>
            <strong>Multimedia Specialist</strong>
            <br />
            <strong>Digital Strategist </strong>
            </p>
            <p>Narela has loved the "magic" of the internet since before she can remember, but really found her passion for it during her first web design class in college. Since then, she's endeavored to help content creators share their messages with others which eventually lead to joining her husband, Steve, with running TronicsFix. When she's not working, she loves painting her nails, reading, and watching movies.</p>
            <p className={styles.subTitles}>
              <strong>3 Fun Facts About Narela: </strong>
            </p>
            <ul className={styles.list}>
              <li>Está buena</li>
              <li>marketing xdd</li>
              <li>Loves mordex??</li>
            </ul>
          </div>


          <div className={styles.protrait}>
            <Image className={styles.photo} src="/flip.jpeg" width={180} height={240} alt="Flip Carrasco photo" />
            <h3 className={styles.profile}>Flip Hitchfield</h3>
            <p className={styles.subTitles}>
            <strong>Video Editor </strong>
            <br />
            </p>
            <p>Flip began working for TronicsFix cleaning handheld consoles and controllers and later learned how to take photos and create listings on eBay. His most recent work has been editing videos to be posted on Facebook. Seth enjoys playing video games, chess, and riding his bike.</p>
            <p className={styles.subTitles}>
              <br />
              <br />
              <strong>3 Fun Facts About Flip: </strong>
            </p>
            <ul className={styles.list}>
              <li>Whhhaaatt??</li>
              <li>Loves Music</li>
              <li>Loves Tami</li>
            </ul>
          </div>
        
          <h2 className={styles.subHeader}>A Brief MordexFix History</h2>

          <p>TronicsFix was started in 2015 in Steve and Jessica’s garage. Jessica had a steady, full-time job while Steve stayed home with their young son. As he had time, Steve would buy broken electronics, repair them, and then sell them on eBay. Eventually, Steve had enough experience fixing game consoles that he started offering repair services for game consoles online.</p>
          <br />
          <p>Soon the game console repair business outgrew the garage and Steve leased a location nearby. As the business grew, Steve decided to make videos showing how to repair PlayStation 4 consoles and to upload those videos to YouTube. The TronicsFix YouTube channel grew slowly at first but grew faster the more videos Steve posted. By early 2020, Steve and Jessica couldn’t keep up with the demands of both the repair business and the YouTube channel. They decided to shut down the repair business and to focus on continuing to grow their YouTube channel, as well as starting to upload videos to Facebook and TikTok, and creating online repair courses.</p>
          <br />
          <p>Currently, TronicsFix has one of the largest audiences in the electronics repair niche and has helped thousands of people repair their own devices. As a company, we hope to continue to inspire repair, treat our world and the people in it with respect and care, and have plenty of fun along the way.</p>
          <br />
          <Image src="/team.jpg" alt="MordexFix Team" width={480} height={277}/>
          <br />
          <br />
        </div>
    </div>
  );
}

export default AboutPage;
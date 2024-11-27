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
              <li>Loves procrastination</li>
              <li>Loves Narela</li>
            </ul>
          </div>
          
          

          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <ul></ul>

          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <ul></ul>

          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <ul></ul>

          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <ul></ul>
        </div>
    </div>
  );
}

export default AboutPage;
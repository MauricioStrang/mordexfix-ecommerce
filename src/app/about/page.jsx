import styles from "./about.module.css" 

const AboutPage =()=> {
  return (

    <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>About Us</h1>
        </div>

        <div className={styles.pageContent}></div>
    </div>
  );
}

export default AboutPage;
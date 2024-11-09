import styles from "./footer.module.css" 

const Footer =()=> {
  return (

    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <h1>Follow Us</h1>
            <h1>Subscribe</h1>
        </div>

        <div className={styles.socialsContainer}>
            <svg></svg>
            <svg></svg>
            <svg></svg>
            <svg></svg>
            <svg></svg>
        </div>
    </div>
  );
}

export default Footer;
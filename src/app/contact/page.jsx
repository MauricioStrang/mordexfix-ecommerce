import styles from "./contact.module.css" 

const ContactPage =()=> {
  return (

    <div className={styles.container}>
        <div className={styles.header}></div>
        <form className={styles.mainContent}>
          <div className={styles.contentRte}></div>
          <div className={styles.contactPageContent}></div>
        </form>
    </div>
  );
}

export default ContactPage;
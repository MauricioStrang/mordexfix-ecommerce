import styles from "./contact.module.css" 

const ContactPage =()=> {
  return (

    <div className={styles.container}>

        <div className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
        </div>

        <form className={styles.mainContent}>

          <div className={styles.contentRte}>
            <h1 className={styles.title}>Have a Question or Comment?</h1>
            <h3 className={styles.subTitle}>
              <span><strong>Please note: We no longer offer repair services. We recommend <a href="https://shanefix.com/" style={{ color: '#2b00ff'}}>ShaneFix</a> for current generation console repairs (PS4, PS5, Xbox Series, Switch, etc.)</strong></span>
            </h3>
            <p> If you're looking for help fixing your game console yourself you can ask those questions on our <a href="/repairs" style={{ color: '#2b00ff'}}>Diy Forum</a> or when we live stream on the <a href="https://www.youtube.com/channel/UCc9lvd0sqTtaIhmlgOO71lw" style={{ color: '#2b00ff'}}>MordexFix Youtube</a> channel </p>
            <h2></h2>
          </div>

          <div className={styles.contactPageContent}>

          </div>
        </form>
    </div>
  );
}

export default ContactPage;
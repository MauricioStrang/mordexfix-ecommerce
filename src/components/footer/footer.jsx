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
            <div>sign up for our mordexFix mailing list</div>
        </div>

        <div>
          <div>
            Email Adress
          </div>
          <div>
            Sign Up
          </div>

          <div>
            <h1>Your Account</h1>
            <h1>FAQ</h1>
            <h1>Contact Us</h1>
            <h1>Blog</h1>
            <h1>Search</h1>
            <h1>Terms</h1>
            <p>Copyright @ 2024 mordexFix LLC.</p>
            <p>powered by your mom</p>
          </div>

          <div>
            <div>
              Argentina USD
            </div>

            <div>
              <svg></svg>
              <svg></svg>
              <svg></svg>
              <svg></svg>
              <svg></svg>
              <svg></svg>
              <svg></svg>
              <svg></svg>
              <svg></svg>
              <svg></svg>
              <svg></svg>
              <svg></svg>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
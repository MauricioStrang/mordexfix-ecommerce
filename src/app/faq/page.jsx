import styles from "./faq.module.css" 

const FaqPage =()=> {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.mainTitle}>FAQ</h1>

            <div className={styles.question}> 
              <h1 className={styles.title}> Q. How do I contact you?</h1>
              <p className={styles.desc}>A. That's easy! The easiest, fastest way is to use the form on our <a href="" className={styles.decor}>contact page</a>.</p>
            </div>

            <div className={styles.question} >
              <h1 className={styles.title}>Q. Do you still run a repair business?</h1>
              <p className={styles.desc}>A. No, in 2020 we ended our repair service business so we could focus our time on creating high-quality content for YouTube, Facebook, and Tiktok. </p>
            </div>

            <div className={styles.question}>
              <h1 className={styles.title}>Q. Where can I watch your videos?</h1>
              <p className={styles.desc}>A. Here are all our official channels (all others with the name TronicsFix are copycats or scammers):</p>
              <p className={styles.desc}>Youtube:  <a href="" className={styles.decor}>www.youtube.com/@Tronicsfix</a></p>
              <p className={styles.desc}>Facebook: <a href="" className={styles.decor}>www.facebook.com/TronicsFix/</a></p>
              <p className={styles.desc}>TikTok: <a href="" className={styles.decor}>www.tiktok.com/@tronicsfixofficial</a></p>
              <p className={styles.desc}> Instagram: <a href="" className={styles.decor}>www.instagram.com/tronicsfix/</a></p>
            </div>

            <div className={styles.question}>
              <h1 className={styles.title}>Q. Can I get advice on repairing my device?</h1>
              <p className={styles.desc}>A. You can find repair advice and ask questions about repair on our TronicsFix forum here: 
                <a href="" className={styles.decor}>https://www.tronicsfixforum.com/</a> We have a great community on the forum that can provide a lot of help with your DIY repair questions.</p>
            </div>

            <div className={styles.question}>
              <h1 className={styles.title}>Q. What if I need to find someone to repair my game console?</h1>
              <p className={styles.desc}>A. One of the repair technicians who worked with us as a contractor started his own game console repair business (current generation consoles). Shane with ShaneFix was trained by us and repaired game consoles for us for over a year before starting his own business. Shane is an excellent repair tech and has done a great job fixing hundreds of game consoles for us. We highly recommend ShaneFix for all your game console repair needs. Here's his website: <a href="" className={styles.decor}>https://shanefix.com/</a></p>
            </div>

            <div className={styles.question}>
              <h1 className={styles.title}>Q. Do you ever repair viewers' consoles for videos?</h1>
              <p className={styles.desc}>A. Yes, sometimes we will buy a viewer's broken console to repair on a video. If you're interested in selling your console (or computer) to us for a video contact us using the form on our <a href="" className={styles.decor}>contact page.</a></p>
            </div>
        </div>
    </div>
  );
}

export default FaqPage;
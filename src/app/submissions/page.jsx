import styles from "./submissions.module.css"

const SubmissionsPage =()=> {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Viewer Electronics Repair Submissions</h1>
            <div className={styles.desc}>
              <p>One type of repair we like to feature in our videos is trying to repair viewer submitted electronics that have interesting backstories. Whether it's a console that someone's significant other damaged or a computer that a repair shop made worse by trying to fix it, we love getting to share these interesting damage (and hopefully repair) stories with our viewers.</p>
              <br />
              <p>If you have a broken console, computer, camera, or other small electronic device that has an interesting story AND you'd be willing to sell it to us to possibly be featured in a repair video, please complete the form below.</p>
              <br />
              <p>Disclaimers:</p>
              <br />
              <p>We do not guarantee that all small electronic devices submitted to us will be featured in a video.</p>
              <p>If you choose to have us attempt to repair your device and ship it back to you: it may take a month or more before your device is returned, there is no guarantee we will be able to repair your device, we are not responsible for any damage done to the device while we have it, and we are not responsible for any damage done to your device during shipping.</p>

            </div>
            <br />
            <br />
            {/* Here goes a component for uploading submissions for videos */}
            <div className={styles.formContaioner}>
              <form action="">Hello</form>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    </div>
  );
}

export default SubmissionsPage;
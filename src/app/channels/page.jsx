import Image from "next/image";
import styles from "./channels.module.css"

const ChannelsPage =()=> {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Our YouTube Channels</h1>
            <p>We started out as an electronics repair shop who made a few YouTube videos as an experiment. Now we have three separate YouTube channels that offer a wider variety of DIY information.</p>
            <br />
            <h2>The Original TronicsFix YouTube Channel</h2>
            <br />
            <p>With over 450 videos and counting, this is our largest channel. This channel is mainly about Steve trying to fix broken electronics but he also has videos about the repairability of game consoles and the quality of the "refurbished" consoles offered by different online sellers. You can <a className={styles.links} href="">check out the TronicsFix YouTube channel here.</a></p>
            <Image src ="/channels1.png" width={480} height={270} />
            <br />
            <br />
            <br />
            <br />
        </div>
    </div>
  );
}

export default ChannelsPage;
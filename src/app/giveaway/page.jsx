import styles from './giveaway.module.css'

const giveawayPage = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Giveaway Information</h1>
                <div className={styles.box}>
                    <h2 className={styles.secondTitle}>Upcoming Giveaways</h2>
                    <br />
                    <p>We have 4 giveaways scheduled for November and December 2025</p>
                    <br />
                    <p className={styles.counter}>1. Giveaway #1 will open on November 21</p>
                    <p className={styles.counter}>2. Giveaway #2 will open December 2</p>
                    <p className={styles.counter}>3. Giveaway #3 will open December 4</p>
                    <p className={styles.counter}>4. Giveaway #4 will open December 6</p>
                    <br />
                </div>

                <div className={styles.box}>
                    <h2 className={styles.secondTitle}>TronicsFix Discord Giveaway Rules</h2>
                    <br />
                    <p className={styles.counter}>1. No purchase necessary, a purchase does not increase your chance of winning, void where prohibited.</p>
                    <p className={styles.counter}>2. Minimum age required to enter giveaway is 18.</p>
                    <p className={styles.counter}>3. This giveaway is hosted in the United States.</p>
                    <p className={styles.counter}>4. Currently only US residents are eligible to participate in this giveaways.</p>
                    <p className={styles.counter}>5. Odds of winning depend on the number of eligible entries received during the giveaway period.</p>
                    <p className={styles.counter}>6. Giveaway announcements will be made in the “giveaway” channel on the TronicsFix Discord server (<a className={styles.orange} href="">https://discord.gg/tronicsfix</a>).</p>
                    <p className={styles.counter}>7. To enter the giveaway, answer the question asked in the “giveaway” channel on the Discord server within the specified time period. The first correct answer from an eligible participant within the specified time will be selected as the winner. This is the only method of entry.</p>
                    <p className={styles.counter}>8. Answers that show they have been edited after initially submitted will be automatically disqualified.</p>
                    <p className={styles.counter}>9. Each giveaway will start and end on the same day. It will be open for answers (entries) for a minimum of 5 minutes and a maximum of 1 hour. If there as been no correct answer given by an eligible participant during that time, no winner will be selected.</p>
                    <p className={styles.counter}>10. The winner of the giveaway will be determined the same day as the giveaway is held (provided a correct answer is given by an eligible participant during the specified time frame). The winner will be announced in the “giveaway” channel on the TronicsFix Discord server. Winners may also be announced on the TronicsFix YouTube channel, TronicsFix Facebook page, or during a TronicsFix livestream.</p>
                    <p className={styles.counter}>11. The winner must choose their prize from three different mystery prizes. Each prize will be in a different box and have a value of between $20-$400. Potential prizes will be things like: TronicsFix merch, controllers, video game cartridges, handheld game consoles (used/working), and standard game consoles (used/working).</p>
                    <p className={styles.counter}>12. Prizes will be shown after the winner chooses which box they would like.</p>
                    <p className={styles.counter}>13. Prizes will be shown on the TronicsFix Discord server. Prizes may also be shown on the TronicsFix YouTube channel, TronicsFix Facebook page, or during a TronicsFix livestream.</p>
                    <p className={styles.counter}>14. After the winner chooses their prize it will be shipped to the address provided by the winner within 5 business days unless (otherwise noted). Shipping to be paid by TronicsFix.</p>
                    <p className={styles.counter}>15. TronicsFix LLC reserves the right to use the winner's Discord username on Discord, YouTube and anywhere else the giveaway is discussed.</p>
                    <p className={styles.counter}>16. Employees and their immediate family members or household members are not eligible to win.</p>
                    <p className={styles.counter}>17. Discord giveaway winners will not be eligible to win an additional prize before 1 year from the date of the previous win.</p>
                    <br />
                    <p>Contest host information:</p>
                    <p>MordexFix LLC</p>
                    <p>181 S. Columbia Street</p>
                    <p>Milton Freewater, OR 97862</p>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default giveawayPage;
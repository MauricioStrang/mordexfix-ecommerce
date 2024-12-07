import Image from "next/image";
import styles from "./header.module.css" 

const SubHeader =()=> {
  return (

    <div className={styles.container}>

        <div className={styles.subHeader}>
            <div className= {styles.navMenu}>
                <select 
                id="productsDrop"
                className={styles.navMenuBtn}>
                    <option value="volvo">All products</option>
                    <option value="volvo">Clothing</option>
                    <option value="volvo">Gear</option>
                    <option value="saab">Restorish</option>
                </select>
                <div className={styles.navMenuLabel}>Store</div>
            </div>

            <div className= {styles.navMenu}> 
                <select 
                id="DiyDrop"
                className={styles.navMenuBtn} >
                    <option value="volvo">Blog</option>
                    <option value="volvo">Forum</option>
                </select>
                <div className={styles.navMenuLabel}>DIY</div>
            </div>

            <div className= {styles.navMenu}>
                <select 
                id="aboutDrop"  
                className={styles.navMenuBtn}>
                    <option value="volvo">FAQ</option>
                    <option value="volvo">Contact us</option>
                    <option value="volvo">Electronics Submissions</option>
                </select>   
                <div className={styles.navMenuLabel}>About us</div>
            </div>
            
            
        </div>
    </div>
  );
}

export default SubHeader;
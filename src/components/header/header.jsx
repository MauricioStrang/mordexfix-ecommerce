import Image from "next/image";
import styles from "./header.module.css" 

const Header =()=> {
  return (

    <div className={styles.container}>

        <div className={styles.brgMenuContainer}>
            <Image 
                className={styles.brgMenu} 
                src={'/menu2.png'} alt="menu button"
                width={34} height={32} 
            />
        </div>

        <div className={styles.logoContainer}>
            <h1 className={styles.logo}> Mordex Fix </h1>
        </div>


        <div className={styles.searchContainer}>
            <div className={styles.dropdownContainer}>
                <select className={styles.selectButton}  id="cars">
                    <option value="volvo">All Categories</option>
                    <option value="volvo">T-Shirts</option>
                    <option value="saab">Tools</option>
                    <option value="opel">Stickers</option>
                </select>
                <label className={styles.selectLabel}>All Cateogories</label>

                <div className={styles.dropdownIconContainer}>
                    <Image 
                        className={styles.dropdownIcon}
                        src={'/dropdown.png'} alt= "dropdown icon"
                        width={10} height={10}
                    />
                </div>
                
            </div>

            <div className={styles.searchInputContainer}>
                <input 
                className= {styles.searchInput} 
                type="text" 
                placeholder = "What are you looking for?"
                />
            </div>


            <div className={styles.searchBtnContainer}>
                <Image
                    className={styles.searchBtn} 
                    src={'/search1.png'} alt="search button"
                    width={25} height={25} 
                />
            </div>
        </div>
        


        <div className={styles.userContainer}>
            <Image 
                className={styles.userBtn}
                src={'/user.png'} alt="user button"
                width={30} height={30} 
            />
            <p>Login</p>
        </div>

        <div className={styles.cartContainer}>
            <Image
                className={styles.cartBtn}
                src={'/cart.png'} alt="cart button"
                width={30} height={30} 
            />
        </div>


        <div className={styles.subHeader}>
            <div className= {styles.navMenu}>
                <select className={styles.navMenuBtn}>
                    <option value="volvo">All products</option>
                    <option value="volvo">Clothing</option>
                    <option value="volvo">Gear</option>
                    <option value="saab">Restorish</option>
                </select>
                <label className={styles.navMenuLabel}>Store</label>
                {/* <div className={styles.subDropdownIconContainer}>
                    <Image 
                        className={styles.dropdownIcon}
                        src={'/dropdownsub.png'} alt= "dropdown icon"
                        width={20} height={20}
                    />
                </div> */}
            </div>

            <div className= {styles.navMenu}> 
                <select className={styles.navMenuBtn} >
                    <option value="volvo">Blog</option>
                    <option value="volvo">Forum</option>
                </select>
                <label className={styles.navMenuLabel}>DIY</label>
                {/* <div className={styles.subDropdownIconContainer}>
                    <Image 
                        className={styles.dropdownIcon}
                        src={'/dropdownsub.png'} alt= "dropdown icon"
                        width={20} height={20}
                    />
                </div> */}
            </div>

            <div className= {styles.navMenu}>
                {/* <div className={styles.subDropdownIconContainer}>
                    <Image 
                        className={styles.dropdownIcon}
                        src={'/dropdownsub.png'} alt= "dropdown icon"
                        width={20} height={20}
                    />
                </div> */}
                <select className={styles.navMenuBtn}>
                    <option value="volvo">FAQ</option>
                    <option value="volvo">Contact us</option>
                    <option value="volvo">Electronics Submissions</option>
                </select>
                <label className={styles.navMenuLabel}>About us</label>
            </div>
            
        </div>
    </div>
  );
}

export default Header;
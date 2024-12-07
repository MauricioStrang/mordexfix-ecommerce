import Image from "next/image";
import styles from "./testHeader.module.css"

const TestHeader =()=> {
  return (

    <div className={styles.container}>
        <div className={styles.brgMenu}>
          <Image 
          src={"/menu2.png"} 
          className={styles.brgBtn}
          alt="burger menu"
          fill/>
        </div>
        <div className={styles.mobileSearch}>
            <svg alt= "search icon" aria-hidden="true" focusable="false" role="presentation" color= "black" xmlns="http://www.w3.org/2000/svg" width="23" height="24" fill="none" viewBox="0 0 23 24"><path d="M21 21L15.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path><circle cx="10" cy="9" r="8" stroke="currentColor" strokeWidth="2"></circle></svg>
        </div>
        <div className={styles.logoContainer}>
            <h1 className={styles.logo}> Mordex Fix </h1>
        </div>


        <div className={styles.searchContainer}>
            <div className={styles.dropdownContainer}>
                <select className={styles.selectButton}  id="cars">
                    <option value="volvo">All categories</option>
                    <option value="volvo">T-Shirts</option>
                    <option value="saab">Tools</option>
                    <option value="opel">Stickers</option>
                </select>
                <div className={styles.selectLabel}>All cateogories</div>

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
                id="searchBar"
                className= {styles.searchInput} 
                type="text" 
                placeholder = "What are you looking for?"
                />
            </div>


            <div className={styles.searchBtnContainer}>
                <svg alt= "search icon" aria-hidden="true" focusable="false" role="presentation" color= "white" xmlns="http://www.w3.org/2000/svg" width="23" height="24" fill="none" viewBox="0 0 23 24"><path d="M21 21L15.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path><circle cx="10" cy="9" r="8" stroke="currentColor" strokeWidth="2"></circle></svg>
            </div>
        </div>
        


        <div className={styles.userContainer}>
            <svg alt= "user icon" color="black" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg"  width="23" height="24" viewBox="0 0 22 26" fill="none"> <path d="M11.3336 14.4447C14.7538 14.4447 17.5264 11.6417 17.5264 8.18392C17.5264 4.72616 14.7538 1.9231 11.3336 1.9231C7.91347 1.9231 5.14087 4.72616 5.14087 8.18392C5.14087 11.6417 7.91347 14.4447 11.3336 14.4447Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M20.9678 24.0769C19.5098 20.0278 15.7026 17.3329 11.4404 17.3329C7.17822 17.3329 3.37107 20.0278 1.91309 24.0769" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>    </svg>
            <p className={styles.login}>Login</p>
        </div>

        <div className={styles.cartContainer}>
            <svg alt= "cart icon" width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">      <path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H1.33877H1.33883C1.61048 2.00005 2.00378 2.23945 2.10939 2.81599L2.10937 2.816L2.11046 2.82171L5.01743 18.1859C5.12011 18.7286 5.64325 19.0852 6.18591 18.9826C6.21078 18.9779 6.23526 18.9723 6.25933 18.9658C6.28646 18.968 6.31389 18.9692 6.34159 18.9692H18.8179H18.8181C19.0302 18.9691 19.2141 18.9765 19.4075 18.9842L19.4077 18.9842C19.5113 18.9884 19.6175 18.9926 19.7323 18.9959C20.0255 19.0043 20.3767 19.0061 20.7177 18.9406C21.08 18.871 21.4685 18.7189 21.8028 18.3961C22.1291 18.081 22.3266 17.6772 22.4479 17.2384C22.4569 17.2058 22.4642 17.1729 22.4699 17.1396L23.944 8.46865C24.2528 7.20993 23.2684 5.99987 21.9896 6H21.9894H4.74727L4.07666 2.45562L4.07608 2.4525C3.83133 1.12381 2.76159 8.49962e-05 1.33889 0H1.33883H1ZM5.12568 8L6.8227 16.9692H18.8178H18.8179C19.0686 16.9691 19.3257 16.9793 19.5406 16.9877L19.5413 16.9877C19.633 16.9913 19.7171 16.9947 19.7896 16.9967C20.0684 17.0047 20.2307 16.9976 20.3403 16.9766C20.3841 16.9681 20.4059 16.96 20.4151 16.9556C20.4247 16.9443 20.4639 16.8918 20.5077 16.7487L21.9794 8.09186C21.9842 8.06359 21.9902 8.03555 21.9974 8.0078C21.9941 8.00358 21.9908 8.00108 21.989 8H5.12568ZM20.416 16.9552C20.4195 16.9534 20.4208 16.9524 20.4205 16.9523C20.4204 16.9523 20.4199 16.9525 20.4191 16.953L20.416 16.9552ZM10.8666 22.4326C10.8666 23.2982 10.195 24 9.36658 24C8.53815 24 7.86658 23.2982 7.86658 22.4326C7.86658 21.567 8.53815 20.8653 9.36658 20.8653C10.195 20.8653 10.8666 21.567 10.8666 22.4326ZM18.0048 24C18.8332 24 19.5048 23.2982 19.5048 22.4326C19.5048 21.567 18.8332 20.8653 18.0048 20.8653C17.1763 20.8653 16.5048 21.567 16.5048 22.4326C16.5048 23.2982 17.1763 24 18.0048 24Z" fill="currentColor"></path>    </svg>
        </div>   
      
    </div>
  );
}

export default TestHeader;
import Image from "next/image";
import styles from "./home.module.css";

export const metadata = {
  description: "Home page",
};


export default function Home() {
  return (
    <div className={styles.container}>
        
        <div className={styles.mordexBannerContainer}>
          <Image
          priority
          src='/mordexfix1.png'
          alt='mordexFix main banner'
          fill
          className={styles.mordexBanner} 
          />
        </div>

        <div className={styles.mainContent}>
          <div className={styles.links}>

              <div className={styles.linksContainer}>
                <a className={styles.linksClickable} href="/about"></a>
                <div className={styles.imgContainer}>
                  <svg aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">      <path d="M6.1875 14.4375C6.1875 16.4432 6.98426 18.3668 8.40251 19.785C9.82075 21.2032 11.7443 22 13.75 22C15.7557 22 17.6793 21.2032 19.0975 19.785C20.5157 18.3668 21.3125 16.4432 21.3125 14.4375C21.3125 12.4318 20.5157 10.5082 19.0975 9.09001C17.6793 7.67176 15.7557 6.875 13.75 6.875C11.7443 6.875 9.82075 7.67176 8.40251 9.09001C6.98426 10.5082 6.1875 12.4318 6.1875 14.4375V14.4375Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M1.375 37.125C1.375 33.8429 2.67879 30.6953 4.99955 28.3746C7.32032 26.0538 10.4679 24.75 13.75 24.75C17.0321 24.75 20.1797 26.0538 22.5004 28.3746C24.8212 30.6953 26.125 33.8429 26.125 37.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M26.312 18.5625C26.312 20.2035 26.9639 21.7773 28.1243 22.9377C29.2847 24.0981 30.8585 24.75 32.4995 24.75C34.1405 24.75 35.7144 24.0981 36.8747 22.9377C38.0351 21.7773 38.687 20.2035 38.687 18.5625C38.687 16.9215 38.0351 15.3477 36.8747 14.1873C35.7144 13.0269 34.1405 12.375 32.4995 12.375C30.8585 12.375 29.2847 13.0269 28.1243 14.1873C26.9639 15.3477 26.312 16.9215 26.312 18.5625V18.5625Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M28.9907 27.6247C30.5217 27.0604 32.1663 26.8743 33.7847 27.0821C35.4031 27.29 36.9473 27.8856 38.286 28.8184C39.6248 29.7512 40.7184 30.9936 41.4739 32.4398C42.2293 33.886 42.6243 35.4933 42.6252 37.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>    </svg>
                </div>
                <span className={styles.linksTitle}>
                  About us
                </span>

                <p className={styles.linkSubTitle}>
                  Meet the MordexFix Team
                </p>
              </div>

              <div className={styles.linksContainer}>
              <a className={styles.linksClickable} href="/store"></a>
                <div className={styles.imgContainer}>
                    <svg className={styles.store} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">      <path d="M39.875 23.375V39.875C39.875 40.6043 39.5853 41.3038 39.0695 41.8195C38.5538 42.3353 37.8543 42.625 37.125 42.625H6.875C6.14565 42.625 5.44618 42.3353 4.93046 41.8195C4.41473 41.3038 4.125 40.6043 4.125 39.875V23.375" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M38.7713 1.375H5.22867C4.91571 1.37495 4.61208 1.48151 4.3678 1.67714C4.12352 1.87276 3.95317 2.14577 3.88483 2.45117L1.375 13.75C1.375 14.844 1.8096 15.8932 2.58318 16.6668C3.35677 17.4404 4.40598 17.875 5.5 17.875C6.59402 17.875 7.64323 17.4404 8.41682 16.6668C9.1904 15.8932 9.625 14.844 9.625 13.75C9.625 14.844 10.0596 15.8932 10.8332 16.6668C11.6068 17.4404 12.656 17.875 13.75 17.875C14.844 17.875 15.8932 17.4404 16.6668 16.6668C17.4404 15.8932 17.875 14.844 17.875 13.75C17.875 14.844 18.3096 15.8932 19.0832 16.6668C19.8568 17.4404 20.906 17.875 22 17.875C23.094 17.875 24.1432 17.4404 24.9168 16.6668C25.6904 15.8932 26.125 14.844 26.125 13.75C26.125 14.844 26.5596 15.8932 27.3332 16.6668C28.1068 17.4404 29.156 17.875 30.25 17.875C31.344 17.875 32.3932 17.4404 33.1668 16.6668C33.9404 15.8932 34.375 14.844 34.375 13.75C34.375 14.844 34.8096 15.8932 35.5832 16.6668C36.3568 17.4404 37.406 17.875 38.5 17.875C39.594 17.875 40.6432 17.4404 41.4168 16.6668C42.1904 15.8932 42.625 14.844 42.625 13.75L40.1133 2.45117C40.0457 2.14576 39.8758 1.8726 39.6317 1.6769C39.3877 1.48121 39.0841 1.3747 38.7713 1.375Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M34.375 30.25C34.375 28.7913 33.7955 27.3924 32.7641 26.3609C31.7326 25.3295 30.3337 24.75 28.875 24.75C27.4163 24.75 26.0174 25.3295 24.9859 26.3609C23.9545 27.3924 23.375 28.7913 23.375 30.25V42.625H34.375V30.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M9.625 28.875H17.875V37.125H9.625V28.875Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>    </svg>
                </div>
                <span className={styles.linksTitle}>
                  Store
                </span>

                <p className={styles.linkSubTitle}>
                  MordexFix Merch
                </p>
              </div>

              <div className={styles.linksContainer}>
                <a className={styles.linksClickable} href="/contact"></a>
                <div className={styles.imgContainer}>
                <svg aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">      <path d="M15.5832 24.75H13.7498L6.4165 32.0833V24.75H2.74984C2.26361 24.75 1.79729 24.5569 1.45347 24.213C1.10966 23.8692 0.916504 23.4029 0.916504 22.9167V2.75001C0.916504 2.26377 1.10966 1.79746 1.45347 1.45364C1.79729 1.10983 2.26361 0.916672 2.74984 0.916672H33.9165C34.4027 0.916672 34.869 1.10983 35.2129 1.45364C35.5567 1.79746 35.7498 2.26377 35.7498 2.75001V13.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M19.25 33.9167C19.25 34.4029 19.4432 34.8692 19.787 35.213C20.1308 35.5569 20.5971 35.75 21.0833 35.75H31.1667L39.4167 43.0833V35.75H41.25C41.7362 35.75 42.2025 35.5569 42.5464 35.213C42.8902 34.8692 43.0833 34.4029 43.0833 33.9167V19.25C43.0833 18.7638 42.8902 18.2975 42.5464 17.9536C42.2025 17.6098 41.7362 17.4167 41.25 17.4167H21.0833C20.5971 17.4167 20.1308 17.6098 19.787 17.9536C19.4432 18.2975 19.25 18.7638 19.25 19.25V33.9167Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>    </svg>
                </div>
                <span className={styles.linksTitle}>
                  Business
                </span>

                <p className={styles.linkSubTitle}>
                  Contact Us
                </p>
              </div>

                <div className={styles.linksContainer}>
                <a className={styles.linksClickable} href="/blog"></a>
                <div className={styles.imgContainer}>
                <svg aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="none">      <path d="M22.1522 2.36196C10.5087 2.36196 1.06885 10.1591 1.06885 19.7786C1.11775 22.1736 1.70312 24.527 2.78188 26.6658C3.86063 28.8046 5.4053 30.6743 7.30218 32.1371L2.90218 42.6953L14.5842 36.0201C17.0313 36.799 19.5841 37.1954 22.1522 37.1953C33.7975 37.1953 43.2355 29.3981 43.2355 19.7786C43.2355 10.1591 33.7975 2.36196 22.1522 2.36196Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M23.069 28.0286V17.0286C23.069 16.5424 22.8759 16.0761 22.532 15.7323C22.1882 15.3884 21.7219 15.1953 21.2357 15.1953H19.4023" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M19.4023 28.0286H26.7357" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>      <path d="M22.5662 10.5857C22.8194 10.5857 23.0246 10.7909 23.0246 11.0441C23.0246 11.2972 22.8194 11.5024 22.5662 11.5024C22.3131 11.5024 22.1079 11.2972 22.1079 11.0441C22.1079 10.7909 22.3131 10.5857 22.5662 10.5857" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>    </svg>
                </div>
                <span className={styles.linksTitle}>
                  Repairs
                </span>

                <p className={styles.linkSubTitle}>
                  DIY Repair Blog
                </p>

              </div>
          </div>

          <h2 className={styles.homeSectionTitle}> DIY Electronic Repair Articles</h2>
          <div className={styles.blogPostsContainer}> 

                <div className={styles.blogPost}>
                  <div className={styles.blogImgContainer}>
                      <Image 
                      src={'/ps5.png'} 
                      alt="ps5 repair blog"
                      fill 
                      className={styles.blogImg}/>
                  </div>
                  <h2 className={styles.blogTitle}><a href="/blog/ps5">PS5 Optical Disc Drive Problems</a></h2>
                  <div className={styles.blogText}>There are several problems that can occur with the disc drive on a PS5, including your disc not reading correctly or not spinning or working in general. Here we will tackle common issues and outline DIY fixes you can try at home.</div>
                  <a className={styles.arrowRedirect} href="blog/ps5">Read now  {'>'}</a>
                </div>


                <div className={styles.blogPost}>
                  <div className={styles.blogImgContainer}>
                      <Image 
                      src={'/soldering.png'}
                      alt="soldering blog"
                      fill 
                      className={styles.blogImg}/>
                  </div>
                  <h2 className={styles.blogTitle}><a href="/blog/ps5">How To Solder On Fan and Power Supply Connectors</a></h2>
                  <div className={styles.blogText}>If you've accidentally broken the fan or power supply connector off the motherboard of your game console this is the post for you. Well get your started with your repair with tool recommendations and an explanation of each step of the process.</div>
                  <a className={styles.arrowRedirect} href="blog/soldering">Read now  {'>'}</a>
                </div>


                <div className={styles.blogPost}>
                  <div className={styles.blogImgContainer}>
                      <Image 
                      src={'/retrogames.png'} 
                      alt="retro games repair"
                      fill 
                      className={styles.blogImg}/>
                  </div>
                  <h2 className={styles.blogTitle}><a href="/blog/ps5">How to Clean Retro Game Cartridges</a></h2>
                  <div className={styles.blogText}>Most retro game cartridges are between 20-40 years old, and you may have noticed that they don’t work the way they used to anymore. Luckily, a simple cleaning is often the only thing needed to fix them.</div>
                  <a className={styles.arrowRedirect} href="blog/retrogames">Read now  {'>'}</a>
                </div>  
            </div>
        </div>  
        <div className={styles.seeMore}>
          <p>See more {'>'}</p>
        </div>       
    </div>
  );
}

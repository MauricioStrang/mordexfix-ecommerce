import styles from "./footer.module.css" 

const Footer =()=> {
  return (

    <div className={styles.container}>
      <div className={styles.leftBox}>
        <h1 className={styles.title}>Follow Us</h1>
        <div className={styles.socialsContainer}>
          <div className={styles.socialsBg}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">      <path d="M19.5447 9.00674C18.5249 8.54076 17.4313 8.19745 16.2879 8.00082C16.2671 7.99703 16.2463 8.00651 16.2356 8.02548C16.0949 8.27458 15.9392 8.59956 15.8301 8.85499C14.6003 8.67164 13.3768 8.67164 12.1722 8.85499C12.0631 8.59388 11.9017 8.27458 11.7604 8.02548C11.7497 8.00715 11.7289 7.99766 11.708 8.00082C10.5653 8.19682 9.47171 8.54014 8.45129 9.00674C8.44246 9.01053 8.43488 9.01686 8.42986 9.02508C6.35559 12.1111 5.78737 15.1213 6.06612 18.0941C6.06738 18.1087 6.07558 18.1226 6.08693 18.1314C7.45547 19.1323 8.78114 19.7399 10.0822 20.1426C10.103 20.149 10.1251 20.1414 10.1383 20.1243C10.4461 19.7058 10.7204 19.2644 10.9557 18.8004C10.9695 18.7732 10.9563 18.7409 10.9279 18.7302C10.4928 18.5658 10.0784 18.3654 9.67982 18.1378C9.64829 18.1194 9.64577 18.0745 9.67477 18.053C9.75865 17.9904 9.84255 17.9253 9.92264 17.8596C9.93713 17.8475 9.95732 17.845 9.97435 17.8526C12.5929 19.0431 15.4277 19.0431 18.0153 17.8526C18.0323 17.8444 18.0525 17.8469 18.0677 17.8589C18.1478 17.9247 18.2316 17.9904 18.3161 18.053C18.3451 18.0745 18.3433 18.1194 18.3117 18.1378C17.9131 18.3698 17.4988 18.5658 17.063 18.7295C17.0346 18.7403 17.022 18.7732 17.0359 18.8004C17.2762 19.2638 17.5505 19.7051 17.8526 20.1237C17.8652 20.1414 17.8879 20.149 17.9087 20.1426C19.2161 19.7399 20.5417 19.1323 21.9103 18.1314C21.9223 18.1226 21.9298 18.1093 21.9311 18.0948C22.2647 14.6578 21.3723 11.6723 19.5655 9.0257C19.5611 9.01686 19.5535 9.01053 19.5447 9.00674ZM11.3467 16.284C10.5583 16.284 9.90876 15.5632 9.90876 14.6781C9.90876 13.7929 10.5457 13.0721 11.3467 13.0721C12.1539 13.0721 12.7972 13.7992 12.7846 14.6781C12.7846 15.5632 12.1476 16.284 11.3467 16.284ZM16.6632 16.284C15.8748 16.284 15.2253 15.5632 15.2253 14.6781C15.2253 13.7929 15.8622 13.0721 16.6632 13.0721C17.4704 13.0721 18.1137 13.7992 18.1011 14.6781C18.1011 15.5632 17.4704 16.284 16.6632 16.284Z" fill="currentColor"></path> </svg>
          </div>

          <div className={styles.socialsBg}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">      <path fillRule="evenodd" clipRule="evenodd" d="M13.591 6.00441C11.5868 6.11515 9.75158 6.92966 8.34448 8.333C7.44444 9.23064 6.78641 10.2982 6.39238 11.5002C6.01229 12.6596 5.90552 13.9193 6.08439 15.1343C6.18456 15.8146 6.36736 16.4631 6.63981 17.1046C6.71166 17.2738 6.89438 17.6476 6.98704 17.815C7.22995 18.2538 7.52906 18.6904 7.84853 19.0725C8.16302 19.4486 8.56717 19.8479 8.94482 20.1556C9.6776 20.7526 10.5183 21.2186 11.4085 21.5211C11.8412 21.6681 12.259 21.7723 12.7342 21.8517L12.751 21.8545V19.0664V16.2783H11.7348H10.7186V15.1231V13.9678H11.7344H12.7503L12.7531 12.9265C12.756 11.8203 12.7553 11.845 12.7927 11.5862C12.9306 10.6339 13.3874 9.91646 14.1198 9.50212C14.4564 9.31168 14.8782 9.18341 15.331 9.13374C15.791 9.0833 16.55 9.12126 17.351 9.23478C17.4659 9.25105 17.5612 9.26437 17.5629 9.26437C17.5646 9.26437 17.566 9.70662 17.566 10.2472V11.2299L16.9679 11.233C16.3284 11.2363 16.299 11.2379 16.1298 11.2771C15.6926 11.3785 15.4015 11.6608 15.2983 12.0834C15.2566 12.2542 15.256 12.2685 15.256 13.1531V13.9678H16.3622C17.3606 13.9678 17.4685 13.9689 17.4685 13.9795C17.4685 13.9921 17.1263 16.2236 17.1191 16.2578L17.1148 16.2783H16.1854H15.256V19.0647V21.8511L15.2954 21.8459C15.4396 21.8271 15.8337 21.7432 16.0548 21.6844C16.5933 21.5411 17.079 21.3576 17.581 21.1076C19.3154 20.2441 20.6895 18.7615 21.4192 16.9663C21.7498 16.153 21.936 15.3195 21.9915 14.4052C22.0028 14.2197 22.0028 13.7268 21.9916 13.5415C21.9403 12.6947 21.7817 11.9389 21.4942 11.1712C20.8665 9.49533 19.6589 8.05123 18.1135 7.12853C17.7376 6.90413 17.2813 6.68103 16.8985 6.53456C16.1262 6.23908 15.3815 6.07432 14.5323 6.01114C14.3897 6.00053 13.7447 5.99591 13.591 6.00441Z" fill="currentColor"></path>    </svg>
          </div>

          <div className={styles.socialsBg}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">      <path fillRule="evenodd" clipRule="evenodd" d="M11.1213 6.00507C10.5981 6.02559 9.96558 6.0872 9.6431 6.14903C7.77505 6.50724 6.50522 7.77703 6.14804 9.644C6.0118 10.3562 6 10.7031 6 14.0006C6 17.298 6.0118 17.6449 6.14804 18.3572C6.50522 20.2241 7.776 21.4948 9.6431 21.852C10.3554 21.9882 10.7023 22 14 22C17.2977 22 17.6446 21.9882 18.3569 21.852C20.224 21.4948 21.4948 20.2241 21.852 18.3572C21.9882 17.6449 22 17.298 22 14.0006C22 10.7031 21.9882 10.3562 21.852 9.644C21.4935 7.77016 20.2144 6.49675 18.3396 6.14716C17.6551 6.01955 17.3874 6.00985 14.334 6.00234C12.707 5.99836 11.2612 5.99957 11.1213 6.00507ZM17.6262 7.50836C18.2783 7.59344 18.7654 7.73848 19.1427 7.95992C19.3813 8.09994 19.9011 8.61966 20.0411 8.85821C20.2728 9.253 20.4142 9.74012 20.4952 10.4223C20.5551 10.9261 20.5551 17.075 20.4952 17.5789C20.4142 18.261 20.2728 18.7482 20.0411 19.143C19.9011 19.3815 19.3813 19.9012 19.1427 20.0412C18.7479 20.2729 18.2608 20.4143 17.5785 20.4953C17.0747 20.5552 10.9253 20.5552 10.4215 20.4953C9.73923 20.4143 9.25207 20.2729 8.85726 20.0412C8.61869 19.9012 8.09893 19.3815 7.9589 19.143C7.72724 18.7482 7.58578 18.261 7.50476 17.5789C7.44493 17.075 7.44493 10.9261 7.50476 10.4223C7.56313 9.93096 7.62729 9.63856 7.74686 9.31938C7.88402 8.95319 8.02204 8.72965 8.28724 8.44428C8.87822 7.8083 9.55222 7.55184 10.8191 7.48098C11.5114 7.44227 17.2981 7.46552 17.6262 7.50836ZM17.9602 8.80646C17.7222 8.8876 17.4343 9.18659 17.358 9.43194C17.1268 10.175 17.8258 10.874 18.569 10.6429C18.8334 10.5606 19.1165 10.2776 19.1987 10.013C19.2689 9.78758 19.251 9.52441 19.1511 9.31187C19.071 9.14148 18.8248 8.90306 18.6554 8.83162C18.4699 8.75347 18.1498 8.74189 17.9602 8.80646ZM13.6183 9.8962C12.6459 9.99712 11.7694 10.4112 11.0899 11.0907C9.99978 12.1807 9.61075 13.7764 10.076 15.2492C10.4746 16.5107 11.4897 17.5257 12.7513 17.9243C13.5638 18.1809 14.4362 18.1809 15.2487 17.9243C16.5103 17.5257 17.5254 16.5107 17.924 15.2492C18.1806 14.4367 18.1806 13.5644 17.924 12.752C17.5254 11.4904 16.5103 10.4754 15.2487 10.0769C14.7428 9.91709 14.1016 9.84604 13.6183 9.8962ZM14.6362 11.4119C14.9255 11.4811 15.4416 11.7393 15.6794 11.9337C15.9731 12.1738 16.2113 12.4794 16.3856 12.8396C16.5969 13.2766 16.6509 13.5128 16.6509 14.0006C16.6509 14.4884 16.5969 14.7246 16.3856 15.1615C16.1137 15.7235 15.7253 16.1118 15.161 16.3855C14.7247 16.5972 14.4883 16.6513 14 16.6513C13.5117 16.6513 13.2753 16.5972 12.839 16.3855C12.2747 16.1118 11.8863 15.7235 11.6144 15.1615C11.5298 14.9866 11.4355 14.7433 11.4049 14.6208C11.3288 14.3169 11.3288 13.6843 11.4049 13.3803C11.482 13.0724 11.7369 12.5611 11.933 12.3213C12.3447 11.8177 12.9934 11.449 13.6224 11.3611C13.8845 11.3244 14.3734 11.3489 14.6362 11.4119Z" fill="currentColor"></path>    </svg>
          </div>
          <div className={styles.socialsBg}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">      <path d="M14.4861 5H17.6354C17.6354 5 17.4557 8.79324 22 9.07128V12.0006C22 12.0006 19.5694 12.1396 17.6354 10.7494L17.6671 16.8067C17.6671 17.8913 17.3247 18.9514 16.6832 19.853C16.0418 20.7546 15.1301 21.4572 14.0635 21.8718C12.997 22.2863 11.8235 22.3943 10.6916 22.182C9.55971 21.9697 8.52029 21.4467 7.70487 20.6791C6.88946 19.9115 6.3347 18.9339 6.11081 17.87C5.88691 16.806 6.00395 15.7036 6.44709 14.7022C6.89024 13.7008 7.63959 12.8454 8.6003 12.2443C9.56101 11.6432 10.6899 11.3234 11.8441 11.3254H12.6579V14.3342C12.1269 14.1796 11.5576 14.1863 11.0309 14.3533C10.5043 14.5203 10.0471 14.8392 9.72446 15.2645C9.40182 15.6898 9.23016 16.1999 9.23391 16.7221C9.23766 17.2444 9.41662 17.7523 9.74533 18.1735C10.074 18.5946 10.5358 18.9077 11.0648 19.068C11.5938 19.2284 12.1631 19.2279 12.6918 19.0665C13.2205 18.9052 13.6816 18.5914 14.0094 18.1696C14.3372 17.7478 14.5152 17.2396 14.5178 16.7174L14.4861 5Z" fill="currentColor"></path>    </svg>
          </div>
          <div className={styles.socialsBg}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">      <path d="M21.68 10.7286C22 11.9386 22 14.5 22 14.5C22 14.5 22 17.0614 21.68 18.2714C21.5909 18.6122 21.4103 18.9233 21.157 19.1721C20.9037 19.4208 20.587 19.5982 20.24 19.6857C19.008 20 14 20 14 20C14 20 8.992 20 7.76 19.6857C7.41301 19.5982 7.09631 19.4208 6.843 19.1721C6.58968 18.9233 6.40906 18.6122 6.32 18.2714C6 17.0614 6 14.5 6 14.5C6 14.5 6 11.9386 6.32 10.7286C6.512 10.0371 7.056 9.50286 7.76 9.31429C8.992 9 14 9 14 9C14 9 19.008 9 20.24 9.31429C20.944 9.50286 21.488 10.0371 21.68 10.7286ZM12.4 16.8571L16.56 14.5L12.4 12.1429V16.8571Z" fill="currentColor"></path>    </svg>
          </div>
        </div>

        <div className={styles.navFooterContainer}>
          <div className={styles.navFooter}>Your Account</div>
          <div className={styles.navFooter}>|</div>
          <div className={styles.navFooter}>FAQ</div>
          <div className={styles.navFooter}>|</div>
          <div className={styles.navFooter}>Contact Us</div>
          <div className={styles.navFooter}>|</div>
          <div className={styles.navFooter}>Blog</div>
          <div className={styles.navFooter}>|</div>
          <div className={styles.navFooter}>Search</div>
          <div className={styles.navFooter}>|</div>
          <div className={styles.navFooter}>Terms</div>
        </div>
        <p className={styles.credits}>Copyright © 2024 MordexFix LLC.</p>
        <p className={styles.credits}>Powered by Shopify</p>
      </div>
    </div>
  );
}

export default Footer;
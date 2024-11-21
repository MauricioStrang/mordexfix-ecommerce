import styles from "./footer.module.css" 

const Footer =()=> {
  return (

    <div className={styles.container}>
      <div className={styles.boxContainer}>
      <div className={styles.leftBox}>
        <h1 className={styles.title}>Follow us</h1>
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
          <div className={styles.navFooter}>Contact us</div>
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

    <div className={styles.rightBoxWrapper}>
      <div className={styles.rightBox}>
        <div className={styles.mailingContainer}>
          <h1 className={styles.title}>Subscribe</h1>
          <p className={styles.subTitle}>Sign up for our MordexFix mailing list.</p>
          <div className={styles.mailingContainer}>
            <input type="text" placeholder="Email adress" className={styles.emailBox}/>
            <button className={styles.emailButton}>Sign up</button>
          </div>
        </div>
        <div className={styles.selectContainer}>
          <select className={styles.selectCountry}  id="countries">
            <option value="">Select your Currency</option>
            <option value="">Argentina {"(ARS)"}</option>
            <option value="">Australia {"(AUD)"}</option>
            <option value="">United States {"(USD)"}</option>
            <option value="">Japan {"(JPY)"}</option>   
          </select>
        </div>

        <div className={styles.cardsContainer}>
          <svg height="27" width="45" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" aria-labelledby="pi-amazon"><title id="pi-amazon">Amazon</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" fillRule="nonzero" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF" fillRule="nonzero"></path><path d="M25.26 16.23c-1.697 1.48-4.157 2.27-6.275 2.27-2.97 0-5.644-1.3-7.666-3.463-.16-.17-.018-.402.173-.27 2.183 1.504 4.882 2.408 7.67 2.408 1.88 0 3.95-.46 5.85-1.416.288-.145.53.222.248.47v.001zm.706-.957c-.216-.328-1.434-.155-1.98-.078-.167.024-.193-.148-.043-.27.97-.81 2.562-.576 2.748-.305.187.272-.047 2.16-.96 3.063-.14.138-.272.064-.21-.12.205-.604.664-1.96.446-2.29h-.001z" fill="#F90" fillRule="nonzero"></path><path d="M21.814 15.291c-.574-.498-.676-.73-.993-1.205-.947 1.012-1.618 1.315-2.85 1.315-1.453 0-2.587-.938-2.587-2.818 0-1.467.762-2.467 1.844-2.955.94-.433 2.25-.51 3.25-.628v-.235c0-.43.033-.94-.208-1.31-.212-.333-.616-.47-.97-.47-.66 0-1.25.353-1.392 1.085-.03.163-.144.323-.3.33l-1.677-.187c-.14-.033-.296-.153-.257-.38.386-2.125 2.223-2.766 3.867-2.766.84 0 1.94.234 2.604.9.842.82.762 1.918.762 3.11v2.818c0 .847.335 1.22.65 1.676.113.164.138.36-.003.482-.353.308-.98.88-1.326 1.2a.367.367 0 0 1-.414.038zm-1.659-2.533c.34-.626.323-1.214.323-1.918v-.392c-1.25 0-2.57.28-2.57 1.82 0 .782.386 1.31 1.05 1.31.487 0 .922-.312 1.197-.82z" fill="#221F1F"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="45" height="27"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"></path><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"></path><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" x="0" y="0" width="45" height="27" viewBox="0 0 165.521 105.965"  aria-labelledby="pi-apple_pay"><title id="pi-apple_pay">Apple Pay</title><path fill="#000" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"></path><path fill="#FFF" d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"></path><g><g><path fill="#000" d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"></path><path fill="#000" d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"></path></g><g><path fill="#000" d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"></path><path fill="#000" d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"></path><path fill="#000" d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"></path></g></g></svg>
          <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="45" height="27" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"></path></svg>
          <svg viewBox="0 0 38 24" width="45" height="27" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"></path><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"></path><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"></path><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"></path><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"></path><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"></path><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"></path><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stopColor="#F89F20"></stop><stop offset=".25" stopColor="#F79A20"></stop><stop offset=".533" stopColor="#F68D20"></stop><stop offset=".62" stopColor="#F58720"></stop><stop offset=".723" stopColor="#F48120"></stop><stop offset="1" stopColor="#F37521"></stop></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stopColor="#F58720"></stop><stop offset=".359" stopColor="#E16F27"></stop><stop offset=".703" stopColor="#D4602C"></stop><stop offset=".982" stopColor="#D05B2E"></stop></linearGradient></defs></svg>
          <svg width="45" height="27" role="img" aria-labelledby="pi-metapay" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-metapay">Meta Pay</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"></path><path d="M4.983 12.986c0 .348.076.614.176.776a.6.6 0 00.524.3c.257 0 .491-.063.943-.688.362-.5.788-1.204 1.076-1.645l.486-.747c.337-.518.728-1.095 1.176-1.486.366-.319.76-.496 1.158-.496.667 0 1.302.386 1.788 1.111.532.794.79 1.793.79 2.825 0 .613-.12 1.064-.326 1.42-.2.345-.587.688-1.238.688v-.981c.558 0 .697-.513.697-1.1 0-.836-.195-1.764-.624-2.427-.305-.47-.7-.757-1.134-.757-.47 0-.848.354-1.274.986-.226.336-.457.745-.718 1.207l-.287.508c-.576 1.02-.722 1.254-1.01 1.637-.504.672-.935.927-1.502.927-.674 0-1.1-.291-1.363-.73C4.106 13.956 4 13.486 4 12.95l.983.035z" fill="#0081FB"></path><path d="M4.775 10.18C5.225 9.486 5.875 9 6.622 9c.432 0 .861.128 1.31.494.49.4 1.013 1.06 1.665 2.146l.234.39c.565.94.886 1.424 1.074 1.652.242.293.411.38.631.38.558 0 .697-.512.697-1.099l.867-.027c0 .613-.12 1.064-.326 1.42-.2.345-.587.688-1.238.688-.405 0-.764-.088-1.16-.462-.306-.287-.663-.798-.937-1.257l-.816-1.363c-.41-.684-.785-1.194-1.003-1.425-.234-.249-.534-.549-1.014-.549-.388 0-.718.273-.994.69l-.837-.498z" fill="url(#pi-paint0_linear_1164_3)"></path><path d="M6.606 9.988c-.388 0-.718.273-.994.69-.39.588-.629 1.466-.629 2.308 0 .348.076.614.176.776l-.838.552C4.106 13.956 4 13.486 4 12.95c0-.973.267-1.987.775-2.77C5.225 9.485 5.875 9 6.622 9l-.016.988z" fill="url(#pi-paint1_linear_1164_3)"></path><path d="M15.01 9.191h1.138l1.933 3.498 1.934-3.498h1.112v5.747h-.928v-4.405l-1.695 3.05h-.87l-1.696-3.05v4.405h-.927V9.191zm9.023 2.143c-.665 0-1.066.5-1.162 1.12h2.258c-.046-.638-.415-1.12-1.096-1.12zm-2.081 1.474c0-1.305.843-2.254 2.097-2.254 1.234 0 1.971.937 1.971 2.323v.255h-3.148c.111.674.559 1.129 1.28 1.129.576 0 .936-.176 1.277-.497l.493.603c-.465.427-1.055.674-1.803.674-1.358 0-2.167-.99-2.167-2.233zm5.193-1.392h-.854v-.76h.854V9.402h.895v1.256h1.297v.76H28.04v1.924c0 .657.21.89.726.89.236 0 .371-.02.57-.053v.752c-.248.07-.485.102-.742.102-.966 0-1.45-.528-1.45-1.584v-2.032zm5.96.739a1.207 1.207 0 00-1.17-.788c-.766 0-1.256.543-1.256 1.428 0 .863.451 1.433 1.22 1.433.603 0 1.034-.351 1.206-.788v-1.285zM34 14.938h-.878v-.6c-.246.353-.693.703-1.417.703-1.164 0-1.941-.975-1.941-2.246 0-1.283.796-2.241 1.99-2.241.591 0 1.055.236 1.368.653v-.55H34v4.281z" fill="#000000"></path><defs><linearGradient id="pi-paint0_linear_1164_3" x1="5.93" y1="12.703" x2="12.196" y2="13.019" gradientUnits="userSpaceOnUse"><stop stopColor="#0064E1"></stop><stop offset=".4" stopColor="#0064E1"></stop><stop offset=".83" stopColor="#0073EE"></stop><stop offset="1" stopColor="#0082FB"></stop></linearGradient><linearGradient id="pi-paint1_linear_1164_3" x1="5.424" y1="13.399" x2="5.424" y2="11.089" gradientUnits="userSpaceOnUse"><stop stopColor="#0082FB"></stop><stop offset="1" stopColor="#0064E0"></stop></linearGradient></defs></svg>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="45" height="27" aria-labelledby="pi-google_pay"><title id="pi-google_pay">Google Pay</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path><path d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z" fill="#5F6368"></path><path d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z" fill="#4285F4"></path><path d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z" fill="#34A853"></path><path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z" fill="#FBBC04"></path><path d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z" fill="#EA4335"></path></svg>
          <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="45" height="27" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="45" height="27" aria-labelledby="pi-shopify_pay"><title id="pi-shopify_pay">Shop Pay</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"></path><path d="M35.889 0C37.05 0 38 .982 38 2.182v19.636c0 1.2-.95 2.182-2.111 2.182H2.11C.95 24 0 23.018 0 21.818V2.182C0 .982.95 0 2.111 0H35.89z" fill="#5A31F4"></path><path d="M9.35 11.368c-1.017-.223-1.47-.31-1.47-.705 0-.372.306-.558.92-.558.54 0 .934.238 1.225.704a.079.079 0 00.104.03l1.146-.584a.082.082 0 00.032-.114c-.475-.831-1.353-1.286-2.51-1.286-1.52 0-2.464.755-2.464 1.956 0 1.275 1.15 1.597 2.17 1.82 1.02.222 1.474.31 1.474.705 0 .396-.332.582-.993.582-.612 0-1.065-.282-1.34-.83a.08.08 0 00-.107-.035l-1.143.57a.083.083 0 00-.036.111c.454.92 1.384 1.437 2.627 1.437 1.583 0 2.539-.742 2.539-1.98s-1.155-1.598-2.173-1.82v-.003zM15.49 8.855c-.65 0-1.224.232-1.636.646a.04.04 0 01-.069-.03v-2.64a.08.08 0 00-.08-.081H12.27a.08.08 0 00-.08.082v8.194a.08.08 0 00.08.082h1.433a.08.08 0 00.081-.082v-3.594c0-.695.528-1.227 1.239-1.227.71 0 1.226.521 1.226 1.227v3.594a.08.08 0 00.081.082h1.433a.08.08 0 00.081-.082v-3.594c0-1.51-.981-2.577-2.355-2.577zM20.753 8.62c-.778 0-1.507.24-2.03.588a.082.082 0 00-.027.109l.632 1.088a.08.08 0 00.11.03 2.5 2.5 0 011.318-.366c1.25 0 2.17.891 2.17 2.068 0 1.003-.736 1.745-1.669 1.745-.76 0-1.288-.446-1.288-1.077 0-.361.152-.657.548-.866a.08.08 0 00.032-.113l-.596-1.018a.08.08 0 00-.098-.035c-.799.299-1.359 1.018-1.359 1.984 0 1.46 1.152 2.55 2.76 2.55 1.877 0 3.227-1.313 3.227-3.195 0-2.018-1.57-3.492-3.73-3.492zM28.675 8.843c-.724 0-1.373.27-1.845.746-.026.027-.069.007-.069-.029v-.572a.08.08 0 00-.08-.082h-1.397a.08.08 0 00-.08.082v8.182a.08.08 0 00.08.081h1.433a.08.08 0 00.081-.081v-2.683c0-.036.043-.054.069-.03a2.6 2.6 0 001.808.7c1.682 0 2.993-1.373 2.993-3.157s-1.313-3.157-2.993-3.157zm-.271 4.929c-.956 0-1.681-.768-1.681-1.783s.723-1.783 1.681-1.783c.958 0 1.68.755 1.68 1.783 0 1.027-.713 1.783-1.681 1.783h.001z" fill="#fff"></path></svg>
          <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="45" height="27" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
        </div>
       
    </div>
    </div>
    
      </div>
    
      </div>
      
      
    
  );
}

export default Footer;
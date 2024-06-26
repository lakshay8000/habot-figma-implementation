import "./WhatWeOfferBox.css";

function WhatWeOfferBox() {
    return (
        <div id="what-we-offer-container">
            <div id="box-heading-container">
                <span>How it works?</span>
            </div>
            <span id="box-description">
                Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
            </span>

            <div id="offers-container">
                <section id="create-account-section">
                    <div id="create-account-logo">

                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.1982 0.041748C8.17599 0.041748 0.0419922 8.17575 0.0419922 18.198C0.0419922 28.2202 8.17599 36.3542 18.1982 36.3542C28.2205 36.3542 36.3545 28.2202 36.3545 18.198C36.3545 8.17575 28.2205 0.041748 18.1982 0.041748ZM20.792 15.6042V12.1459C20.792 10.7142 19.63 9.55216 18.1982 9.55216C16.7665 9.55216 15.6045 10.7142 15.6045 12.1459V15.6042H12.1462C10.7144 15.6042 9.55241 16.7662 9.55241 18.198C9.55241 19.6297 10.7144 20.7917 12.1462 20.7917H15.6045V24.2501C15.6045 25.6818 16.7665 26.8438 18.1982 26.8438C19.63 26.8438 20.792 25.6818 20.792 24.2501V20.7917H24.2503C25.6821 20.7917 26.8441 19.6297 26.8441 18.198C26.8441 16.7662 25.6821 15.6042 24.2503 15.6042H20.792Z" fill="#EB7150" />
                        </svg>
                        <svg width="41" height="30" viewBox="0 0 41 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M40.3968 29.9373C36.7897 26.0778 34.5833 20.8937 34.5833 15.1979C34.5833 9.38441 36.8831 4.10699 40.6181 0.219827C38.9339 0.091869 37.2048 0.0227051 35.4479 0.0227051C23.9593 0.0227051 13.7884 2.89658 7.47346 7.2022C2.656 10.4876 0 14.6618 0 19.0435V24.0616C0 25.6178 0.619042 27.1153 1.72225 28.2185C2.82546 29.3182 4.31946 29.9407 5.87917 29.9407L40.3968 29.9373Z" fill="black" />
                        </svg>
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.4476 38.0417C29.9525 38.0417 38.4684 29.5258 38.4684 19.0208C38.4684 8.51592 29.9525 0 19.4476 0C8.94268 0 0.426758 8.51592 0.426758 19.0208C0.426758 29.5258 8.94268 38.0417 19.4476 38.0417Z" fill="black" />
                        </svg>

                    </div>

                    <span className="offers-span">Select Your Role and Sign Up</span>
                </section>

                <section id="buyers-post-section">
                    <div id="buyers-post-logo">
                        <div>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1889 0.22583C6.44631 0.22583 0.14711 6.51381 0.14711 14.2428C0.14711 21.9718 6.44615 28.2598 14.1889 28.2598C21.9317 28.2598 28.2308 21.9718 28.2308 14.2428C28.2308 6.51381 21.9317 0.22583 14.1889 0.22583ZM13.9601 20.7401C13.159 21.5978 11.8024 21.7332 10.8473 21.0513L5.4117 17.172L8.16923 13.3218L11.9115 15.9927L19.7768 7.57086L23.2449 10.7984L13.9601 20.7401Z" fill="#EB7150" />
                            </svg>
                            <svg width="53" height="75" viewBox="0 0 53 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50.1889 31.4928C50.9841 31.4928 51.7755 31.5426 52.5596 31.6415V18.2038H38.7921C37.4829 18.2038 36.5119 17.1958 36.5119 15.8889V0H0.951602C0.851121 0 0.76923 0.0815705 0.76923 0.182051V74.818C0.76923 74.9184 0.851121 75 0.951602 75H52.3774C52.478 75 52.5598 74.9184 52.5598 74.818V68.8439C51.7756 68.9429 50.9843 68.9926 50.1891 68.9926C40.6349 68.9926 32.7242 61.8348 31.5551 52.6091H8.79311V47.8761H31.555C32.724 38.6505 40.6349 31.4928 50.1889 31.4928ZM32.5 60.6189V65.3519H8.79311V60.6189H32.5ZM8.79311 9.64808H28.4881V14.3811H8.79311V9.64808ZM8.79311 22.3907H44.9005V27.1237H8.79311V22.3907ZM32.5 39.8665H8.79311V35.1335H32.5V39.8665Z" fill="black" />
                            </svg>
                            <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.253368 10.4709H8.67644L0.253368 0.891846V10.4709Z" fill="black" />
                            </svg>
                        </div>
                    </div>

                    <span className="offers-span">Buyers Post Your Requirements</span>
                </section>

                <section id="review-section">
                    <div id="review-logo">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.7533 19.5369C12.6018 19.5369 12.299 19.3854 11.9961 19.234L1.69822 9.08757C0.638143 8.02749 0.789582 6.36166 1.69822 5.45303L5.63563 1.36417C6.54427 0.455537 8.36154 0.304098 9.42161 1.36417L19.7195 11.5106C20.0224 11.8135 20.1738 12.5707 19.7195 13.025L13.6619 19.0826C13.359 19.3854 13.0562 19.5369 12.7533 19.5369Z" fill="#EB7150" />
                        </svg>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.42436 8.30146C7.12148 8.30146 6.81861 8.15002 6.66717 7.99858L1.21536 2.69821C0.155285 1.63813 1.66968 0.123741 2.72975 1.03238L8.18156 6.48419C8.93875 7.08994 8.333 8.30146 7.42436 8.30146Z" fill="#EB7150" />
                        </svg>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.40534 7.6771C11.4942 3.4368 18.309 3.4368 22.5493 7.52566C29.364 14.3404 24.6694 26.0012 15.1287 26.0012C6.04239 26.0012 0.590578 14.9462 7.40534 7.6771ZM0.136261 15.4005C0.136261 2.07385 16.0374 -4.43803 25.4266 4.64832C31.0298 10.1001 31.4842 18.8836 26.4867 24.7897L30.4241 28.7271L28.9097 30.2415L24.9723 26.4556C15.7345 34.7847 0.2877 28.4243 0.136261 15.4005Z" fill="#EB7150" />
                        </svg>
                        <svg width="55" height="74" viewBox="0 0 55 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M50.2778 73.2965H4.2403C1.81727 73.2965 0 71.3278 0 69.0562V4.2403C0 1.96871 1.96871 0 4.2403 0H50.2778C52.7008 0 54.5181 1.96871 54.5181 4.2403V33.1652C47.8548 28.622 38.7684 29.5306 32.8623 35.4368C26.3504 41.9486 26.5018 53.0037 33.1652 59.5156C38.9199 65.1188 47.8548 65.876 54.5181 61.4843V69.0562C54.5181 71.3278 52.7008 73.2965 50.2778 73.2965ZM29.0763 65.7246H8.32915C6.9662 65.7246 6.9662 63.6044 8.32915 63.6044H28.9249C30.4393 63.6044 30.4393 65.7246 29.0763 65.7246ZM24.836 56.3354H8.32915C6.9662 56.3354 6.9662 54.2152 8.32915 54.2152H24.836C26.3504 54.2152 26.3504 56.3354 24.836 56.3354ZM22.5644 47.0976H8.32915C6.9662 47.0976 6.9662 44.826 8.32915 44.826H22.5644C24.0788 44.826 24.0788 47.0976 22.5644 47.0976ZM25.5932 37.7083H8.32915C6.9662 37.7083 6.9662 35.4368 8.32915 35.4368H25.5932C27.1076 35.4368 27.1076 37.7083 25.5932 37.7083ZM46.0375 28.3191H8.32915C6.9662 28.3191 6.9662 26.0475 8.32915 26.0475H46.0375C47.5519 26.0475 47.5519 28.3191 46.0375 28.3191ZM35.7396 18.9299H18.7785C17.2641 18.9299 17.2641 16.6583 18.7785 16.6583H35.7396C37.254 16.6583 37.254 18.9299 35.7396 18.9299Z" fill="black" />
                        </svg>
                    </div>

                    <span> Review, Select, and Contact the Best Suppliers</span>
                </section>

                <section id="profile-section">

                    <div id="profile-logo">
                        <div>

                            <div id="profile-logo-box">
                                <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1055 5.08594C16.3126 3.4541 13.9128 2.44922 11.272 2.44922H9.41162C6.77065 2.44922 4.37095 3.4541 2.57812 5.08594" stroke="black" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.1875 3.16406H21.3516" stroke="black" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.7964 5.16841C33.8283 8.20034 33.8283 13.1161 30.7964 16.1479L20.5265 26.4177C17.9771 28.9671 14.7301 30.7046 11.195 31.4111L2.89447 33.0703L4.5537 24.7698C5.26019 21.2347 6.99765 17.9877 9.54706 15.4383L19.8169 5.16841C22.8487 2.13647 27.7644 2.13647 30.7964 5.16841Z" stroke="#EB7150" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg width="15" height="6" viewBox="0 0 15 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.28516 3.17969H11.9531" stroke="black" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.28516 2.92578H23.6719" stroke="black" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.1875 2.41797H21.3516" stroke="black" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2012 8.50781C14.2012 11.7439 11.5779 14.3672 8.3418 14.3672C5.10566 14.3672 2.48242 11.7439 2.48242 8.50781C2.48242 5.27168 5.10566 2.64844 8.3418 2.64844C11.5779 2.64844 14.2012 5.27168 14.2012 8.50781Z" stroke="black" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.1758 72.0701H17.5781C9.48794 72.0701 2.92969 65.5118 2.92969 57.4216V17.5779C2.92969 9.4877 9.48794 2.92945 17.5781 2.92945H57.4219C65.5121 2.92945 72.0703 9.4877 72.0703 17.5779V32.2263" stroke="black" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                        </div>
                    </div>

                    <span>Suppliers Complete your profile and get notified for opportunities</span>
                </section>

                <section id="quote-section">
                    <div id="quote-logo">
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.885452 20.9618L21.2029 0.644309L25.1163 4.5577L4.79884 24.8752L0.885452 20.9618Z" fill="#EB7150" />
                        </svg>
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.70547 3.97925L2.79155 0.0651855L0.694336 2.16241V6.07647L4.6081 6.07662L6.70547 3.97925Z" fill="#EB7150" />
                        </svg>
                        <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 3.53813C7 2.79883 6.71216 2.10391 6.1895 1.5811C5.11035 0.5021 3.35459 0.5021 2.27544 1.5811L0.318703 3.53784L4.23277 7.4519L6.1895 5.49517C6.71216 4.97251 7 4.27744 7 3.53813Z" fill="#EB7150" />
                        </svg>
                        <svg width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.7668 5.53486L55.7093 5.53442C55.3509 4.68276 55.1528 3.7479 55.1528 2.76763C55.1528 1.78721 55.3512 0.851904 55.7096 0.000244154H2.76738C1.24146 9.76692e-05 0 1.24155 0 2.76748C0 4.29355 1.24131 5.53486 2.7668 5.53486Z" fill="black" />
                        </svg>
                        <svg width="57" height="75" viewBox="0 0 57 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.4258 69.4654L26.3054 69.4651V59.5411H6.18223V55.1522H30.4976L36.0324 49.6175H6.18223V45.2287H40.4212L45.956 39.6939H6.18223V35.3051H50.3448L56.0764 29.5734V2.76738C56.0764 1.24146 54.835 0 53.309 0C51.7831 0 50.5417 1.24146 50.5417 2.76738C50.5417 4.29302 51.7828 5.53418 53.3086 5.53418H53.309V9.923L0.923584 9.92344V75H56.0764V49.8149L36.4258 69.4654ZM6.18223 25.3816H30.9708V29.7705H6.18223V25.3816Z" fill="black" />
                        </svg>
                    </div>
                    <span>
                        Contact to Buyers and Share your Quote for the service
                    </span>
                </section>

                <section id="connect-section">
                    <div>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.42516 6.07182L8.06182 5.08297C8.38692 4.59532 8.54947 4.01285 8.54947 3.40328C8.54947 2.3467 8.02118 1.3714 7.15424 0.816018C6.16539 0.179361 4.87854 0.17936 3.86259 0.788925C3.75423 0.843109 3.71359 0.897291 3.64586 0.951474C3.63231 0.96502 3.60522 0.97857 3.59168 0.992116C3.57813 0.992116 3.57813 1.00566 3.56458 1.0192C3.5104 1.05984 3.44267 1.14112 3.38849 1.1953C3.0092 1.66941 2.04744 2.91563 1.19405 4.03994C0.7064 4.73078 0.516758 5.55708 0.665763 6.38338C0.828314 7.22322 1.30242 7.92761 2.02035 8.38817L2.20999 8.51008C2.87374 8.94355 3.70004 9.1061 4.4857 8.93001C5.29846 8.75391 5.9893 8.2798 6.43631 7.58896L7.42516 6.07182C7.41162 6.08537 7.41162 6.08537 7.42516 6.07182Z" fill="black" />
                        </svg>
                        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M57.138 24.9085C56.8535 24.895 56.4878 24.8272 56.122 24.7595C55.8511 24.7189 55.526 24.6511 55.2009 24.5428C54.9842 24.4886 54.7132 24.3938 54.4559 24.3125C54.1579 24.2041 53.8463 24.0822 53.5347 23.9468C52.6136 23.5404 51.7331 22.9985 50.8798 22.3348L36.494 10.8208C35.302 9.85903 33.6629 9.69648 32.3083 10.4009L30.8318 11.173C27.3912 12.9881 23.219 13.0694 19.6971 11.3897C18.2342 10.6989 17.313 9.24947 17.313 7.62396C17.313 6.4861 17.76 5.42952 18.5863 4.63032L21.7425 1.60958H16.1481C15.1321 1.60958 14.1568 1.24384 13.4118 0.580095L13.019 0.214355L5.01336 11.0917C4.97272 11.1323 4.94563 11.1865 4.90499 11.2272L4.18706 12.2025L1.96554 15.2232L0.245209 17.5531L1.07151 18.1762C2.25 19.0296 2.96793 20.4519 2.96793 21.9691V22.3619C3.98388 21.3053 5.31137 20.6145 6.78787 20.4248C8.5082 20.2081 10.2014 20.6687 11.556 21.7252C13.1409 22.9715 14.0349 24.8272 14.0349 26.832C14.0349 26.9404 14.0078 27.0488 14.0078 27.1571C14.1568 27.13 14.3058 27.0759 14.4549 27.0623C16.1074 26.8727 17.733 27.3332 19.0334 28.3898C20.7808 29.8121 21.5664 31.9253 21.3497 33.9572C22.7178 33.8082 24.1402 34.1604 25.3322 35.0544C26.7681 36.1245 27.6079 37.7771 27.6079 39.5923C27.6079 39.6329 27.5944 39.6735 27.5944 39.7277C28.976 39.511 30.4255 39.7819 31.631 40.554C33.2836 41.6241 34.2725 43.4393 34.2725 45.417C34.2725 46.5548 33.9474 47.6385 33.3514 48.5596L33.392 48.5867C34.6247 49.5214 36.5076 49.413 37.6048 48.3023C38.2685 47.6385 38.6072 46.7445 38.5394 45.8098C38.4853 44.8887 38.0247 44.0353 37.2797 43.4664L29.2199 37.1811C28.6374 36.7205 28.529 35.8671 28.9896 35.2847C29.4502 34.7022 30.3035 34.5938 30.886 35.0544L40.0972 42.2337C41.2486 43.1142 42.8741 43.0058 43.9036 41.9763C44.5132 41.3668 44.8112 40.5405 44.7435 39.6871C44.6757 38.8337 44.2423 38.0616 43.5379 37.5739C42.8335 37.0863 43.5379 37.5739 43.5243 37.5739L34.1912 30.8958C33.5816 30.4623 33.4462 29.6089 33.8797 28.9994C34.3131 28.3898 35.153 28.2544 35.7761 28.6878L45.5427 35.6775C47.0327 36.7341 49.1052 36.4767 50.2837 35.0815C50.9204 34.3229 51.2049 33.3612 51.0829 32.3858C50.961 31.4105 50.4598 30.5436 49.6606 29.9611L44.9737 26.4798L39.4064 22.3483C38.8104 21.9013 38.6749 21.0615 39.1219 20.4519C39.2303 20.3029 39.3657 20.1945 39.5012 20.1133L39.5148 20.0997C39.9753 19.8288 40.5578 19.8424 41.0183 20.1675L52.3427 28.5388C53.5754 29.4464 55.3905 29.3109 56.5148 28.2137C57.3682 27.3603 57.6527 26.087 57.287 24.9492C57.2328 24.9221 57.1786 24.9221 57.138 24.9085Z" fill="black" />
                        </svg>
                        <svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0213 0.585556C9.94003 0.382368 9.80458 0.287546 9.69621 0.246909C9.61493 0.206271 9.42529 0.165634 9.2221 0.260455L0.918472 3.94494C0.606917 4.0804 0.457912 4.43259 0.579825 4.7306L1.1623 6.16646L2.38143 9.1601L11.2269 30.9961C11.4301 31.3483 11.7552 31.4296 12.0126 31.3076L20.3297 27.6367C20.6277 27.5012 20.7632 27.1626 20.6413 26.851L10.0213 0.585556Z" fill="black" />
                        </svg>
                        <svg width="44" height="25" viewBox="0 0 44 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.799 7.9578L33.846 0.67011L32.0986 1.64541C30.8795 2.33625 29.4029 2.62072 27.9671 2.41753L12.6873 0.155365C10.818 -0.115553 8.88092 0.50756 7.52633 1.80797L6.07692 3.20319C6.07692 3.20319 6.07692 3.20319 6.06338 3.21674L0.455376 8.59445C0.089637 8.94665 0.00836182 9.35302 0.00836182 9.63749C0.00836182 10.0845 0.225097 10.6805 0.834662 10.965C3.59802 12.2925 6.84904 12.2248 9.55822 10.8024L11.0347 10.0303C11.9829 9.52912 13.026 9.2853 14.069 9.2853C15.532 9.2853 16.9814 9.77295 18.1599 10.7347L18.8913 11.3172L32.532 22.2487C33.1958 22.7635 33.8866 23.1969 34.591 23.4949C34.8213 23.5898 35.0922 23.6981 35.3496 23.7929C35.5257 23.8607 35.7153 23.9284 35.905 23.969C36.1623 24.0503 36.352 24.091 36.5416 24.118C36.8396 24.1722 37.1106 24.2264 37.3815 24.24C37.7066 24.2806 37.9369 24.2941 38.1671 24.2941C38.7496 24.3077 39.2508 24.2941 39.7114 24.2264L43.1791 23.7388L36.799 7.9578Z" fill="black" />
                        </svg>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3488 24.6485C18.9592 24.6485 24.3369 19.2707 24.3369 12.6604C24.3369 6.04996 18.9592 0.658691 12.3488 0.658691C5.73843 0.658691 0.347168 6.03641 0.347168 12.6604C0.347168 19.2707 5.73843 24.6485 12.3488 24.6485ZM6.37509 12.3623C6.90338 11.8341 7.75677 11.8341 8.28506 12.3623L10.2221 14.2994L16.3991 8.12248C16.9273 7.59419 17.7807 7.59419 18.309 8.12248C18.8373 8.65077 18.8373 9.50416 18.309 10.0324L11.1839 17.1576C10.9265 17.415 10.5879 17.5504 10.2221 17.5504C9.85638 17.5504 9.51774 17.4014 9.26036 17.1576L6.36154 14.2588C5.8468 13.744 5.8468 12.8906 6.37509 12.3623Z" fill="#EB7150" />
                        </svg>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.22125 5.47504L9.27543 5.39377C9.28898 5.38022 9.30252 5.36668 9.30252 5.35313C9.31607 5.32604 9.34316 5.2854 9.35671 5.25831C9.69535 4.77066 9.87145 4.18818 9.87145 3.59216C9.87145 2.64395 9.43798 1.77702 8.69296 1.22163C8.16467 0.828803 7.5551 0.63916 6.93199 0.63916C6.06505 0.63916 5.19812 1.01845 4.62919 1.73638L1.17499 6.01688C0.660243 6.65354 0.44351 7.45274 0.551877 8.2655C0.660244 9.06471 1.06662 9.75554 1.71682 10.2432L1.96065 10.4464C2.50248 10.8528 3.28815 11.0424 4.07381 10.934C4.85947 10.8257 5.53676 10.4057 6.01087 9.78264L9.22125 5.47504Z" fill="black" />
                        </svg>
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.26495 26.0248L12.3423 20.498L13.8188 18.4932C13.8323 18.4797 13.8323 18.4797 13.8459 18.4661L22.7049 6.45094L22.7455 6.4103L22.9487 6.13938C23.1248 5.9091 23.0842 5.52982 22.8268 5.34018L16.406 0.274013C16.2706 0.165646 16.1351 0.1521 16.0403 0.1521C16.0132 0.1521 15.9861 0.1521 15.959 0.1521C15.8642 0.165645 15.6881 0.206283 15.5526 0.38238L0.123868 21.3243C-0.0793199 21.5952 -0.0251365 21.961 0.232235 22.1777L6.5988 27.2032C6.73426 27.3116 6.89681 27.3522 7.07291 27.3252C7.18128 27.3116 7.34383 27.2574 7.47929 27.0813L8.2514 26.0383C8.2514 26.0383 8.2514 26.0248 8.26495 26.0248Z" fill="black" />
                        </svg>
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.94797 12.0272L11.5129 6.14827C12.0277 5.47097 12.3121 4.67177 12.3121 3.83192C12.3121 2.66698 11.7839 1.5833 10.8627 0.851826C10.2125 0.337082 9.41332 0.0661621 8.58702 0.0661621C8.42447 0.0661621 8.26192 0.0797086 8.09937 0.0932545C7.09697 0.215168 6.21649 0.72991 5.60693 1.51557L1.04196 7.39449C-0.217808 9.03354 0.0666569 11.3905 1.69216 12.6503C2.49137 13.2734 3.46668 13.5443 4.45553 13.4224C5.45792 13.314 6.3384 12.8128 6.94797 12.0272Z" fill="black" />
                        </svg>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9361 6.39302C12.1146 4.91652 11.8843 2.74917 10.4078 1.57068C9.70342 1.00175 8.94485 0.730835 8.15919 0.730835C8.02373 0.730835 7.88827 0.744381 7.75281 0.757927C6.83169 0.866295 6.01894 1.32685 5.46355 2.05833L0.925681 7.9237C0.410937 8.5739 0.153564 9.30538 0.153564 10.064C0.153564 11.107 0.627672 12.0823 1.44043 12.746C2.90338 13.9245 5.07072 13.6807 6.26276 12.2178L10.9361 6.39302Z" fill="black" />
                        </svg>
                    </div>
                    <span>Both the Parties can Connect and Make Business Leave a Feedback</span>
                </section>
            </div>
        </div>
    );
}

export default WhatWeOfferBox;
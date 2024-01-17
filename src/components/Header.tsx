export default function Header() {

	return (

		<header className="bg-petrolleum">

			<div className="container hidden md:flex items-center">

				<div className="py-4 flex items-center">

					<a href="/" className="py-4 flex items-center">
						<svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_455_1600)">
								<path fillRule="evenodd" clipRule="evenodd" d="M18.4536 1.69678L9.71875 10.8795L27.2475 10.9098L18.4536 1.69678Z" fill="#D4AF37" fill-opacity="0.4" />
								<path fillRule="evenodd" clipRule="evenodd" d="M18.6176 10.9097L9.98828 20.9799L27.382 20.9323L18.6176 10.9097Z" fill="#E3B829" />
								<path fillRule="evenodd" clipRule="evenodd" d="M18.474 38.9948L9.98828 20.9801L27.382 20.9325L18.474 38.9948Z" fill="#E6BF3E" />
								<path fillRule="evenodd" clipRule="evenodd" d="M18.4746 38.9948L27.3825 20.9325L36.6071 20.9671L18.4746 38.9948Z" fill="#C79D34" />
								<path fillRule="evenodd" clipRule="evenodd" d="M27.3832 20.9323L36.6078 20.9669L27.5647 10.9573L18.623 10.9097L27.3832 20.9323Z" fill="#D1A617" />
								<path fillRule="evenodd" clipRule="evenodd" d="M9.98886 20.9799L0.207031 20.9496L9.39782 10.9097H18.6266L9.98886 20.9799Z" fill="#E6C453" />
								<path fillRule="evenodd" clipRule="evenodd" d="M18.4746 38.9948L9.98887 20.9801L0.207031 20.9498L18.4746 38.9948Z" fill="#F0CD5B" />
							</g>
							<defs>
								<clipPath id="clip0_455_1600">
									<rect width="36.6066" height="38.5" fill="white" transform="translate(0 0.75)" />
								</clipPath>
							</defs>
						</svg>

						<svg width="135" height="52" viewBox="0 0 135 52" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.02011 27.0516V12.9247H3.83643V19.1809H8.07451V12.9247H9.89083V27.0516H8.07451V20.5936H3.83643V27.0516H2.02011ZM16.5562 27.2534C15.6144 27.2534 14.8475 27.0987 14.2555 26.7893C13.6635 26.4798 13.2263 25.9618 12.9437 25.2353C12.6612 24.4953 12.5199 23.4863 12.5199 22.2081V12.9247H14.3362V22.2081C14.3362 23.2172 14.4237 23.9975 14.5986 24.5492C14.7735 25.1008 15.0224 25.4909 15.3453 25.7197C15.6817 25.9349 16.0853 26.0426 16.5562 26.0426C17.0271 26.0426 17.424 25.9349 17.7469 25.7197C18.0832 25.4909 18.3389 25.1008 18.5138 24.5492C18.6887 23.9975 18.7761 23.2172 18.7761 22.2081V12.9247H20.5924V22.2081C20.5924 23.4863 20.4512 24.4953 20.1686 25.2353C19.8861 25.9618 19.4488 26.4798 18.8569 26.7893C18.2649 27.0987 17.498 27.2534 16.5562 27.2534ZM22.9038 27.0516L23.7111 12.9247H25.931L29.2206 22.6117H29.3013L32.5909 12.9247H34.8108L35.6181 27.0516H33.8017L33.1963 16.5574H33.0954L30.1691 25.2353H28.3528L25.4265 16.5574H25.3256L24.7202 27.0516H22.9038ZM37.1364 27.0516L40.5672 12.9247H43.1908L46.6216 27.0516H44.8053L43.8971 23.419H39.8609L38.9527 27.0516H37.1364ZM40.1636 22.0063H43.5944L41.9194 14.9428H41.8386L40.1636 22.0063ZM48.4332 27.0516V12.9247H50.4513L54.5885 22.9145H54.6894V12.9247H56.5057V27.0516H54.4876L50.3504 17.0619H50.2495V27.0516H48.4332ZM67.6062 27.2534C67.0008 27.2534 66.4357 27.2198 65.911 27.1525C65.3997 27.0987 64.8885 26.9978 64.3772 26.8498V13.1265C64.8885 12.9785 65.3997 12.8776 65.911 12.8238C66.4357 12.7565 67.0008 12.7229 67.6062 12.7229C68.6826 12.7229 69.5773 12.9382 70.2904 13.3687C71.0169 13.7858 71.555 14.5258 71.9049 15.5886C72.2681 16.6381 72.4498 18.1046 72.4498 19.9882C72.4498 21.8718 72.2681 23.345 71.9049 24.4079C71.555 25.4573 71.0169 26.1973 70.2904 26.6278C69.5773 27.0449 68.6826 27.2534 67.6062 27.2534ZM66.1935 25.9417H67.6062C68.2117 25.9417 68.7364 25.7735 69.1804 25.4371C69.6378 25.1008 69.9944 24.5021 70.25 23.641C70.5056 22.7799 70.6334 21.5623 70.6334 19.9882C70.6334 18.4006 70.5056 17.183 70.25 16.3354C69.9944 15.4743 69.6378 14.8756 69.1804 14.5392C68.7364 14.2029 68.2117 14.0347 67.6062 14.0347H66.1935V25.9417ZM74.862 27.0516V12.9247H81.7237V14.3374H76.6784V18.9791H81.1183V20.3918H76.6784V25.6389H81.7237V27.0516H74.862ZM86.2684 27.2534C85.663 27.2534 85.0845 27.2064 84.5328 27.1122C83.9812 27.0315 83.5507 26.944 83.2412 26.8498V25.9417H85.8648C87.0219 25.9417 87.8291 25.7399 88.2866 25.3362C88.7575 24.9191 88.9929 24.2801 88.9929 23.419C88.9929 22.827 88.8516 22.3628 88.5691 22.0265C88.3 21.6767 87.9435 21.3874 87.4995 21.1587C87.069 20.93 86.6048 20.708 86.107 20.4927C85.6226 20.2774 85.1585 20.0151 84.7145 19.7056C84.2839 19.3827 83.9274 18.9589 83.6449 18.4342C83.3758 17.9095 83.2412 17.2166 83.2412 16.3555C83.2412 15.1447 83.5507 14.2365 84.1696 13.6311C84.8019 13.0256 85.7706 12.7229 87.0757 12.7229C87.6811 12.7229 88.2597 12.7633 88.8113 12.844C89.3764 12.9247 89.8069 13.0189 90.1029 13.1265V14.0347H87.4793C86.6721 14.0347 86.0666 14.2365 85.663 14.6401C85.2594 15.0303 85.0576 15.6021 85.0576 16.3555C85.0576 16.9744 85.1921 17.4722 85.4612 17.849C85.7437 18.2122 86.1003 18.5149 86.5308 18.7571C86.9748 18.9858 87.439 19.2146 87.9233 19.4433C88.4211 19.6585 88.8853 19.9209 89.3158 20.2304C89.7598 20.5263 90.1163 20.93 90.3854 21.4412C90.668 21.939 90.8092 22.5983 90.8092 23.419C90.8092 24.7241 90.4662 25.6928 89.78 26.3251C89.1073 26.944 87.9368 27.2534 86.2684 27.2534ZM92.9346 27.0516V12.9247H94.7509V27.0516H92.9346ZM102.026 27.2534C100.949 27.2534 100.048 27.0449 99.3213 26.6278C98.6083 26.1973 98.0701 25.4573 97.7068 24.4079C97.357 23.345 97.1821 21.8718 97.1821 19.9882C97.1821 18.1046 97.357 16.6381 97.7068 15.5886C98.0566 14.5258 98.5612 13.7858 99.2204 13.3687C99.8797 12.9382 100.68 12.7229 101.622 12.7229C102.227 12.7229 102.806 12.7633 103.358 12.844C103.923 12.9247 104.353 13.0189 104.649 13.1265V14.0347H102.026C101.42 14.0347 100.889 14.2029 100.431 14.5392C99.9873 14.8756 99.6375 15.4743 99.3819 16.3354C99.1262 17.183 98.9984 18.4006 98.9984 19.9882C98.9984 21.5623 99.1262 22.7799 99.3819 23.641C99.651 24.5021 100.041 25.1008 100.552 25.4371C101.064 25.7735 101.689 25.9417 102.429 25.9417H103.237V19.3827H105.053V26.8498C104.757 26.944 104.326 27.0315 103.761 27.1122C103.21 27.2064 102.631 27.2534 102.026 27.2534ZM107.676 27.0516V12.9247H109.695L113.832 22.9145H113.933V12.9247H115.749V27.0516H113.731L109.594 17.0619H109.493V27.0516H107.676Z" fill="white" />
							<path d="M1.53099 45.1693V35.2231H2.59665L2.66769 35.6494H2.73874C2.91871 35.4694 3.14132 35.3321 3.40655 35.2373C3.67178 35.1331 3.94648 35.081 4.23066 35.081C4.7327 35.081 5.15423 35.1947 5.49524 35.4221C5.84572 35.6399 6.11095 36.0188 6.29093 36.5588C6.48038 37.0892 6.5751 37.8281 6.5751 38.7753C6.5751 39.7226 6.48038 40.4662 6.29093 41.0061C6.11095 41.5366 5.84572 41.9155 5.49524 42.1428C5.15423 42.3607 4.7327 42.4696 4.23066 42.4696C3.94648 42.4696 3.69072 42.4364 3.46338 42.3701C3.24551 42.3038 3.02765 42.2186 2.80978 42.1144V45.1693H1.53099ZM3.80439 41.6171C4.11699 41.6171 4.38222 41.5413 4.60008 41.3897C4.82742 41.2287 4.99793 40.9445 5.1116 40.5372C5.23474 40.1204 5.29631 39.5331 5.29631 38.7753C5.29631 38.0175 5.23474 37.435 5.1116 37.0276C4.99793 36.6109 4.82742 36.3267 4.60008 36.1751C4.38222 36.0141 4.11699 35.9336 3.80439 35.9336C3.62442 35.9336 3.4397 35.962 3.25025 36.0188C3.0608 36.0757 2.91398 36.142 2.80978 36.2177V41.3329C2.91398 41.3992 3.0608 41.4655 3.25025 41.5318C3.4397 41.5887 3.62442 41.6171 3.80439 41.6171ZM8.13584 42.3275V35.2231H9.21571L9.28675 35.7915H9.3578C9.5283 35.6494 9.75564 35.5215 10.0398 35.4078C10.3335 35.2847 10.6934 35.2231 11.1197 35.2231H11.8301V36.2888H10.4092C10.2293 36.2888 10.054 36.3125 9.88352 36.3598C9.71302 36.3977 9.55672 36.4688 9.41463 36.573V42.3275H8.13584ZM15.1009 42.4696C14.5326 42.4696 14.0542 42.3559 13.6658 42.1286C13.2775 41.8918 12.9791 41.5034 12.7707 40.9635C12.5718 40.4235 12.4723 39.6942 12.4723 38.7753C12.4723 37.847 12.5718 37.1176 12.7707 36.5872C12.9791 36.0472 13.2775 35.6636 13.6658 35.4363C14.0542 35.1995 14.5326 35.081 15.1009 35.081C15.6693 35.081 16.1476 35.1995 16.536 35.4363C16.9338 35.6636 17.2322 36.0472 17.4311 36.5872C17.6301 37.1176 17.7295 37.847 17.7295 38.7753C17.7295 39.6942 17.6301 40.4235 17.4311 40.9635C17.2322 41.5034 16.9338 41.8918 16.536 42.1286C16.1476 42.3559 15.6693 42.4696 15.1009 42.4696ZM15.1009 41.6881C15.3377 41.6881 15.5556 41.6029 15.7545 41.4324C15.9629 41.2619 16.1287 40.9682 16.2518 40.5514C16.3844 40.1252 16.4507 39.5331 16.4507 38.7753C16.4507 38.0175 16.3844 37.4302 16.2518 37.0134C16.1287 36.5872 15.9629 36.2888 15.7545 36.1183C15.5556 35.9478 15.3377 35.8625 15.1009 35.8625C14.8641 35.8625 14.6415 35.9478 14.4331 36.1183C14.2342 36.2888 14.0684 36.5872 13.9358 37.0134C13.8127 37.4302 13.7511 38.0175 13.7511 38.7753C13.7511 39.5331 13.8127 40.1252 13.9358 40.5514C14.0684 40.9682 14.2342 41.2619 14.4331 41.4324C14.6415 41.6029 14.8641 41.6881 15.1009 41.6881ZM23.0573 42.3275V36.2888H22.2047V35.3652H23.0573V34.7969C23.0573 34.1338 23.1425 33.6318 23.313 33.2907C23.493 32.9403 23.7298 32.7034 24.0235 32.5803C24.3266 32.4477 24.6676 32.3814 25.0465 32.3814C25.1886 32.3814 25.3591 32.3956 25.558 32.424C25.7569 32.4524 25.9511 32.4903 26.1406 32.5377C26.3395 32.5756 26.4958 32.6182 26.6095 32.6656V33.2339H25.3307C25.1886 33.2339 25.037 33.2765 24.876 33.3618C24.7244 33.4376 24.5965 33.5891 24.4923 33.8165C24.3881 34.0438 24.336 34.3706 24.336 34.7969V35.3652H26.3253V36.0046C26.1169 36.0709 25.8517 36.1372 25.5296 36.2035C25.2075 36.2604 24.9044 36.2888 24.6202 36.2888H24.336V42.3275H23.0573ZM27.4664 42.3275V35.2231H28.7452V42.3275H27.4664ZM27.4664 34.2285V32.6656H28.7452V34.2285H27.4664ZM30.67 42.3275V35.2231H31.7499L31.821 35.7915H31.892C32.0625 35.6494 32.2898 35.5215 32.574 35.4078C32.8677 35.2847 33.2276 35.2231 33.6539 35.2231H34.3643V36.2888H32.9435C32.7635 36.2888 32.5882 36.3125 32.4177 36.3598C32.2472 36.3977 32.0909 36.4688 31.9488 36.573V42.3275H30.67ZM35.4294 42.3275V35.2231H36.4951L36.5661 35.6494H36.6372C36.8172 35.4694 37.0161 35.3321 37.2339 35.2373C37.4613 35.1331 37.736 35.081 38.058 35.081C38.3801 35.081 38.6785 35.1284 38.9532 35.2231C39.2374 35.3084 39.4695 35.4694 39.6494 35.7062C39.8862 35.4978 40.1752 35.3415 40.5162 35.2373C40.8572 35.1331 41.1508 35.081 41.3971 35.081C41.776 35.081 42.1123 35.1426 42.4059 35.2658C42.709 35.3794 42.9459 35.5926 43.1164 35.9052C43.2963 36.2083 43.3863 36.644 43.3863 37.2124V42.3275H42.1075V37.2124C42.1075 36.8808 42.0507 36.6251 41.937 36.4451C41.8328 36.2556 41.6908 36.123 41.5108 36.0472C41.3403 35.9715 41.1603 35.9336 40.9708 35.9336C40.7625 35.9336 40.5588 35.962 40.3599 36.0188C40.1609 36.0757 40.0094 36.142 39.9052 36.2177C39.9431 36.3219 39.9762 36.4593 40.0046 36.6298C40.0331 36.8003 40.0473 36.9945 40.0473 37.2124V42.3275H38.7685V37.2124C38.7685 36.8808 38.7117 36.6251 38.598 36.4451C38.4938 36.2556 38.3517 36.123 38.1717 36.0472C38.0012 35.9715 37.8212 35.9336 37.6318 35.9336C37.4518 35.9336 37.2766 35.962 37.1061 36.0188C36.945 36.0757 36.8124 36.142 36.7082 36.2177V42.3275H35.4294ZM47.2998 45.3114C47.0157 45.3114 46.7126 45.2782 46.3905 45.2119C46.0779 45.1551 45.8127 45.0935 45.5948 45.0272V44.4588H47.0157C47.6598 44.4588 48.1287 44.2883 48.4223 43.9473C48.716 43.6158 48.8628 43.0048 48.8628 42.1144C48.6544 42.2186 48.4365 42.3038 48.2092 42.3701C47.9819 42.4364 47.7261 42.4696 47.4419 42.4696C46.9967 42.4696 46.6084 42.4128 46.2768 42.2991C45.9453 42.176 45.6895 41.9628 45.5095 41.6597C45.3296 41.3471 45.2396 40.9066 45.2396 40.3383V35.2231H46.5184V40.3383C46.5184 40.8309 46.6462 41.1671 46.902 41.3471C47.1578 41.5271 47.4798 41.6171 47.8682 41.6171C48.0482 41.6171 48.2329 41.5887 48.4223 41.5318C48.6118 41.4655 48.7586 41.3992 48.8628 41.3329V35.2231H50.1416V41.7592C50.1416 42.6591 50.0421 43.3648 49.8432 43.8763C49.6443 44.3973 49.3364 44.7667 48.9196 44.9846C48.5029 45.2024 47.9629 45.3114 47.2998 45.3114ZM57.3825 42.4696C56.9563 42.4696 56.5821 42.408 56.26 42.2849C55.9474 42.1617 55.7011 41.9391 55.5212 41.6171C55.3412 41.2855 55.2512 40.8119 55.2512 40.1962C55.2512 39.5994 55.3412 39.1448 55.5212 38.8322C55.7011 38.5101 55.9474 38.2922 56.26 38.1786C56.5821 38.0554 56.9563 37.9938 57.3825 37.9938C57.6004 37.9938 57.8372 38.0081 58.093 38.0365C58.3582 38.0649 58.595 38.098 58.8034 38.1359V37.4965C58.8034 36.8524 58.666 36.4309 58.3913 36.232C58.1261 36.033 57.7425 35.9336 57.2404 35.9336H55.8196V35.3652C56.0374 35.2894 56.3027 35.2231 56.6152 35.1663C56.9373 35.1095 57.2404 35.081 57.5246 35.081C58.093 35.081 58.5666 35.1474 58.9455 35.28C59.3244 35.4031 59.6086 35.6399 59.798 35.9904C59.9875 36.3314 60.0822 36.8335 60.0822 37.4965V42.3275H59.0165L58.9455 41.9013H58.8744C58.6945 42.0812 58.4719 42.2233 58.2066 42.3275C57.9414 42.4222 57.6667 42.4696 57.3825 42.4696ZM57.8088 41.6171C57.9888 41.6171 58.1735 41.5887 58.3629 41.5318C58.5524 41.4655 58.6992 41.3992 58.8034 41.3329V38.8464H57.8088C57.572 38.8464 57.3541 38.8843 57.1552 38.96C56.9657 39.0358 56.8142 39.1732 56.7005 39.3721C56.5868 39.5615 56.53 39.8362 56.53 40.1962C56.53 40.5751 56.5868 40.8687 56.7005 41.0771C56.8142 41.2761 56.9657 41.4182 57.1552 41.5034C57.3541 41.5792 57.572 41.6171 57.8088 41.6171ZM65.4843 45.1693V35.2231H66.5499L66.621 35.6494H66.692C66.872 35.4694 67.0946 35.3321 67.3598 35.2373C67.6251 35.1331 67.8998 35.081 68.1839 35.081C68.686 35.081 69.1075 35.1947 69.4485 35.4221C69.799 35.6399 70.0642 36.0188 70.2442 36.5588C70.4337 37.0892 70.5284 37.8281 70.5284 38.7753C70.5284 39.7226 70.4337 40.4662 70.2442 41.0061C70.0642 41.5366 69.799 41.9155 69.4485 42.1428C69.1075 42.3607 68.686 42.4696 68.1839 42.4696C67.8998 42.4696 67.644 42.4364 67.4167 42.3701C67.1988 42.3038 66.9809 42.2186 66.7631 42.1144V45.1693H65.4843ZM67.7577 41.6171C68.0703 41.6171 68.3355 41.5413 68.5534 41.3897C68.7807 41.2287 68.9512 40.9445 69.0649 40.5372C69.188 40.1204 69.2496 39.5331 69.2496 38.7753C69.2496 38.0175 69.188 37.435 69.0649 37.0276C68.9512 36.6109 68.7807 36.3267 68.5534 36.1751C68.3355 36.0141 68.0703 35.9336 67.7577 35.9336C67.5777 35.9336 67.393 35.962 67.2035 36.0188C67.0141 36.0757 66.8673 36.142 66.7631 36.2177V41.3329C66.8673 41.3992 67.0141 41.4655 67.2035 41.5318C67.393 41.5887 67.5777 41.6171 67.7577 41.6171ZM74.4336 42.4696C73.8652 42.4696 73.3869 42.3559 72.9985 42.1286C72.6101 41.8918 72.3117 41.5034 72.1033 40.9635C71.9044 40.4235 71.805 39.6942 71.805 38.7753C71.805 37.847 71.9044 37.1176 72.1033 36.5872C72.3117 36.0472 72.6101 35.6636 72.9985 35.4363C73.3869 35.1995 73.8652 35.081 74.4336 35.081C75.0019 35.081 75.4803 35.1995 75.8687 35.4363C76.2665 35.6636 76.5649 36.0472 76.7638 36.5872C76.9627 37.1176 77.0622 37.847 77.0622 38.7753C77.0622 39.6942 76.9627 40.4235 76.7638 40.9635C76.5649 41.5034 76.2665 41.8918 75.8687 42.1286C75.4803 42.3559 75.0019 42.4696 74.4336 42.4696ZM74.4336 41.6881C74.6704 41.6881 74.8883 41.6029 75.0872 41.4324C75.2956 41.2619 75.4613 40.9682 75.5845 40.5514C75.7171 40.1252 75.7834 39.5331 75.7834 38.7753C75.7834 38.0175 75.7171 37.4302 75.5845 37.0134C75.4613 36.5872 75.2956 36.2888 75.0872 36.1183C74.8883 35.9478 74.6704 35.8625 74.4336 35.8625C74.1968 35.8625 73.9742 35.9478 73.7658 36.1183C73.5668 36.2888 73.4011 36.5872 73.2685 37.0134C73.1453 37.4302 73.0837 38.0175 73.0837 38.7753C73.0837 39.5331 73.1453 40.1252 73.2685 40.5514C73.4011 40.9682 73.5668 41.2619 73.7658 41.4324C73.9742 41.6029 74.1968 41.6881 74.4336 41.6881ZM80.6849 42.4696C80.1923 42.4696 79.7708 42.3607 79.4203 42.1428C79.0698 41.9155 78.7999 41.5366 78.6104 41.0061C78.4304 40.4662 78.3404 39.7226 78.3404 38.7753C78.3404 37.8281 78.4304 37.0892 78.6104 36.5588C78.7999 36.0188 79.0698 35.6399 79.4203 35.4221C79.7708 35.1947 80.1923 35.081 80.6849 35.081C80.9691 35.081 81.2248 35.1142 81.4522 35.1805C81.6795 35.2468 81.8974 35.3321 82.1058 35.4363V32.3814H83.3845V42.3275H82.3189L82.2478 41.9013H82.1768C81.9968 42.0812 81.7742 42.2233 81.509 42.3275C81.2438 42.4222 80.9691 42.4696 80.6849 42.4696ZM81.1111 41.6171C81.2911 41.6171 81.4758 41.5887 81.6653 41.5318C81.8547 41.4655 82.0016 41.3992 82.1058 41.3329V36.2177C82.0016 36.142 81.8547 36.0757 81.6653 36.0188C81.4758 35.962 81.2911 35.9336 81.1111 35.9336C80.808 35.9336 80.5428 36.0141 80.3155 36.1751C80.0881 36.3267 79.9129 36.6109 79.7897 37.0276C79.6761 37.435 79.6192 38.0175 79.6192 38.7753C79.6192 39.5331 79.6761 40.1204 79.7897 40.5372C79.9129 40.9445 80.0881 41.2287 80.3155 41.3897C80.5428 41.5413 80.808 41.6171 81.1111 41.6171ZM85.2988 42.3275V35.2231H86.3645L86.4355 35.6494H86.5066C86.6866 35.4694 86.9092 35.3321 87.1744 35.2373C87.4396 35.1331 87.7143 35.081 87.9985 35.081C88.4532 35.081 88.8416 35.1426 89.1636 35.2658C89.4952 35.3794 89.7509 35.5926 89.9309 35.9052C90.1109 36.2083 90.2009 36.644 90.2009 37.2124V42.3275H88.9221V37.2124C88.9221 36.7103 88.7942 36.374 88.5384 36.2035C88.2827 36.0236 87.9606 35.9336 87.5722 35.9336C87.3923 35.9336 87.2076 35.962 87.0181 36.0188C86.8287 36.0757 86.6818 36.142 86.5776 36.2177V42.3275H85.2988ZM92.1135 42.3275V35.2231H93.3923V42.3275H92.1135ZM92.1135 34.2285V32.6656H93.3923V34.2285H92.1135ZM95.3882 42.3275V32.3814H96.667V38.4911L98.7272 35.2231H100.148L97.9458 38.5622L100.432 42.3275H99.0114L96.667 38.6332V42.3275H95.3882ZM103.2 42.4696C102.774 42.4696 102.4 42.408 102.078 42.2849C101.765 42.1617 101.519 41.9391 101.339 41.6171C101.159 41.2855 101.069 40.8119 101.069 40.1962C101.069 39.5994 101.159 39.1448 101.339 38.8322C101.519 38.5101 101.765 38.2922 102.078 38.1786C102.4 38.0554 102.774 37.9938 103.2 37.9938C103.418 37.9938 103.655 38.0081 103.911 38.0365C104.176 38.0649 104.413 38.098 104.621 38.1359V37.4965C104.621 36.8524 104.484 36.4309 104.209 36.232C103.944 36.033 103.56 35.9336 103.058 35.9336H101.637V35.3652C101.855 35.2894 102.12 35.2231 102.433 35.1663C102.755 35.1095 103.058 35.081 103.342 35.081C103.911 35.081 104.384 35.1474 104.763 35.28C105.142 35.4031 105.426 35.6399 105.616 35.9904C105.805 36.3314 105.9 36.8335 105.9 37.4965V42.3275H104.834L104.763 41.9013H104.692C104.512 42.0812 104.29 42.2233 104.024 42.3275C103.759 42.4222 103.484 42.4696 103.2 42.4696ZM103.626 41.6171C103.806 41.6171 103.991 41.5887 104.181 41.5318C104.37 41.4655 104.517 41.3992 104.621 41.3329V38.8464H103.626C103.39 38.8464 103.172 38.8843 102.973 38.96C102.783 39.0358 102.632 39.1732 102.518 39.3721C102.405 39.5615 102.348 39.8362 102.348 40.1962C102.348 40.5751 102.405 40.8687 102.518 41.0771C102.632 41.2761 102.783 41.4182 102.973 41.5034C103.172 41.5792 103.39 41.6171 103.626 41.6171ZM103.2 34.3706L103.698 32.5235H105.047L104.053 34.3706H103.2ZM107.75 42.3275V35.2231H108.815L108.886 35.6494H108.958C109.138 35.4694 109.36 35.3321 109.625 35.2373C109.891 35.1331 110.165 35.081 110.449 35.081C110.904 35.081 111.293 35.1426 111.615 35.2658C111.946 35.3794 112.202 35.5926 112.382 35.9052C112.562 36.2083 112.652 36.644 112.652 37.2124V42.3275H111.373V37.2124C111.373 36.7103 111.245 36.374 110.989 36.2035C110.734 36.0236 110.412 35.9336 110.023 35.9336C109.843 35.9336 109.659 35.962 109.469 36.0188C109.28 36.0757 109.133 36.142 109.029 36.2177V42.3275H107.75ZM114.564 42.3275V35.2231H115.843V42.3275H114.564ZM114.778 34.3706L115.275 32.5235H116.625L115.63 34.3706H114.778Z" fill="url(#paint0_linear_455_1612)" />
							<defs>
								<linearGradient id="paint0_linear_455_1612" x1="16.4408" y1="24.7872" x2="48.7088" y2="87.873" gradientUnits="userSpaceOnUse">
									<stop stopColor="#56592C" />
									<stop offset="0.223241" stopColor="#E6C453" />
									<stop offset="0.616885" stopColor="#F0CD5B" />
									<stop offset="1" stopColor="#D1A617" />
								</linearGradient>
							</defs>
						</svg>

						<span className="sr-only">Human Design</span>
					</a>

				</div>

				<div className="ml-auto">

					<ul className="flex gap-8 font-medium">

						<li><a href="/" className="hover:text-gold transition-all duration-150 ease-in-out">Domů</a></li>
						<li><a href="/#services" className="hover:text-gold transition-all duration-150 ease-in-out">Služby</a></li>
						<li><a href="/about" className="hover:text-gold transition-all duration-150 ease-in-out">O Nás</a></li>
						<li><a href="/blog" className="hover:text-gold transition-all duration-150 ease-in-out">Blog</a></li>
						<li><a href="/contact" className="hover:text-gold transition-all duration-150 ease-in-out">Kontakt</a></li>
						<li><a href="#" className="bg-gold text-black hover:bg-gold/90 hover:text-white rounded-3xl px-4 py-2 transition-all duration-150 ease-in-out">Kurzy</a></li>

					</ul>

				</div>

			</div>

		</header>

	);

}
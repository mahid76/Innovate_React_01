const Logo = () => {
	return (
		<div>
			<svg
				className="w-[70px] md:w-[111px] "
				xmlns="http://www.w3.org/2000/svg"
				width="111"
				height="60"
				viewBox="0 0 111 60"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2.68024 29.5971C4.15805 29.5971 5.36048 30.7982 5.36048 32.276C5.36048 33.7579 4.15805 34.959 2.68024 34.959C1.1997 34.959 0 33.7579 0 32.276C0 30.7982 1.1997 29.5971 2.68024 29.5971ZM6.64061 38.8021C9.34266 38.8021 11.5362 40.9943 11.5362 43.695C11.5362 46.397 9.34266 48.5879 6.64061 48.5879C3.93856 48.5879 1.74911 46.397 1.74911 43.695C1.74911 40.9957 3.93856 38.8021 6.64061 38.8021ZM17.3629 48.3588C20.065 48.3588 22.2544 50.5496 22.2544 53.2544C22.2544 55.9551 20.065 58.1473 17.3629 58.1473C14.6609 58.1473 12.4673 55.9551 12.4673 53.2544C12.4673 50.5496 14.6609 48.3588 17.3629 48.3588ZM32.6196 52.7745C34.6141 52.7745 36.2323 54.3928 36.2323 56.3873C36.2323 58.3818 34.6141 60 32.6196 60C30.6251 60 29.0068 58.3818 29.0068 56.3873C29.0068 54.3941 30.6251 52.7745 32.6196 52.7745ZM46.9587 42.2976C49.6608 42.2976 51.8543 44.4912 51.8543 47.1932C51.8543 49.8953 49.6621 52.0861 46.9587 52.0861C44.2594 52.0861 42.0672 49.8953 42.0672 47.1932C42.0672 44.4912 44.2594 42.2976 46.9587 42.2976ZM40.4258 1.80091C42.7489 1.80091 44.6275 3.6809 44.6275 6.00123C44.6275 8.32019 42.7489 10.2015 40.4258 10.2015C38.1096 10.2015 36.2282 8.32156 36.2282 6.00123C36.2282 3.6809 38.1109 1.80091 40.4258 1.80091ZM24.7043 0C26.5679 0 28.0825 1.51326 28.0825 3.37825C28.0825 5.2446 26.5693 6.75922 24.7043 6.75922C22.8407 6.75922 21.326 5.24324 21.326 3.37825C21.326 1.51326 22.8393 0 24.7043 0ZM10.9541 7.45723C12.4346 7.45723 13.6343 8.65829 13.6343 10.1361C13.6343 11.618 12.4346 12.8191 10.9541 12.8191C9.47218 12.8191 8.27384 11.618 8.27384 10.1361C8.27384 8.65829 9.47218 7.45723 10.9541 7.45723ZM50.9177 11.1109C53.7575 11.1109 56.0628 13.4148 56.0628 16.2559C56.0628 19.097 53.7575 21.4024 50.9177 21.4024C48.0739 21.4024 45.7699 19.097 45.7699 16.2559C45.7699 13.4148 48.0739 11.1109 50.9177 11.1109ZM3.37825 19.4597C4.53841 19.4597 5.47772 20.399 5.47772 21.5564C5.47772 22.7139 4.53841 23.6518 3.37825 23.6518C2.22217 23.6518 1.28286 22.7139 1.28286 21.5564C1.28286 20.399 2.22217 19.4597 3.37825 19.4597Z"
					fill="#50DFFD"
				/>
				<path
					d="M102.264 30.662C102.08 30.0335 101.712 29.5223 101.162 29.1269C100.613 28.7329 99.9734 28.5366 99.2467 28.5366C98.4587 28.5366 97.7662 28.7588 97.1731 29.2005C96.801 29.4759 96.4547 29.9654 96.137 30.662H102.264ZM105.108 32.891H96.0103C96.1439 33.6912 96.4983 34.3293 97.0682 34.8023C97.6353 35.2754 98.3619 35.514 99.2467 35.514C100.305 35.514 101.215 35.1418 101.975 34.4029L104.363 35.5249C103.767 36.366 103.056 36.9904 102.224 37.3967C101.394 37.8016 100.411 38.002 99.2685 38.002C97.4976 38.002 96.0566 37.4444 94.9482 36.3292C93.8317 35.2113 93.2755 33.8126 93.2755 32.133C93.2755 30.4112 93.8317 28.9851 94.9414 27.8468C96.0539 26.7112 97.4417 26.1413 99.1145 26.1413C100.888 26.1413 102.333 26.7098 103.45 27.8468C104.559 28.9851 105.118 30.4861 105.118 32.3525L105.108 32.891ZM87.78 22.2764H90.6021V26.429H92.2789V28.8679H90.6021V37.7102H87.78V28.8679H86.3281V26.429H87.78V22.2764ZM78.7809 28.7534C77.903 28.7534 77.1736 29.0601 76.5956 29.6804C76.0134 30.3007 75.7244 31.0928 75.7244 32.058C75.7244 33.0369 76.0175 33.8357 76.6092 34.4656C77.1981 35.0968 77.9275 35.4104 78.7918 35.4104C79.6848 35.4104 80.421 35.0995 81.0099 34.4806C81.5989 33.8644 81.892 33.0532 81.892 32.0498C81.892 31.071 81.5989 30.2721 81.0099 29.6695C80.421 29.0574 79.6807 28.7534 78.7809 28.7534ZM81.7584 26.429H84.5804V37.7102H81.7584V36.5174C81.2062 37.0449 80.6486 37.4199 80.0924 37.6557C79.5362 37.8834 78.9322 38.0006 78.282 38.0006C76.8219 38.0006 75.5649 37.4335 74.4988 36.306C73.4327 35.1772 72.9024 33.7717 72.9024 32.0907C72.9024 30.3512 73.415 28.9238 74.4456 27.81C75.4749 26.6989 76.7292 26.1413 78.1988 26.1413C78.8777 26.1413 79.5103 26.2695 80.1101 26.5244C80.7032 26.7807 81.2512 27.1651 81.757 27.6777V26.429H81.7584ZM60.3205 26.429H63.1998L66.0532 33.0859L68.8889 26.429H71.764L66.9584 37.7102H65.1262L60.3205 26.429ZM53.2791 28.8052C52.3971 28.8052 51.6636 29.1119 51.0828 29.7227C50.498 30.3362 50.209 31.1173 50.209 32.0703C50.209 33.0532 50.4939 33.8467 51.076 34.4547C51.6541 35.0641 52.3807 35.3695 53.2655 35.3695C54.1503 35.3695 54.8878 35.0627 55.4767 34.4438C56.0616 33.8276 56.3588 33.0382 56.3588 32.0703C56.3588 31.1037 56.0698 30.3184 55.4917 29.7131C54.9123 29.1078 54.1748 28.8052 53.2791 28.8052ZM53.2328 26.1399C54.2989 26.1399 55.3022 26.4072 56.2388 26.9375C57.1741 27.4664 57.9048 28.1931 58.431 29.1038C58.9586 30.0158 59.219 31.0001 59.219 32.0566C59.219 33.1241 58.9518 34.1193 58.4283 35.045C57.8966 35.972 57.1781 36.6946 56.2647 37.2181C55.3513 37.7375 54.3466 38.0006 53.2478 38.0006C51.6295 38.0006 50.2499 37.4239 49.1033 36.2733C47.9623 35.1241 47.387 33.724 47.387 32.0812C47.387 30.3184 48.0372 28.8502 49.3269 27.675C50.4612 26.6539 51.7618 26.1399 53.2328 26.1399ZM35.1936 26.429H38.0116V27.5837C38.6578 27.0397 39.2358 26.6662 39.7634 26.4576C40.2801 26.2449 40.8145 26.1399 41.3598 26.1399C42.4832 26.1399 43.4293 26.5326 44.2132 27.3124C44.8703 27.9749 45.1961 28.9565 45.1961 30.2585V37.7102H42.3973V32.7683C42.3973 31.4186 42.34 30.5229 42.216 30.0799C42.0974 29.6395 41.8833 29.3028 41.5834 29.0697C41.2835 28.8379 40.9154 28.7234 40.471 28.7234C39.8929 28.7234 39.4049 28.9129 38.9931 29.3001C38.5814 29.6804 38.2924 30.2121 38.137 30.8897C38.0538 31.2441 38.0102 32.0062 38.0102 33.1814V37.7102H35.1923V26.429H35.1936ZM22.4482 26.429H25.2702V27.5837C25.9137 27.0397 26.4944 26.6662 27.0193 26.4576C27.5401 26.2449 28.0745 26.1399 28.6198 26.1399C29.7405 26.1399 30.6893 26.5326 31.4705 27.3124C32.1276 27.9749 32.4534 28.9565 32.4534 30.2585V37.7102H29.6573V32.7683C29.6573 31.4186 29.5959 30.5229 29.4732 30.0799C29.3546 29.6395 29.1447 29.3028 28.8407 29.0697C28.5408 28.8379 28.1727 28.7234 27.731 28.7234C27.1529 28.7234 26.6621 28.9129 26.2491 29.3001C25.8414 29.6804 25.5524 30.2121 25.3929 30.8897C25.3138 31.2441 25.2702 32.0062 25.2702 33.1814V37.7102H22.4482V26.429ZM16.6133 22.4591H19.4926V37.7102H16.6133V22.4591Z"
					fill="white"
				/>
				<path
					d="M62.4599 42.7948C62.5199 42.7198 62.5924 42.6823 62.6774 42.6823C62.7474 42.6823 62.8099 42.7098 62.8649 42.7648C62.9199 42.8198 62.9474 42.8873 62.9474 42.9673C62.9474 43.0423 62.9249 43.1048 62.8799 43.1548L61.0574 45.4573V47.7223C61.0574 47.8223 61.0274 47.8998 60.9674 47.9548C60.9124 48.0098 60.8399 48.0373 60.7499 48.0373C60.6599 48.0373 60.5849 48.0098 60.5249 47.9548C60.4699 47.8998 60.4424 47.8223 60.4424 47.7223V45.4498L58.6199 43.1548C58.5699 43.0998 58.5449 43.0373 58.5449 42.9673C58.5449 42.8873 58.5724 42.8198 58.6274 42.7648C58.6874 42.7098 58.7549 42.6823 58.8299 42.6823C58.9149 42.6823 58.9874 42.7198 59.0474 42.7948L60.7574 44.9773L62.4599 42.7948Z"
					fill="#50DFFD"
				/>
				<path
					d="M64.5105 48.0523C64.1655 48.0523 63.8605 47.9748 63.5955 47.8198C63.3355 47.6648 63.133 47.4448 62.988 47.1598C62.848 46.8698 62.778 46.5348 62.778 46.1548C62.778 45.7748 62.848 45.4423 62.988 45.1573C63.133 44.8673 63.3355 44.6448 63.5955 44.4898C63.8605 44.3348 64.1655 44.2573 64.5105 44.2573C64.8555 44.2573 65.1605 44.3348 65.4255 44.4898C65.6905 44.6448 65.893 44.8673 66.033 45.1573C66.178 45.4423 66.2505 45.7748 66.2505 46.1548C66.2505 46.5348 66.178 46.8698 66.033 47.1598C65.893 47.4448 65.6905 47.6648 65.4255 47.8198C65.1605 47.9748 64.8555 48.0523 64.5105 48.0523ZM64.5105 47.5498C64.8705 47.5498 65.1455 47.4323 65.3355 47.1973C65.5305 46.9573 65.628 46.6098 65.628 46.1548C65.628 45.7098 65.5305 45.3673 65.3355 45.1273C65.1405 44.8823 64.8655 44.7598 64.5105 44.7598C64.1555 44.7598 63.8805 44.8823 63.6855 45.1273C63.4905 45.3673 63.393 45.7098 63.393 46.1548C63.393 46.6048 63.488 46.9498 63.678 47.1898C63.873 47.4298 64.1505 47.5498 64.5105 47.5498Z"
					fill="#50DFFD"
				/>
				<path
					d="M69.9307 44.2723C70.0257 44.2723 70.0982 44.2998 70.1482 44.3548C70.2032 44.4098 70.2307 44.4823 70.2307 44.5723V47.7448C70.2307 47.8298 70.2032 47.8998 70.1482 47.9548C70.0982 48.0098 70.0257 48.0373 69.9307 48.0373C69.8407 48.0373 69.7682 48.0123 69.7132 47.9623C69.6632 47.9073 69.6382 47.8373 69.6382 47.7523V47.3773C69.5232 47.5973 69.3607 47.7648 69.1507 47.8798C68.9457 47.9948 68.7132 48.0523 68.4532 48.0523C68.0182 48.0523 67.6907 47.9323 67.4707 47.6923C67.2507 47.4473 67.1407 47.0873 67.1407 46.6123V44.5723C67.1407 44.4823 67.1682 44.4098 67.2232 44.3548C67.2782 44.2998 67.3532 44.2723 67.4482 44.2723C67.5432 44.2723 67.6157 44.2998 67.6657 44.3548C67.7207 44.4098 67.7482 44.4823 67.7482 44.5723V46.5973C67.7482 46.9223 67.8132 47.1623 67.9432 47.3173C68.0732 47.4673 68.2782 47.5423 68.5582 47.5423C68.8782 47.5423 69.1357 47.4398 69.3307 47.2348C69.5257 47.0248 69.6232 46.7498 69.6232 46.4098V44.5723C69.6232 44.4823 69.6507 44.4098 69.7057 44.3548C69.7607 44.2998 69.8357 44.2723 69.9307 44.2723Z"
					fill="#50DFFD"
				/>
				<path
					d="M73.1673 44.2723C73.3773 44.2573 73.4823 44.3423 73.4823 44.5273C73.4823 44.6073 73.4598 44.6723 73.4148 44.7223C73.3698 44.7673 73.2923 44.7948 73.1823 44.8048L72.9573 44.8273C72.6223 44.8573 72.3723 44.9773 72.2073 45.1873C72.0473 45.3923 71.9673 45.6348 71.9673 45.9148V47.7373C71.9673 47.8373 71.9398 47.9123 71.8848 47.9623C71.8298 48.0123 71.7573 48.0373 71.6673 48.0373C71.5773 48.0373 71.5023 48.0123 71.4423 47.9623C71.3873 47.9073 71.3598 47.8323 71.3598 47.7373V44.5723C71.3598 44.4773 71.3898 44.4048 71.4498 44.3548C71.5098 44.2998 71.5823 44.2723 71.6673 44.2723C71.7473 44.2723 71.8148 44.2998 71.8698 44.3548C71.9248 44.4048 71.9523 44.4748 71.9523 44.5648V44.9848C72.0573 44.7648 72.2048 44.5973 72.3948 44.4823C72.5898 44.3673 72.8123 44.2998 73.0623 44.2798L73.1673 44.2723Z"
					fill="#50DFFD"
				/>
				<path
					d="M77.7149 48.0598C77.3399 48.0598 76.9799 48.0048 76.6349 47.8948C76.2949 47.7798 76.0224 47.6273 75.8174 47.4373C75.7424 47.3673 75.7049 47.2798 75.7049 47.1748C75.7049 47.1048 75.7249 47.0448 75.7649 46.9948C75.8049 46.9398 75.8524 46.9123 75.9074 46.9123C75.9724 46.9123 76.0424 46.9398 76.1174 46.9948C76.5824 47.3548 77.1124 47.5348 77.7074 47.5348C78.1374 47.5348 78.4674 47.4523 78.6974 47.2873C78.9274 47.1223 79.0424 46.8873 79.0424 46.5823C79.0424 46.4073 78.9874 46.2673 78.8774 46.1623C78.7674 46.0523 78.6224 45.9648 78.4424 45.8998C78.2624 45.8348 78.0199 45.7673 77.7149 45.6973C77.3049 45.6023 76.9674 45.5023 76.7024 45.3973C76.4424 45.2923 76.2299 45.1423 76.0649 44.9473C75.9049 44.7523 75.8249 44.4973 75.8249 44.1823C75.8249 43.8823 75.9049 43.6173 76.0649 43.3873C76.2299 43.1523 76.4574 42.9723 76.7474 42.8473C77.0424 42.7173 77.3774 42.6523 77.7524 42.6523C78.1024 42.6523 78.4274 42.7073 78.7274 42.8173C79.0324 42.9223 79.2874 43.0748 79.4924 43.2748C79.5724 43.3548 79.6124 43.4423 79.6124 43.5373C79.6124 43.6073 79.5924 43.6698 79.5524 43.7248C79.5124 43.7748 79.4649 43.7998 79.4099 43.7998C79.3549 43.7998 79.2824 43.7723 79.1924 43.7173C78.9474 43.5173 78.7199 43.3773 78.5099 43.2973C78.2999 43.2173 78.0474 43.1773 77.7524 43.1773C77.3374 43.1773 77.0149 43.2648 76.7849 43.4398C76.5549 43.6098 76.4399 43.8498 76.4399 44.1598C76.4399 44.4248 76.5399 44.6248 76.7399 44.7598C76.9449 44.8898 77.2574 45.0048 77.6774 45.1048C78.1324 45.2148 78.4899 45.3173 78.7499 45.4123C79.0099 45.5023 79.2249 45.6398 79.3949 45.8248C79.5699 46.0098 79.6574 46.2573 79.6574 46.5673C79.6574 46.8623 79.5749 47.1223 79.4099 47.3473C79.2499 47.5723 79.0224 47.7473 78.7274 47.8723C78.4324 47.9973 78.0949 48.0598 77.7149 48.0598Z"
					fill="#50DFFD"
				/>
				<path
					d="M82.0813 48.0523C81.7363 48.0523 81.4313 47.9748 81.1663 47.8198C80.9063 47.6648 80.7038 47.4448 80.5588 47.1598C80.4188 46.8698 80.3488 46.5348 80.3488 46.1548C80.3488 45.7748 80.4188 45.4423 80.5588 45.1573C80.7038 44.8673 80.9063 44.6448 81.1663 44.4898C81.4313 44.3348 81.7363 44.2573 82.0813 44.2573C82.4263 44.2573 82.7313 44.3348 82.9963 44.4898C83.2613 44.6448 83.4638 44.8673 83.6038 45.1573C83.7488 45.4423 83.8213 45.7748 83.8213 46.1548C83.8213 46.5348 83.7488 46.8698 83.6038 47.1598C83.4638 47.4448 83.2613 47.6648 82.9963 47.8198C82.7313 47.9748 82.4263 48.0523 82.0813 48.0523ZM82.0813 47.5498C82.4413 47.5498 82.7163 47.4323 82.9063 47.1973C83.1013 46.9573 83.1988 46.6098 83.1988 46.1548C83.1988 45.7098 83.1013 45.3673 82.9063 45.1273C82.7113 44.8823 82.4363 44.7598 82.0813 44.7598C81.7263 44.7598 81.4513 44.8823 81.2563 45.1273C81.0613 45.3673 80.9638 45.7098 80.9638 46.1548C80.9638 46.6048 81.0588 46.9498 81.2488 47.1898C81.4438 47.4298 81.7213 47.5498 82.0813 47.5498Z"
					fill="#50DFFD"
				/>
				<path
					d="M85.034 48.0373C84.944 48.0373 84.869 48.0123 84.809 47.9623C84.754 47.9073 84.7265 47.8323 84.7265 47.7373V42.9748C84.7265 42.8798 84.754 42.8073 84.809 42.7573C84.869 42.7023 84.944 42.6748 85.034 42.6748C85.119 42.6748 85.189 42.7023 85.244 42.7573C85.304 42.8073 85.334 42.8798 85.334 42.9748V47.7373C85.334 47.8323 85.304 47.9073 85.244 47.9623C85.189 48.0123 85.119 48.0373 85.034 48.0373Z"
					fill="#50DFFD"
				/>
				<path
					d="M89.2446 44.2723C89.3396 44.2723 89.4121 44.2998 89.4621 44.3548C89.5171 44.4098 89.5446 44.4823 89.5446 44.5723V47.7448C89.5446 47.8298 89.5171 47.8998 89.4621 47.9548C89.4121 48.0098 89.3396 48.0373 89.2446 48.0373C89.1546 48.0373 89.0821 48.0123 89.0271 47.9623C88.9771 47.9073 88.9521 47.8373 88.9521 47.7523V47.3773C88.8371 47.5973 88.6746 47.7648 88.4646 47.8798C88.2596 47.9948 88.0271 48.0523 87.7671 48.0523C87.3321 48.0523 87.0046 47.9323 86.7846 47.6923C86.5646 47.4473 86.4546 47.0873 86.4546 46.6123V44.5723C86.4546 44.4823 86.4821 44.4098 86.5371 44.3548C86.5921 44.2998 86.6671 44.2723 86.7621 44.2723C86.8571 44.2723 86.9296 44.2998 86.9796 44.3548C87.0346 44.4098 87.0621 44.4823 87.0621 44.5723V46.5973C87.0621 46.9223 87.1271 47.1623 87.2571 47.3173C87.3871 47.4673 87.5921 47.5423 87.8721 47.5423C88.1921 47.5423 88.4496 47.4398 88.6446 47.2348C88.8396 47.0248 88.9371 46.7498 88.9371 46.4098V44.5723C88.9371 44.4823 88.9646 44.4098 89.0196 44.3548C89.0746 44.2998 89.1496 44.2723 89.2446 44.2723Z"
					fill="#50DFFD"
				/>
				<path
					d="M92.3612 47.5573C92.5362 47.5723 92.6237 47.6523 92.6237 47.7973C92.6237 47.8823 92.5913 47.9473 92.5262 47.9923C92.4663 48.0323 92.3737 48.0473 92.2487 48.0373L92.0462 48.0223C91.6463 47.9923 91.3512 47.8723 91.1613 47.6623C90.9712 47.4523 90.8763 47.1348 90.8763 46.7098V44.8273H90.3737C90.2887 44.8273 90.2213 44.8073 90.1712 44.7673C90.1263 44.7223 90.1038 44.6648 90.1038 44.5948C90.1038 44.5198 90.1263 44.4598 90.1712 44.4148C90.2213 44.3698 90.2887 44.3473 90.3737 44.3473H90.8763V43.4998C90.8763 43.4048 90.9038 43.3323 90.9587 43.2823C91.0137 43.2273 91.0887 43.1998 91.1838 43.1998C91.2738 43.1998 91.3462 43.2273 91.4012 43.2823C91.4562 43.3323 91.4837 43.4048 91.4837 43.4998V44.3473H92.3162C92.3962 44.3473 92.4587 44.3698 92.5037 44.4148C92.5537 44.4598 92.5788 44.5198 92.5788 44.5948C92.5788 44.6648 92.5537 44.7223 92.5037 44.7673C92.4587 44.8073 92.3962 44.8273 92.3162 44.8273H91.4837V46.7398C91.4837 47.0148 91.5387 47.2148 91.6488 47.3398C91.7637 47.4598 91.9338 47.5273 92.1587 47.5423L92.3612 47.5573Z"
					fill="#50DFFD"
				/>
				<path
					d="M93.5301 48.0373C93.4401 48.0373 93.3651 48.0123 93.3051 47.9623C93.2501 47.9073 93.2226 47.8323 93.2226 47.7373V44.5723C93.2226 44.4773 93.2501 44.4048 93.3051 44.3548C93.3651 44.2998 93.4401 44.2723 93.5301 44.2723C93.6201 44.2723 93.6926 44.2998 93.7476 44.3548C93.8026 44.4048 93.8301 44.4773 93.8301 44.5723V47.7373C93.8301 47.8373 93.8026 47.9123 93.7476 47.9623C93.6926 48.0123 93.6201 48.0373 93.5301 48.0373ZM93.5301 43.4848C93.4101 43.4848 93.3126 43.4498 93.2376 43.3798C93.1626 43.3098 93.1251 43.2173 93.1251 43.1023C93.1251 42.9923 93.1626 42.9023 93.2376 42.8323C93.3126 42.7623 93.4101 42.7273 93.5301 42.7273C93.6501 42.7273 93.7476 42.7623 93.8226 42.8323C93.8976 42.9023 93.9351 42.9923 93.9351 43.1023C93.9351 43.2173 93.8976 43.3098 93.8226 43.3798C93.7476 43.4498 93.6501 43.4848 93.5301 43.4848Z"
					fill="#50DFFD"
				/>
				<path
					d="M96.4807 48.0523C96.1357 48.0523 95.8307 47.9748 95.5657 47.8198C95.3057 47.6648 95.1032 47.4448 94.9582 47.1598C94.8182 46.8698 94.7482 46.5348 94.7482 46.1548C94.7482 45.7748 94.8182 45.4423 94.9582 45.1573C95.1032 44.8673 95.3057 44.6448 95.5657 44.4898C95.8307 44.3348 96.1357 44.2573 96.4807 44.2573C96.8257 44.2573 97.1307 44.3348 97.3957 44.4898C97.6607 44.6448 97.8632 44.8673 98.0032 45.1573C98.1482 45.4423 98.2207 45.7748 98.2207 46.1548C98.2207 46.5348 98.1482 46.8698 98.0032 47.1598C97.8632 47.4448 97.6607 47.6648 97.3957 47.8198C97.1307 47.9748 96.8257 48.0523 96.4807 48.0523ZM96.4807 47.5498C96.8407 47.5498 97.1157 47.4323 97.3057 47.1973C97.5007 46.9573 97.5982 46.6098 97.5982 46.1548C97.5982 45.7098 97.5007 45.3673 97.3057 45.1273C97.1107 44.8823 96.8357 44.7598 96.4807 44.7598C96.1257 44.7598 95.8507 44.8823 95.6557 45.1273C95.4607 45.3673 95.3632 45.7098 95.3632 46.1548C95.3632 46.6048 95.4582 46.9498 95.6482 47.1898C95.8432 47.4298 96.1207 47.5498 96.4807 47.5498Z"
					fill="#50DFFD"
				/>
				<path
					d="M100.963 44.2573C101.838 44.2573 102.276 44.7398 102.276 45.7048V47.7373C102.276 47.8323 102.248 47.9073 102.193 47.9623C102.143 48.0123 102.071 48.0373 101.976 48.0373C101.881 48.0373 101.806 48.0123 101.751 47.9623C101.696 47.9073 101.668 47.8323 101.668 47.7373V45.7423C101.668 45.4023 101.601 45.1548 101.466 44.9998C101.336 44.8448 101.126 44.7673 100.836 44.7673C100.501 44.7673 100.233 44.8698 100.033 45.0748C99.8334 45.2798 99.7334 45.5573 99.7334 45.9073V47.7373C99.7334 47.8323 99.7059 47.9073 99.6509 47.9623C99.6009 48.0123 99.5284 48.0373 99.4334 48.0373C99.3384 48.0373 99.2634 48.0123 99.2084 47.9623C99.1534 47.9073 99.1259 47.8323 99.1259 47.7373V44.5723C99.1259 44.4823 99.1534 44.4098 99.2084 44.3548C99.2634 44.2998 99.3384 44.2723 99.4334 44.2723C99.5234 44.2723 99.5934 44.2998 99.6434 44.3548C99.6984 44.4098 99.7259 44.4798 99.7259 44.5648V44.9473C99.8459 44.7223 100.013 44.5523 100.228 44.4373C100.443 44.3173 100.688 44.2573 100.963 44.2573Z"
					fill="#50DFFD"
				/>
			</svg>
		</div>
	);
};

export default Logo;


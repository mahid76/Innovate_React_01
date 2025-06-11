import headContact from "../../assets/contactBanner.png";
import gmail from "../../assets/gmail.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import send from "../../assets/send.png";
import x from "../../assets/x.png";
import Logo2 from "../CustomLogo/Logo2";
import Container from "../Layout/Container";

const Footer = () => {
	return (
		<div className="2xl:pt-[291px] 2xl:pb-[30px] pt-35 pb-5  bg-[#F7F7FC] mt-30 2xl:mt-[309px]">
			<Container>
				<div className="absolute top-[-200px] 2xl:-top-[464px] left-0 w-full">
					<div
						className="2xl:py-[100px] 2xl:px-[102px] py-8 px-5 2xl:rounded-[40px] rounded-[15px] bg-no-repeat  bg-center bg-cover"
						style={{ backgroundImage: `url(${headContact})` }}
					>
						<div className="flex justify-between  items-center">
							<h1 className="max-w-[577px] w-[200px] 2xl:w-auto font-primary font-bold text-white text-[16px] 2xl:text-[44px]">
								Don’t find the answer? contact us for any query.
							</h1>
							<div>
								<a href="#">
									<p className="2xl:py-5 py-2 px-3 2xl:px-12 rounded-[6px] bg-secondary text-headtext font-secondary font-medium leading-5 text-sm 2xl:text-lg ">
										Contact Us
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row 2xl:justify-between">
					<div>
						<a href="#">
							<Logo2></Logo2>
						</a>
						<p className="font-secondary text-sm lg:text-[16px] lg:leading-[28px] text-subtext max-w-[263px] mt-3 mb-3 lg:mt-[26px] lg:mb-[24px]  ">
							Build a modern and creative website with Innovate.
						</p>
						<div className="flex lg:gap-x-[6px]">
							<img src={gmail} alt="" />
							<img src={x} alt="" />
							<img src={insta} alt="" />
							<img src={linkedin} alt="" />
						</div>
					</div>
					<div className="flex lg:flex-row flex-col gap-y-5  lg:gap-x-[83px]">
						<div>
							<h4 className="mt-4 lg:mt-0 font-secondary font-medium text-base lg:text-lg leading-8 text-headtext mb-1 lg:mb-5  ">
								Product
							</h4>
							<ul className=" flex flex-col gap-y-[2px] lg:gap-y-3 font-secondary text-xs lg:text-[16px] lg:leading-[28px] text-subtext   ">
								<li>
									<a href="#">Landingpages</a>
								</li>
								<li>
									<a href="#">Pricing</a>
								</li>
								<li>
									<a href="#">Benefits</a>
								</li>
								<li>
									<a href="#">Features</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-secondary font-medium text-base lg:text-lg leading-8 text-headtext mb-1 lg:mb-5  ">
								Company
							</h4>
							<ul className="flex flex-col gap-y-[2px] lg:gap-y-3 font-secondary text-xs lg:text-[16px] lg:leading-[28px] text-subtext   ">
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
								<li>
									<a href="#">Terms & Conditions</a>
								</li>
								<li>
									<a href="#">Partners</a>
								</li>
								<li>
									<a href="#">Contact</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-secondary font-medium text-base lg:text-lg leading-8 text-headtext mb-1 lg:mb-5  ">
								Resources
							</h4>
							<ul className="flex flex-col gap-y-[2px] lg:gap-y-3 font-secondary text-xs lg:text-[16px] lg:leading-[28px] text-subtext    ">
								<li>
									<a href="#">Guides and resources</a>
								</li>
								<li>
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">Tools</a>
								</li>
								<li>
									<a href="#">Support</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-secondary font-medium text-base lg:text-lg leading-8 text-headtext mb-1 lg:mb-5  ">
								Get Latest Updates
							</h4>
							<p className="max-w-[285px] font-secondary text-xs lg:text-[16px] lg:leading-[26px] text-subtext  ">
								Subscribe to our newsletter and get many interesting things
								every week
							</p>
							<div className="mt-8 relative">
								<input
									className="w-full placeholder:font-secondary placeholder:leading-[1505 placeholder:text-[#A1A2A3] rounded-[5px]  border border-[#D2D2D2] outline-0 py-[14px] px-[18px] "
									placeholder="Your Email Address"
									type="text"
									name=""
									id=""
								/>
								<a className="absolute bottom-[8.5px] right-[8.5px]" href="#">
									<img className="w-9 h-9" src={send} alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-[86px] w-full rounded-full h-[1px] shadow-md bg-[#D2D2D2] mb-3 lg:mb-6 "></div>
				<a
					className="text-subtext font-secondary text-[10px] lg:text-[14px] lg:leading-5  "
					href="#"
				>
					© 2024 Innovate - All Right Reserved
				</a>
			</Container>
		</div>
	);
};

export default Footer;


import featuresPic from "../../assets/features.png";
import featuresIcon01 from "../../assets/featuresIcon01.png";
import featuresIcon02 from "../../assets/featuresIcon02.png";
import featuresIcon03 from "../../assets/featuresIcon03.png";
import Container from "../Layout/Container";

const Features = () => {
	return (
		<section className="pb-[55px]">
			<Container>
				<div className=" md:flex justify-between ">
					<div>
						<img src={featuresPic} alt="featuresPic" />
					</div>
					<div>
						<h3 className="w-auto text-center md:w-[553px] font-primary font-bold text-[25px] md:text-[46px] leading-8 md:leading-[58px] md:tracking-[-1px] text-headtext  ">
							We provide features for your Business
						</h3>

						<div className="flex-col md:flex-row flex justify-between mt-10 md:mt-[64px]">
							<div className="w-auto md:w-[220px]">
								<img src={featuresIcon01} alt="" />
								<h4 className="mt-2 md:mt-[14px] mb-[6px] font-primary font-bold text-[18px] md:text-[22px] md:leading-[34px] tracking-[-0.5%] text-headtext ">
									Fast and Easy to use
								</h4>
								<p className=" font-secondary text-[14px] md:text-lg md:leading-[32px] text-subtext ">
									Easily to convert API with just a few clicks
								</p>
							</div>
							<div className="w-auto md:w-[220px] mt-10 md:mt-0">
								<img src={featuresIcon02} alt="" />
								<h4 className="mt-2 md:mt-[14px] mb-[6px] font-primary font-bold text-[18px] md:text-[22px] md:leading-[34px] tracking-[-0.5%] text-headtext ">
									Safely Security
								</h4>
								<p className=" font-secondary text-[14px] md:text-lg md:leading-[32px] text-subtext">
									All customer data is encrypted
								</p>
							</div>
						</div>
						<div className="md:flex justify-between relative mt-10 md:mt-[64px]">
							<div className="w-auto md:w-[220px]">
								<img src={featuresIcon03} alt="" />
								<h4 className="mt-2 md:mt-[14px] mb-[6px] font-primary font-bold text-[18px] md:text-[22px] md:leading-[34px] tracking-[-0.5%] text-headtext">
									Get Organized
								</h4>
								<p className=" font-secondary text-[14px] md:text-lg md:leading-[32px] text-subtext">
									From lists to boards, organize work your way.
								</p>
							</div>
							<div className="mt-5 md:mt-[96px]">
								<a href="#">
									<p 
									className=" cursor-pointer py-2  text-center md:py-[20px] md:px-[48px] bg-primary text-white rounded-[6px]   "
									href="#"
								>
									Get Started
								</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Features;

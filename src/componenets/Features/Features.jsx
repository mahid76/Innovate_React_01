import React from "react";
import featuresPic from "../../assets/features.png";
import featuresIcon01 from "../../assets/featuresIcon01.png";
import featuresIcon02 from "../../assets/featuresIcon02.png";
import featuresIcon03 from '../../assets/featuresIcon03.png'
import Container from "../Layout/Container";




const Features = () => {
	return (
		<section className="pb-[55px]">
			<Container>
				<div className=" flex justify-between ">
					<div>
						<img src={featuresPic} alt="featuresPic" />
					</div>
					<div>
						<h3 className=" w-[553px] font-primary font-bold text-[46px] leading-[58px] tracking-[-1px] text-headtext  ">
							We provide features for your Business
						</h3>

						<div className="flex justify-between mt-[64px]">
							<div className="w-[220px]">
								<img src={featuresIcon01} alt="" />
								<h4 className="mt-[14px] mb-[6px] font-primary font-bold text-[22px] leading-[34px] tracking-[-0.5%] text-headtext ">
									Fast and Easy to use
								</h4>
								<p className=" font-secondary text-lg leading-[32px] text-subtext ">
									Easily to convert API with just a few clicks
								</p>
							</div>
							<div className="w-[220px]">
								<img src={featuresIcon02} alt="" />
								<h4 className="mt-[14px] mb-[6px] font-primary font-bold text-[22px] leading-[34px] tracking-[-0.5%] text-headtext ">
									Safely Security
								</h4>
								<p className=" font-secondary text-lg leading-[32px] text-subtext ">
									All customer data is encrypted
								</p>
							</div>
						</div>
						<div className="flex justify-between relative mt-[64px]">
							<div className="w-[220px]">
								<img src={featuresIcon03} alt="" />
								<h4 className="mt-[14px] mb-[6px] font-primary font-bold text-[22px] leading-[34px] tracking-[-0.5%] text-headtext ">
                Get Organized
								</h4>
								<p className=" font-secondary text-lg leading-[32px] text-subtext ">
                From lists to boards, organize work your way. 
								</p>
							</div>
							<div className="mt-[96px]">
								<a className=" py-[20px] px-[48px] bg-primary text-white rounded-[6px]   " href="#">Get Started</a>
							</div>
						</div>
					</div>
				</div>




			</Container>
		</section>
	);
};

export default Features;

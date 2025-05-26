import aboutCircleShape from "../../assets/aboutCircleShapepng.png";
import star from "../../assets/starpng.png";
import Button from "../button/Button";
import Container from "../Layout/Container";
import AboutSlider from "./AboutSlider";

const About = () => {
	return (
		<div className="py-[200px] bg-[#F4FAFA]">
			<Container>
				<div className="flex">
					<div className="w-1/2">
						<h2 className="w-[594px] font-primary font-bold text-[46px] leading-[58px] text-headtext ">
							What they are talking about us?
						</h2>
						<p className="w-[503px] font-secondary text-lg leading-[32px] tracking-[-0.25% text-subtext] mt-5 mb-10  ">
							testimonials are evidence of customers talking about your product
							or service in their own words. At their best, they are authentic,
							descriptive.
						</p>
						<div>
							<Button></Button>
						</div>
						<div className="mt-[80px] flex flex-row gap-x-[30px] items-center ">
							<img src={aboutCircleShape} alt="aboutCircleShape" />
							<div>
								<div className="flex gap-x-[15px]">
									<h4 className="font-primary font-black text-2xl leading-[36px] tracking-[-2%] text-[#52C5B6]  ">
										4.5 <span className="text-[#DADBE2]">|</span>
									</h4>

									<div className="flex items-center gap-x-1">
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
									</div>
								</div>
								<p className="font-secondary font-medium text-lg leading-8 text-subtext  ">
									280k Total Review
								</p>
							</div>
						</div>
					</div>
					<div className="w-1/2  ">
						<AboutSlider></AboutSlider>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default About;

{
	/* <div className="w-[687px] h-[346px] bg-white rounded-[20px] pt-[64px] pb-[50px] px-[60px] relative mt-[117px]  ">
								<p className="font-secondary text-[22px] leading-11 text-subtext mb-[37px]  ">
									“Wow. Amazing company amazing Expert Manager. They know how to
									get things done when it comes to online trading.
								</p>
								<div className=" flex  justify-between items-end">
									<div>
										<h4 className="font-primary font-bold text-2xl leading-[36px] text-headtext mb-1  ">
											Robert Fox
										</h4>
										<p className="font-secondary text-[16px] leading-[26px] text-headtext   ">
											Digital Marketer
										</p>
									</div>
									<div className="flex items-center gap-x-1">
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-[14.19px] w-13.69pc "
											src={star}
											alt="star"
										/>
									</div>
                  <div className="absolute -top-[70px] left-[38px] rounded-full w-[124px] h-[124px] bg-[#C4C4C4] border-[10px] border-[#F7F7FC] "></div>
								</div>
							</div> */
}

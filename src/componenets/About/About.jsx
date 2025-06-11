import aboutCircleShape from "../../assets/aboutCircleShapepng.png";
import star from "../../assets/starpng.png";
import Button from "../Button/Button";
import Container from "../Layout/Container";
import AboutSlider from "./AboutSlider";

const About = () => {
	return (
		<div className="py-15 md:py-[200px] bg-[#F4FAFA]">
			<Container>
				<div className=" flex md:flex-row gap-y-15 md:gap-y-0 flex-col">
					<div className="md:w-1/2">
						<h2 className="max-w-[594px] font-primary font-bold text-[25px] md:text-[46px] md:leading-[58px] text-headtext ">
							What they are talking about us?
						</h2>
						<p className="max-w-[503px] font-secondary text-sm md:text-lg md:leading-[32px] leading-6 tracking-[-0.25%] text-subtext md:mt-5 md:mb-10 mt-2 mb-8  ">
							testimonials are evidence of customers talking about your product
							or service in their own words. At their best, they are authentic,
							descriptive.
						</p>
						<div>
							<Button></Button>
						</div>
						<div className="mt-20 md:mt-[80px] flex flex-row gap-x-[30px] items-center ">
							<img src={aboutCircleShape} alt="aboutCircleShape" />
							<div>
								<div className="flex gap-x-2 lg:gap-x-[15px]">
									<h4 className="font-primary font-black text-lg lg:text-2xl lg:leading-[36px] tracking-[-2%] text-[#52C5B6]  ">
										4.5 <span className="text-[#DADBE2]">|</span>
									</h4>

									<div className="flex items-center gap-x-1">
										<img
											className="h-auto w-[9px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-auto w-[9px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-auto w-[9px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-auto w-[9px] w-13.69pc "
											src={star}
											alt="star"
										/>
										<img
											className="h-auto w-[9px] w-13.69pc "
											src={star}
											alt="star"
										/>
									</div>
								</div>
								<p className="font-secondary font-medium text-sm lg:text-lg leading-8 text-subtext  ">
									280k Total Review
								</p>
							</div>
						</div>
					</div>
					<div className="md:w-1/2  ">
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

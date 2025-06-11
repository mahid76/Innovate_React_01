import laptop from "../../assets/bannerLaptop.png";
import Container from "../Layout/Container";

const Bannner = () => {
	return (
		<div className=" text-center pt-[50px] pb-[160px]  md:pt-[98px] md:pb-[558.85px] relative ">
			<Container>
				<h1 className="w-auto md:w-[796px] pb-3 md:pb-5 mx-auto font-bold text-white font-primary text-[32px] md:text-[56px] leading-11 md:leading-16">
					Get your work done with Management Tool
				</h1>
				<p className="w-auto md:w-[467px] mx-auto pb-5 md:pb-8 font-secondary text-[14px]  md:text-lg text-white leading-5 md:leading-8 tracking-[-0.25%] ">
					The world's first project management platform that connects everything
				</p>
				<div className="flex justify-center">
					<div className="relative">
					<input
						className="w-[300px] md:w-[480px] bg-white py-2 md:py-5 px-2 outline-0 rounded-[6px] placeholder: text-[#4f4f51]" 
						type="text"
						placeholder="Your business email"
					/>
					<p
						className="bg-secondary cursor-pointer text-headtext py-2 px-2 md:py-[15px] md:px-[28.5px] rounded-[6px] font-secondary font-medium text-[14px] md:text-lg absolute top-[2px] right-[2px] md:right-[3px] md:top-[3px] "
						href="#"
					>
						Try for free
					</p>
				</div>
				</div>
			</Container>
			<div className="absolute -bottom-[58px] md:-bottom-[176.15px] left-1/2 -translate-x-1/2 w-[350px] md:w-[1200px] ">
				<img className=" " src={laptop} alt="" />
			</div>
		</div>
	);
};

export default Bannner;

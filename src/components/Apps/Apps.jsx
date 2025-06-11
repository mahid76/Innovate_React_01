import Button from "../button/Button";
import Apps1 from "../CustomLogo/Apps1";
import Apps2 from "../CustomLogo/Apps2";
import Apps3 from "../CustomLogo/Apps3";
import Apps4 from "../CustomLogo/Apps4";
import Apps5 from "../CustomLogo/Apps5";
import Apps6 from "../CustomLogo/Apps6";
import Apps7 from "../CustomLogo/Apps7";
import Ellipse from '../../assets/appsLogo and Ellipse.png'
import Container from "../Layout/Container";

const Apps = () => {
	return (
		<section className="bg-[#F4FAFA] py-15 md:pb-[120px] md:pt-[124px]">
			<Container>
				<div className="md:flex items-center justify-between ">
					<div className="">
						<h5 className="font-secondary text-[18px] md:text-[20px] font-medium text-[#FF7364] ">
							Integrations
						</h5>
						<h1 className="mt-1 mb-3 md:mb-5 max-w-[587px] font-primary text-[30px]  md:text-[46px] font-bold text-headtext md:leading-[58px] tracking-[-1%] ">
							Easily integrate with your favorite apps
						</h1>
						<p className="max-w-[533px] font-secondary md:leading-8 tracking-[-0.25%] text-[18px] md:text-lg text-subtext mb-10  ">
							App integration, in a general sense, is the process of bringing
							resources or capabilities from one application to another. As the
							world of apps continues to evolve, app integration is becoming
							expected in many contexts.
						</p>

						<div>
							<Button></Button>
						</div>
					</div>
					<div className=" md:block flex flex-col  items-center mt-10 md:mt-0">
						<div className=" flex md:flex-row  gap-x-[10px] flex-wrap     md:gap-x-[30px]">
							<Apps1></Apps1>
							<Apps2></Apps2>
						</div>
						<div className=" flex md:flex-row flex-wrap  gap-x-[5px] md:gap-x-[30px] my-4 md:my-[34px]   ">
							<Apps3></Apps3>
							<Apps4></Apps4>
							<Apps5></Apps5>
						</div>
						<div className=" flex md:flex-row flex-wrap   gap-x-[10px] md:gap-x-[30px]  ">
							<Apps6></Apps6>
							<Apps5 ></Apps5>
							<Apps7></Apps7>
						</div>
					</div>
				</div>
				<div className="absolute -bottom-[98px] -left-[148px]  hidden md:block "> 
					<img src={Ellipse} alt="Ellipse" />
				</div>
			</Container>
		</section>
	);
};

export default Apps;

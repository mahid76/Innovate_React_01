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
		<section className="bg-[#F4FAFA] py-15 md:py-[173px]">
			<Container>
				<div className="md:flex items-center justify-between ">
					<div className="">
						<h5 className="font-secondary text-[18px] md:text-[20px] font-medium text-[#FF7364] ">
							Integrations
						</h5>
						<h1 className="mt-1 mb-3 md:mb-5 mx-w-[587px] font-primary text-[30px]  md:text-[46px] font-bold text-headtext md:leading-[58px] tracking-[-1%] ">
							Easily integrate with your favorite apps
						</h1>
						<p className="mx-w-[533px] font-secondary md:leading-8 tracking-[-0.25%] text-[18px] md:text-lg text-subtext mb-10  ">
							App integration, in a general sense, is the process of bringing
							resources or capabilities from one application to another. As the
							world of apps continues to evolve, app integration is becoming
							expected in many contexts.
						</p>

						<div>
							<Button></Button>
						</div>
					</div>
					<div className="mt-10 md:mt-0">
						<div className=" flex md:flex-row flex-col  hello gap-y-3 md:gap-y-0 md:gap-x-[30px]">
							<Apps1></Apps1>
							<Apps2></Apps2>
						</div>
						<div className=" flex md:flex-row flex-col gap-x-[30px] my-[34px] gap-y-3 md:gap-y-0 ">
							<Apps3></Apps3>
							<Apps4></Apps4>
							<Apps5></Apps5>
						</div>
						<div className=" flex md:flex-row flex-col gap-x-[30px] gap-y-3 md:gap-y-0 ">
							<Apps6></Apps6>
							<Apps5></Apps5>
							<Apps7></Apps7>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 transform -translate-x-full translate-y-full"> 
					<img src={Ellipse} alt="Ellipse" />
				</div>
			</Container>
		</section>
	);
};

export default Apps;

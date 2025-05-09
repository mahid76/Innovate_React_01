import Button from "../button/Button";
import Apps1 from "../CustomLogo/Apps1";
import Apps2 from "../CustomLogo/Apps2";
import Apps3 from "../CustomLogo/Apps3";
import Apps4 from "../CustomLogo/Apps4";
import Apps5 from "../CustomLogo/Apps5";
import Apps6 from "../CustomLogo/Apps6";
import Apps7 from "../CustomLogo/Apps7";
import Container from "../Layout/Container";

const Apps = () => {
	return (
		<section className="bg-[#F4FAFA] py-[173px]">
			<Container>
				<div className="flex items-center justify-between ">
					<div className="">
						<h5 className="font-secondary text-[20px] font-medium text-[#FF7364] ">
							Integrations
						</h5>
						<h1 className="mt-1 mb-5 w-[587px] font-primary text-[46px] font-bold text-headtext leading-[58px] tracking-[-1%] ">
							Easily integrate with your favorite apps
						</h1>
						<p className="w-[533px] font-secondary leading-8 tracking-[-0.25%] text-lg text-subtext mb-10  ">
							App integration, in a general sense, is the process of bringing
							resources or capabilities from one application to another. As the
							world of apps continues to evolve, app integration is becoming
							expected in many contexts.
						</p>

						<div>
							<Button></Button>
						</div>
					</div>
					<div className="">
						<div className="flex  hello gap-x-[30px]">
							<Apps1></Apps1>
							<Apps2></Apps2>
						</div>
						<div className="flex gap-x-[30px] my-[34px]">
							<Apps3></Apps3>
							<Apps4></Apps4>
							<Apps5></Apps5>
						</div>
						<div className="flex gap-x-[30px]">
							<Apps6></Apps6>
							<Apps5></Apps5>
							<Apps7></Apps7>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Apps;

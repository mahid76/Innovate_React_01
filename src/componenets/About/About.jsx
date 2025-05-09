import Button from "../button/Button";
import Container from "../Layout/Container";
import aboutCircleShape from '../../assets/aboutCircleShapepng.png'
import star from '../../assets/starpng.png'
import aboutCircle from '../../assets/aboutCirclepng.png'
import aboutRectangle from '../../assets/aboutRectangle.png'

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
                  <h4 className="font-primary font-black text-2xl leading-[36px] tracking-[-2%] text-[#52C5B6]  ">4.5 <span className="text-[#DADBE2]">|</span></h4>
                  
                  <div className="flex items-center gap-x-1">
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                  </div>
                </div>
                <p className="font-secondary font-medium text-lg leading-8 text-subtext  ">280k Total Review</p>
              </div>
            </div>
					</div>
					<div className="w-1/2 relative">
          <div className="relative">
            <img className="absolute top-[-12px] left-[48px] z-10" src={aboutCircle} alt="aboutCircle" />
           <img className="custom_shadow2 absolute top-[86px] left-0" src={aboutRectangle} alt="aboutRectangle" />
          </div>
           <div className= "absolute top-[140px] left-[60px] w-[567px]">
            <p className="font-secondary text-[22px] leading-11 text-subtext mb-[37px]  ">“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.</p>
            <div className=" flex  justify-between items-end">
              <div>
                <h4 className="font-primary font-bold text-2xl leading-[36px] text-headtext mb-1  ">Robert Fox</h4>
                <p className="font-secondary text-[16px] leading-[26px] text-headtext   ">Digital Marketer</p>
              </div>
              <div className="flex items-center gap-x-1">
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                    <img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
                  </div>
            </div>
           </div>
          </div>
				</div>
			</Container>
		</div>
	);
};

export default About;

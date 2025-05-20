import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import star from "../../assets/starpng.png";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{  ...style, display: "flex", background: "none",  justifyContent: "center", alignItems: "center", fontSize: "50px", color: "#3639A4", borderRadius: "40%", position:"absolute", top:"213px", right:"-60px" , zIndex: "1", 

       }}
      onClick={onClick}
    >
      <a href="#"><MdNavigateNext /></a>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
   <div
      className={className}
      style={{ ...style, display: "flex", background: "none",  justifyContent: "center", alignItems: "center", fontSize: "50px", color: "#3639A4", borderRadius: "40%", position:"absolute", top:"213px", left:"-60px" , zIndex: "1", 


       }}
      onClick={onClick}
    >
     <a href="#"><MdNavigateBefore /></a>
    </div>
  );
}


const AboutSlider = () => {
	var settings = {
		dots: false,
    arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
    nextArrow: <SampleNextArrow></SampleNextArrow>,
    prevArrow: <SamplePrevArrow />
	};
	return (
		<div className="w-full ">
			<Slider {...settings}>
				<div className="mt-[67px] py-[10px] relative">
          	
        <div className="w-[687px] h-[346px] bg-white rounded-[20px] pt-[64px] pb-[50px] px-[60px] relative  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  ">
					<p className="font-secondary text-[22px] leading-11 text-subtext mb-[37px]  ">
						“Wow. Amazing company amazing Expert Manager. They know how to get
						things done when it comes to online trading.
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
							<img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
							<img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
							<img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
							<img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
							<img className="h-[14.19px] w-13.69pc " src={star} alt="star" />
						</div>
					
					</div>
				</div>
          <div className="absolute -top-[70px] left-[38px] rounded-full w-[124px] h-[124px] bg-[#C4C4C4] border-[10px] border-[#F7F7FC] "></div>
        </div>
				<div className="mt-[67px] py-[10px] relative">
          	
        <div className="w-[687px] h-[346px] bg-white rounded-[20px] pt-[64px] pb-[50px] px-[60px] relative  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  ">
					<p className="font-secondary text-[22px] leading-11 text-subtext mb-[37px]  ">
						“Wow. Amazing company amazing Expert Manager. They know how to get
						things done when it comes to online trading.
					</p>
					<div className=" flex  justify-between items-end">
						<div>
							<h4 className="font-primary font-bold text-2xl leading-[36px] text-headtext mb-1  ">
								Poblaaa
							</h4>
							<p className="font-secondary text-[16px] leading-[26px] text-headtext   ">
								Digital Marketer
							</p>
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
          <div className="absolute -top-[70px] left-[38px] rounded-full w-[124px] h-[124px] bg-[#C4C4C4] border-[10px] border-[#F7F7FC] "></div>
        </div>
				<div className="mt-[67px] py-[10px] relative">
          	
        <div className="w-[687px] h-[346px] bg-white rounded-[20px] pt-[64px] pb-[50px] px-[60px] relative  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  ">
					<p className="font-secondary text-[22px] leading-11 text-subtext mb-[37px]  ">
						“Wow. Amazing company amazing Expert Manager. They know how to get
						things done when it comes to online trading.
					</p>
					<div className=" flex  justify-between items-end">
						<div>
							<h4 className="font-primary font-bold text-2xl leading-[36px] text-headtext mb-1  ">
								Jerry
							</h4>
							<p className="font-secondary text-[16px] leading-[26px] text-headtext   ">
								Digital Marketer
							</p>
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
          <div className="absolute -top-[70px] left-[38px] rounded-full w-[124px] h-[124px] bg-[#C4C4C4] border-[10px] border-[#F7F7FC] "></div>
        </div>
				

				
				
				
			</Slider>
		</div>
	);
};

export default AboutSlider;

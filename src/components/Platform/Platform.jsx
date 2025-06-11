import React from "react";
import platform01 from "../../assets/platform01.png";
import platform02 from "../../assets/platform02.png";
import platform03 from "../../assets/platform03.png";
import Container from "../Layout/Container";




const Platform = () => {

  const platformData = [
    {
      img: platform01,
      title: 'Login or sign up to be able use our platform',
      description: 'This quickstart shows you how to use Identity Platform to sign in a user with an email and password.'
    },
    {
      img: platform02,
      title: 'Connect your website with just a few click',
      description: 'Once your website is online, you can configure it, I will show you how to put your website online'
    },
    {
      img: platform03,
      title: 'Take some sales data that you want',
      description: 'Sell your data directly: The most straightforward method is to sell your data directly to another'
    }
  ]


	return (
		<section className=" pt-30 md:pt-[336.15px] pb-[75px] md:pb-[160px] ">
			<Container>
				<div className=" ">
					<div className="md:flex  justify-between">
						<h3 className="w-auto md:w-[504px] font-primary font-bold text-[20px] md:text-[46px] md:leading-[58px] tracking-[-0.5px] md:tracking-[-1px] text-headtext  ">
							How simple is it to use our platform?
						</h3>
						<p className="w-auto md:w-[530px] font-secondary font-normal text-[14px]  md:text-lg leading-6 md:leading-[32px] mt-2 md:mt-0 tracking-[-0.25%] text-subtext">
							This Innovate Con guide explores the most popular platforms and
							walks you through how to use them to grow your business.
						</p>
					</div>
					<div className="flex-wrap flex justify-center md:justify-between">

            {
              platformData.map((item)=>(
                <div className="pt-[70px] md:pt-[116px] w-[300px] text-center ">
                  <img className="mx-auto md:w-auto w-22 " src={item.img} alt="platform01" />
                  <h4 className="pt-[15px] pb-2 md:pt-[26px] md:pb-3 font-bold font-primary text-[20px] md:text-2xl leading-9 text-headtext ">
								{item.title}
							</h4>
              <p className=" font-secondary leading-6 md:leading-8 md:tracking-[-0.25%] text-lg text-subtext ] ">
								{item.description}
							</p>
                </div>
              ))
            }
            
						
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Platform;

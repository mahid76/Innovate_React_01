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
		<section className="pt-[336.15px] py-[160px] ">
			<Container>
				<div className=" p-[62px]">
					<div className="flex justify-between">
						<h3 className="w-[504px] font-primary font-bold text-[46px] le-[58px] tracking-[-1px] text-headtext  ">
							How simple is it to use our platform?
						</h3>
						<p className="w-[530px] font-secondary font-normal text-lg le-[32px] tracking-[-0.25%] text-subtext">
							This Innovate Con guide explores the most popular platforms and
							walks you through how to use them to grow your business.
						</p>
					</div>
					<div className="flex justify-between">

            {
              platformData.map((item)=>(
                <div className="pt-[116px] w-[300px] text-center ">
                  <img className="mx-auto" src={item.img} alt="platform01" />
                  <h4 className=" pt-[26px] pb-3 font-bold font-primary text-2xl leading-9 text-headtext ">
								{item.title}
							</h4>
              <p className=" font-secondary leading-8 tracking-[-0.25%] text-lg text-subtext ] ">
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

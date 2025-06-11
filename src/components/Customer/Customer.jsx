import Container from "../Layout/Container";

const Customer = () => {
	const customerData = [
		{
			count: "720+",
			description: "Over 500 business powered with us",
		},
		{
			count: "4.9",
			description: "Rating on google play and app store",
		},
		{
			count: "200+",
			description: "Easily integrate with your favorite apps",
		},
	];

	return (
		<Container>
			<div className=" md:py-[85px] py-6 md:px-[70px] md:ml-[678px] ">
				<div className="flex flex-col gap-y-6 md:gap-y-[64px] max-w-[608px] ">
					<h3 className="text-shadow-lg/40 md:text-shadow-none max-w-[554px] text-center md:text-left font-primary text-lg md:text-[44px] backdrop-invert-0 font-bold text-white  ">
						Trusted by 35,000+ happy customers.
					</h3>
					<div className="flex  flex-col md:flex-row gap-y-3 md:gap-y-0 md:gap-x-10">
						{customerData.map((item) => (
							<div className="flex flex-col gap-y-[5px] md:gap-y-[12px]">
								<h3 className=" font-primary font-black text-[18px] md:text-[44px] md:leading-[54px] text-white  ">
									{item.count}
								</h3>
								<p className="text-shadow-lg md:text-shadow-none font-secondary text-[14px] md:text-lg md:leading-8 text-[#c1c1ef] font-medium  max-w-[176px]  ">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Customer;

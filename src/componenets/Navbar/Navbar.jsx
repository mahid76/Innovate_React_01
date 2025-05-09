import React from "react";
// import logo from '../../assets/Logo.png'
import Container from "../Layout/Container";
import Logo from "../CustomLogo/logo";
// import logo from '../CustomLogo/logo'

const Navbar = () => {
	return (
		<div className=" pt-[50px]">
			<Container>
				<div className="flex justify-between items-center text-white">
					{/* <a href="#">
						<img src={logo} alt="logo" />
					</a> */}
					<Logo></Logo>

					<ul className="flex gap-x-[68px] items-center font-secondary text-lg font-medium ">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">Service</a>
						</li>
						<li>
							<a href="#">Pages</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
					</ul>
					<div className="button flex gap-9 items-center font-secondary text-lg font-medium">
						<p>
							<a className="leading-{200%]" href="#">
								Login
							</a>
						</p>
						<p>
							<a
								className="text-headtext py-5 px-[48px] bg-secondary rounded-[6px] leading-5 font-medium"
								href="#"
							>
								Register
							</a>
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
Navbar;
